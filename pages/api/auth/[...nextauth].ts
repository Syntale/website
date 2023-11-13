import {AuthOptions, getServerSession} from 'next-auth'
import SteamProvider, {PROVIDER_ID} from 'next-auth-steam'
import NextAuth from 'next-auth/next'
import DiscordProvider from "next-auth/providers/discord";
import {PrismaAdapter} from '@auth/prisma-adapter';
import {NextApiRequest, NextApiResponse} from "next";
import {getProviders, getSession} from "next-auth/react";

import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

export function getAuthOptions(req: NextApiRequest): AuthOptions {
    return {
        adapter: PrismaAdapter(prisma),
        providers: [
            SteamProvider(req, {
                clientSecret: process.env.STEAM_API_KEY!,
                callbackUrl: `${process.env.NEXTAUTH_URL}/api/auth/callback`
            }),
            DiscordProvider({
                authorization: "https://discord.com/api/oauth2/authorize?scope=identify+email+connections",
                clientId: process.env.DISCORD_CLIENT_ID,
                clientSecret: process.env.DISCORD_CLIENT_SECRET,
            })
        ],
        callbacks: {
            async session({session, user}) {

                const accounts = await prisma.account.findMany({
                    where: {
                        userId: user.id
                    }
                })

                accounts.forEach((account) => {
                    session.user[account.provider] = {
                        providerAccountId: account.providerAccountId,
                        access_token: account.access_token
                    }
                });

                return session;
            },
            async signIn({ user, account, profile}) {

                console.log("user")
                console.log(user)
                console.log("account")
                console.log(account)
                console.log("profile")
                console.log(profile)

                if (account.provider == PROVIDER_ID) return true;

                const session = await getSession({req})

                console.log("session")
                console.log(session)

                if (!session) return false;

                const sessionAccount = await prisma.account.findFirst({
                    where: {
                        user: {
                            email: session.user.email
                        }
                    }
                })

                console.log("sessionAccount")
                console.log(sessionAccount)

                if (sessionAccount.provider != PROVIDER_ID) return false;

                await prisma.account.create({
                    data: {
                        provider: account.provider,
                        type: account.type,
                        providerAccountId: account.providerAccountId,
                        access_token: account.access_token,
                        expires_at: account.expires_at,
                        scope: account.scope,
                        token_type: account.token_type,
                        id_token: account.id_token,
                        user: {
                            connect: {
                                id: sessionAccount.userId
                            }
                        },
                    },
                });
                return true;
            }
        }
    }
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    return NextAuth(req, res, getAuthOptions(req))
}
