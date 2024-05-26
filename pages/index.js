import { getRandomInt } from "../src/utilities";

import AboutComponent from "../src/components/AboutComponent";
import GameModesComponent from "../src/components/GameModesComponent";
import Layout from "../src/layout/Layout";
import {useEffect, useState} from "react";

// export async function getServerSideProps() {
//   const randomBg = getRandomInt(6);
//
//   // Pass data to the page via props
//   return { props: { randomBg } };
// }

const Index = () => {
  let [randomBg, setRandomBg] = useState(getRandomInt(6));

  return (
    <Layout pageName={"Home"} isHome={true}>
      {/* Hero Header */}
      <div className="neoh_fn_hero">
        {/* Overlay (of hero header) */}
        <div className="bg_overlay">
          {/* Overlay Color */}
          <div className="bg_color" />
          {/* !Overlay Color */}
          {/* Overlay Image */}
          <div className="bg_image" data-bg-img={`img/hero/bg-${randomBg}.webp`} />
          {/* !Overlay Image */}
        </div>
        {/* Overlay (of hero header) */}
        <div className="hero_content">
          <div className="container">
            <div className="content">
              <div className="align-icon">
                <img className="fn_logo" src="img/logo-full.png" width="65%" />
              </div>
            </div>
          </div>
          <a href="#about" className="neoh_fn_down magic-hover magic-hover__square">
            <span className="text">Scroll Down</span>
            <span className="icon">
              <img src="svg/right-arr.svg" alt="" className="fn__svg" />
            </span>
          </a>
        </div>
      </div>
      {/* !Hero Header */}
      {/* About Section */}
      <AboutComponent />
      {/* !About Section */}
      {/* Game Modes Section */}
      <GameModesComponent />
      {/* !Game Modes Section */}
    </Layout>
  );
};
export default Index;
