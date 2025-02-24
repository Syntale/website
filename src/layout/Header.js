import Link from "next/link";
import { Fragment, useState } from "react";
import CopyrightComponent from "../components/CopyrightComponent";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  // const [homeToggle, setHomeToggle] = useState(false);

  return (
    <Fragment>
      {/* Right Navigation */}
      <div className={`nav_overlay ${toggle ? "go" : ""}`} onClick={() => setToggle(false)} />
      <div className={`neoh_fn_nav ${toggle ? "go" : ""}`}>
        <div className="trigger is-active">
          <div className="trigger_in" onClick={() => setToggle(false)}>
            {/* <span className="text">Close</span> */}
            <span className="hamb">
              <span className="hamb_a" />
              <span className="hamb_b" />
              <span className="hamb_c" />
            </span>
          </div>
        </div>
        <div className="nav_content">
          <div className="nav_menu">
            <ul>
              {/* <li className="menu-item menu-item-has-children">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setHomeToggle(!homeToggle);
                  }}
                >
                  Home
                </a>
                <ul
                  className="sub-menu"
                  style={{ display: homeToggle ? "block" : "none" }}
                >
                  <li>
                    <Link href="/">Home Static</Link>
                  </li>
                </ul>
              </li> */}
              <li className="menu-item">
                <Link href="/">Home</Link>
              </li>
              <li className="menu-item">
                <Link href="/#about">About</Link>
              </li>
              <li className="menu-item">
                <Link href="https://discord.com/invite/syntale">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="nav_buttons">
            <a href="https://discord.com/invite/syntale" className="neoh_fn_button" target="_blank" rel="noreferrer">
              <span className="icon">
                <img src="svg/discord.svg" alt="" className="fn__svg" />
              </span>
              <span className="text">Discord</span>
            </a>
          </div>
        </div>
        {/* Nav Footer */}
        <div className={`nav_footer ${toggle ? "ready" : ""}`}>
          <div className="nf_left">
            <CopyrightComponent />
          </div>
          <div className="nf_right"></div>
        </div>
        {/* !Nav Footer */}
      </div>
      {/* !Right Navigation */}
      {/* Header */}
      <header className="neoh_fn_header">
        <div className="container">
          <div className="header_in">
            <div className="logo">
              <Link href="/">
                <img src="img/logo.png" alt="" />
              </Link>
            </div>
            <div className="trigger">
              <div className="trigger_in" onClick={() => setToggle(!toggle)}>
                <span className="text">Menu</span>
                <span className="hamb">
                  <span className="hamb_a" />
                  <span className="hamb_b" />
                  <span className="hamb_c" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* !Header */}
    </Fragment>
  );
};
export default Header;
