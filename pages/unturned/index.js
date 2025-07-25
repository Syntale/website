import { getRandomInt } from "../../src/utilities";
import Layout from "../../src/layout/Layout";
import { useEffect, useState } from "react";

const UnturnedIndex = () => {
  let [randomBg, setRandomBg] = useState(getRandomInt(6));

  return (
    <Layout pageName={"Syntale Unturned"} isHome={true}>
      {/* Hero Header */}
      <div className="neoh_fn_hero">
        {/* Overlay (of hero header) */}
        <div className="bg_overlay">
          {/* Overlay Color */}
          <div className="bg_color" />
          {/* !Overlay Color */}
          {/* Overlay Image */}
          <div className="bg_image" data-bg-img={`/img/hero/bg-${randomBg}.webp`} />
          {/* !Overlay Image */}
        </div>
        {/* Overlay (of hero header) */}
        <div className="hero_content">
          <div className="container">
            <div className="content">
              <div className="align-icon">
                <div style={{textAlign: 'center', width: '100%'}}>
                  <img className="fn_logo" src="/img/logo-full.png" alt="Syntale Logo" style={{width: '300px', marginBottom: '30px', display: 'block', margin: '0 auto 30px auto'}} />
                  <h1 style={{fontSize: '4rem', fontWeight: 'bold', color: 'white', marginBottom: '20px', lineHeight: '1.1', textAlign: 'center'}}>Unturned</h1>
                  <p style={{fontSize: '1.25rem', color: '#d1d5db', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6', textAlign: 'center'}}>
                    Premium Unturned servers with unique features and an amazing community
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a href="#about" className="neoh_fn_down magic-hover magic-hover__square">
            <span className="text">Scroll Down</span>
            <span className="icon">
              <img src="/svg/right-arr.svg" alt="" className="fn__svg" />
            </span>
          </a>
        </div>
      </div>
      {/* !Hero Header */}

      {/* About Section */}
      <section id="about">
        <div className="container">
          {/* About Item #1 */}
          <div className="neoh_fn_about_item">
            <div className="img_item">
              <img src="/img/about/Unturned.png" alt="Syntale Unturned" />
            </div>
            <div className="content_item">
              <div className="neoh_fn_title" data-align="left">
                <h3 className="fn_title">Welcome To Syntale Unturned</h3>
                <div className="line">
                  <span />
                </div>
              </div>
              <div className="desc">
                <p>Syntale Unturned is a premier server network offering the best Unturned experience with unique gameplay features and a thriving community.</p>
                <p>
                  Our dedicated team works tirelessly to provide balanced, engaging servers that cater to both casual players and hardcore survivors.
                </p>
                <p>
                  From vanilla survival to heavily modded experiences, we offer something for every type of Unturned player.
                </p>
              </div>
              <div className="buttons">
                <a
                  href="https://discord.com/invite/THwN4Ut7m3"
                  target="_blank"
                  rel="noreferrer"
                  className="neoh_fn_button"
                >
                  <span className="icon">
                    <img src="/svg/discord.svg" alt="" className="fn__svg" />
                  </span>
                  <span className="text">Join Discord</span>
                </a>
              </div>
            </div>
          </div>
          {/* !About Item #1 */}

          {/* About Item #2 */}
          <div className="neoh_fn_about_item reverse">
            <div className="img_item">
              <img
                src="https://hostvenom.com/images/servers.png"
                style={{ width: 600, height: 600 }}
                alt="High Performance Servers"
                width={1000}
                height={1000}
              />
            </div>
            <div className="content_item">
              <div className="neoh_fn_title" data-align="left">
                <h3 className="fn_title">High Performance Infrastructure</h3>
                <div className="line">
                  <span />
                </div>
              </div>
              <div className="desc">
                <p>
                  Our Unturned servers run on cutting-edge AMD Ryzen CPUs with dedicated resources to ensure smooth gameplay and minimal lag.
                </p>
                <p>
                  With 24/7 monitoring and rapid response times, we maintain 99.9% uptime so you can focus on surviving, building, and having fun.
                </p>
                <p>
                  Advanced DDoS protection and automated backups keep your progress safe and secure.
                </p>
              </div>
              <div className="buttons">
                <a
                  href="https://ready2frag.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="neoh_fn_button only_text"
                >
                  <span className="text">Learn More</span>
                </a>
              </div>
            </div>
          </div>
          {/* !About Item #2 */}
        </div>
      </section>
      {/* !About Section */}

      {/* Game Modes Section */}
      <section id="services">
        {/* Dividers */}
        <img
          src="/svg/divider.svg"
          alt=""
          className="fn__svg fn__divider top_divider"
        />
        <img
          src="/svg/divider.svg"
          alt=""
          className="fn__svg fn__divider bottom_divider"
        />
        {/* !Dividers */}
        <div className="container">
          {/* Main Title */}
          <div className="neoh_fn_title">
            <h3 className="fn_title">Server Types</h3>
            <div className="line">
              <span />
            </div>
          </div>
          {/* !Main Title */}

          {/* Server Types Grid */}
          <div className="neoh_fn_services">
            <ul>
              <li>
                <div className="item">
                  <div className="item_num">
                    <span>01</span>
                  </div>
                  <div className="item_content">
                    <h3 className="fn_title">Survival PVP</h3>
                    <p className="fn_desc">
                      High-intensity PvP servers with increased loot spawns, custom weapons, and competitive leaderboards. Perfect for players who love fast-paced combat.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="item">
                  <div className="item_num">
                    <span>02</span>
                  </div>
                  <div className="item_content">
                    <h3 className="fn_title">Semi-Vanilla</h3>
                    <p className="fn_desc">
                      Balanced gameplay with quality-of-life features like /tpa, /home, and secure vaults. Maintains the Unturned feel while adding convenience.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="item">
                  <div className="item_num">
                    <span>03</span>
                  </div>
                  <div className="item_content">
                    <h3 className="fn_title">Modded Adventure</h3>
                    <p className="fn_desc">
                      Enhanced servers featuring custom maps, vehicles, weapons, and gameplay mechanics. Experience Unturned like never before.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="item">
                  <div className="item_num">
                    <span>04</span>
                  </div>
                  <div className="item_content">
                    <h3 className="fn_title">Roleplay</h3>
                    <p className="fn_desc">
                      Immersive roleplay servers with custom jobs, economy systems, and community-driven storylines. Build your character&apos;s legacy.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="item">
                  <div className="item_num">
                    <span>05</span>
                  </div>
                  <div className="item_content">
                    <h3 className="fn_title">Creative Build</h3>
                    <p className="fn_desc">
                      Peaceful building servers with unlimited resources, custom tools, and showcase areas. Perfect for architects and creative minds.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="item">
                  <div className="item_num">
                    <span>06</span>
                  </div>
                  <div className="item_content">
                    <h3 className="fn_title">Hardcore Survival</h3>
                    <p className="fn_desc">
                      Brutal survival experience with limited resources, permadeath mechanics, and extreme weather. Only the strongest survive.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* !Server Types Grid */}
        </div>
      </section>
      {/* !Game Modes Section */}

      {/* Features Section */}
      <section id="features" className="bg-gray-900 py-20">
        <div className="container">
          <div className="neoh_fn_title">
            <h3 className="fn_title">Why Choose Syntale Unturned?</h3>
            <div className="line">
              <span />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Anti-Cheat Protection</h4>
              <p className="text-gray-400">Advanced anti-cheat systems keep our servers fair and enjoyable for everyone.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Low Latency</h4>
              <p className="text-gray-400">Optimized server infrastructure ensures minimal lag and smooth gameplay.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Active Community</h4>
              <p className="text-gray-400">Join thousands of players in our vibrant Discord community.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Custom Events</h4>
              <p className="text-gray-400">Regular events, tournaments, and seasonal content keep gameplay fresh.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Expert Support</h4>
              <p className="text-gray-400">Experienced staff team provides quick assistance and server management.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💾</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Regular Backups</h4>
              <p className="text-gray-400">Your progress is protected with automated backups every 10 minutes.</p>
            </div>
          </div>
        </div>
      </section>
      {/* !Features Section */}

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Adventure?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of players in the ultimate Unturned experience. Choose your server type and start playing today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.com/invite/THwN4Ut7m3"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="/svg/discord.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">Join Discord</span>
              </a>
              <a href="#services" className="neoh_fn_button only_text">
                <span className="text">View Servers</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* !CTA Section */}
    </Layout>
  );
};

export default UnturnedIndex;
