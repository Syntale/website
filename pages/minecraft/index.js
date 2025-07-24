import Layout from "../../src/layout/Layout";
import Link from "next/link";

const MinecraftIndex = () => {
  return (
    <Layout pageName={"Minecraft"} isHome={false}>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-900 to-gray-900 flex items-center justify-center">
        <div className="text-center px-6">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center">
              <span className="text-6xl font-bold text-white">M</span>
            </div>
            <h1 className="text-6xl font-bold text-white mb-4">Minecraft Servers</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Creative and survival worlds coming soon to Syntale
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Coming Soon</h3>
            <p className="text-gray-300 mb-6">
              We're crafting the perfect Minecraft experience for our community. 
              Join our Discord to be the first to know when we launch!
            </p>
            <a 
              href="https://discord.com/invite/syntale" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300"
            >
              <img src="/svg/discord.svg" alt="Discord" className="w-4 h-4 mr-2" />
              Get Notified
            </a>
          </div>

          <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">
            ← Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default MinecraftIndex;