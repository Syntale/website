// import Image from "next/image";
const AboutComponent = () => {
  return (
    <section id="about">
      <div className="container">
        {/* About Item #1 */}
        <div className="neoh_fn_about_item">
          <div className="img_item">
            <img src="/img/about/Unturned.png" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">Welcome To Syntale</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>Syntale is a popular Unturned server network with many unique features.</p>
              <p>
                Thanks to our incredible community and diligent staff team, we are able to offer an
                amazing experience to everyone.
              </p>
              <p>
                Our servers range from pure vanilla survival servers, heavily modded semi-vanilla
                servers, to amazing full role play servers.
              </p>
            </div>
            <div className="buttons">
              <a
                href="https://discord.com/invite/syntale/"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/discord.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">Discord</span>
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
              alt="Ready2Frag Favicon"
              width={1000}
              height={1000}
            />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">Quality Guarentee</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                Syntale&apos;s dedicated servers are equipped with the latest generation 16 core AMD
                Ryzen CPUs in order to provide the best possible experience to our players.
              </p>
              <p>
                We have dedicated technicians to resolve issues with the servers as fast as
                possible. Our goal is to provide you with the best possible Unturned experience.
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
  );
};
export default AboutComponent;
