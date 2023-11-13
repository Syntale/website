const GameModesComponent = () => {
  return (
    <section id="services">
      {/* Dividers */}
      <img
        src="svg/divider.svg"
        alt=""
        className="fn__svg fn__divider top_divider"
      />
      <img
        src="svg/divider.svg"
        alt=""
        className="fn__svg fn__divider bottom_divider"
      />
      {/* !Dividers */}
      <div className="container">
        {/* Main Title */}
        <div className="neoh_fn_title">
          <h3 className="fn_title">Our Game Modes</h3>
          <div className="line">
            <span />
          </div>
        </div>
        {/* !Main Title */}
        {/* Game Modes */}
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
                    A collection of 5,000 unique NEOHs built to go beyond the
                    digital space that will unlock numerous benefits for our
                    community.
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
                  <h3 className="fn_title">Semi Vanilla</h3>
                  <p className="fn_desc">
                    The NEOH collection includes dozens of rare heads, costumes,
                    and colorways of the artists palette. They are drawn with
                    great care.
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
                  <h3 className="fn_title">Modded</h3>
                  <p className="fn_desc">
                    Tasty design resources made with care for each pixel.
                    Tokens, NFTs, metaverse and game resources. Access
                    additional drops.
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
                  <h3 className="fn_title">Immersive Roleplay</h3>
                  <p className="fn_desc">
                    Be part of a community of neoh owners and create user
                    generated items. Rent, advertise, lounch stores, create
                    items.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* !Game Modes */}
      </div>
    </section>
  );
};
export default GameModesComponent
