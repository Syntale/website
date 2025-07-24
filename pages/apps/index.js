import Layout from "../../src/layout/Layout";
import Link from "next/link";

const AppsIndex = () => {
  return (
    <Layout pageName={"Applications"} isHome={false}>
      <div className="min-h-screen bg-gradient-to-br from-pink-900 via-rose-900 to-gray-900 flex items-center justify-center">
        <div className="text-center px-6">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center">
              <span className="text-6xl font-bold text-white">A</span>
            </div>
            <h1 className="text-6xl font-bold text-white mb-4">Applications</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Custom gaming applications and tools coming soon
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Coming Soon</h3>
            <p className="text-gray-300 mb-6">
              We're developing innovative gaming applications and tools to enhance 
              your gaming experience across all platforms.
            </p>
            <a 
              href="https://discord.com/invite/syntale" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold rounded-full hover:from-pink-700 hover:to-rose-700 transform hover:scale-105 transition-all duration-300"
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

export default AppsIndex;