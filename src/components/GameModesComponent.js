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
                    Fast-paced PvP with increased loot. Join for an intense PvP environment.
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
                    Balanced loot with TPA, home, and vaults. A mix of vanilla and convenience features.
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
                    Semi Vanilla with added mods for extra content. Offers a richer Unturned experience.
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
                  <h3 className="fn_title">Semi-RP</h3>
                  <p className="fn_desc">
                    Light roleplay with community interactions. Build, trade, and survive in a semi-immersive setting.
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
