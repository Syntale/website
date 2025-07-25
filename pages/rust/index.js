import Layout from "../../src/layout/Layout";
import Link from "next/link";

const RustIndex = () => {
  return (
    <Layout pageName={"Rust"} isHome={false}>
      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-gray-900 flex items-center justify-center">
        <div className="text-center px-6">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
              <span className="text-6xl font-bold text-white">R</span>
            </div>
            <h1 className="text-6xl font-bold text-white mb-4">Rust Servers</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Hardcore survival experience coming soon to Syntale
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Coming Soon</h3>
            <p className="text-gray-300 mb-6">
              We&apos;re working hard to bring you the best Rust server experience. 
              Join our Discord to stay updated on the launch!
            </p>
            <a 
              href="https://discord.com/invite/syntale" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-full hover:from-orange-700 hover:to-red-700 transform hover:scale-105 transition-all duration-300"
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

export default RustIndex;