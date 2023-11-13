import Layout from "../src/layout/Layout";
import {useSession} from "next-auth/react";
import {redirect} from "next/navigation";
import {getServerSession} from "next-auth";
import {getAuthOptions} from "./api/auth/[...nextauth]";

const Dashboard = () => {

    const { data: session, status } = useSession()

    console.log(session);

    return (
        <Layout pageName={"Dashboard"}>
            <section id="dashboard">
                <div className="menu">
                </div>
                <div className="container"></div>
            </section>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const session = await getServerSession(
        context.req,
        context.res,
        getAuthOptions(context.req)
    );

    if (!session) return {
        redirect: {
            permanent: true,
            destination: "/api/auth/signin"
        }
    }

    return {
        props: {
            session: await getServerSession(
                context.req,
                context.res,
                getAuthOptions(context.req)
            ),
        },
    }
}
export default Dashboard;