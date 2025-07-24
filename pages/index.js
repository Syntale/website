import { useState, useEffect } from "react";
import Layout from "../src/layout/Layout";
import Link from "next/link";

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      id: 'unturned',
      title: 'Unturned',
      description: 'Popular survival servers with unique features',
      icon: '/img/services/unturned.png',
      path: '/unturned',
      color: 'from-green-500 to-emerald-600',
      available: true
    },
    {
      id: 'rust',
      title: 'Rust',
      description: 'Hardcore survival experience',
      icon: '/img/services/rust.png',
      path: '/rust',
      color: 'from-orange-500 to-red-600',
      available: false
    },
    {
      id: 'minecraft',
      title: 'Minecraft',
      description: 'Creative and survival worlds',
      icon: '/img/services/minecraft.png',
      path: '/minecraft',
      color: 'from-blue-500 to-cyan-600',
      available: false
    },
    {
      id: 'hosting',
      title: 'Hosting',
      description: 'Premium game server hosting',
      icon: '/img/services/hosting.png',
      path: '/hosting',
      color: 'from-purple-500 to-indigo-600',
      available: false
    },
    {
      id: 'apps',
      title: 'Applications',
      description: 'Custom gaming applications',
      icon: '/img/services/apps.png',
      path: '/apps',
      color: 'from-pink-500 to-rose-600',
      available: false
    }
  ];

  return (
    <Layout pageName={"Home"} isHome={true}>
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <img src="/img/logo-full.png" alt="Syntale" className="mx-auto mb-8 h-24 w-auto" />
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Syntale
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Your gateway to premium gaming experiences across multiple platforms
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`group relative transition-all duration-700 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {service.available ? (
                  <Link href={service.path}>
                    <div className="relative h-80 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-1">
                      {/* Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90`}></div>
                      
                      {/* Animated Border */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-white/20 to-white/5 group-hover:from-white/40 group-hover:to-white/20 transition-all duration-500"></div>
                      
                      {/* Content */}
                      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                        <div className="text-center">
                          <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all duration-500">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                              <span className="text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                                {service.title.charAt(0)}
                              </span>
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                            {service.title}
                          </h3>
                          <p className="text-white/80 text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        
                        <div className="text-center">
                          <div className="inline-flex items-center text-white/90 text-sm font-medium group-hover:text-white transition-colors duration-300">
                            Explore <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                          </div>
                        </div>
                      </div>

                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </Link>
                ) : (
                  <div className="relative h-80 rounded-2xl overflow-hidden cursor-not-allowed">
                    {/* Gradient Background - Muted */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-30`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                          <div className="w-12 h-12 bg-white/50 rounded-xl flex items-center justify-center">
                            <span className="text-2xl font-bold text-gray-400">
                              {service.title.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white/60 mb-3">
                          {service.title}
                        </h3>
                        <p className="text-white/40 text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-white/60 text-xs font-medium">
                          Coming Soon
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-gray-300 mb-8 text-lg">
              Join our community and stay updated on new services
            </p>
            <a 
              href="https://discord.com/invite/syntale" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <img src="/svg/discord.svg" alt="Discord" className="w-5 h-5 mr-3" />
              Join Discord Community
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </Layout>
  );
};

export default Index;
