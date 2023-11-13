import Head from "next/head";
import { Fragment, useEffect } from "react";
import VideoPopup from "../components/popup/VideoPopup";
import {
  dataBgImg,
  homeClasses,
  imgToSVG,
  neoh_fn_moving_blog,
  stickyNav,
} from "../utilities";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, pageName }) => {
  useEffect(() => {
    homeClasses();
    dataBgImg();
    imgToSVG();
    neoh_fn_moving_blog();
    window.addEventListener("scroll", stickyNav);
  }, []);
  return (
    <Fragment>
      <Head>
        <title>{`Syntale | ${pageName}`}</title>
      </Head>
      <VideoPopup />
      <div className="neoh_fn_main" data-footer-sticky="">
        <Header />
        <div className="neoh_fn_content">{children}</div>
        <Footer />
      </div>

      <div className="neoh_fn_moving_box"></div>
    </Fragment>
  );
};
export default Layout;
