import Head from "next/head";
import {Fragment, useEffect} from "react";
import VideoPopup from "../components/popup/VideoPopup";
import {dataBgImg, imgToSVG, neoh_fn_moving_blog, stickyNav,} from "../utilities";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({children, pageName, isHome}) => {
    useEffect(() => {
        // homeClasses();
        dataBgImg();
        imgToSVG();
        neoh_fn_moving_blog();
        window.addEventListener("scroll", stickyNav);

        const borders = document.querySelectorAll(".neoh_fn_header");
        const logos = document.querySelectorAll(".logo");
        [...borders, ...logos].forEach((item) => {
            if (isHome)
                item.classList.add("home");
            else
                item.classList.remove("home");
        });

        return () => {
            window.removeEventListener("scroll", stickyNav);
        };

    }, [isHome]);
    return (
        <Fragment>
            <Head>
                <title>{`Syntale | ${pageName}`}</title>
            </Head>
            <VideoPopup/>
            <div className="neoh_fn_main" data-footer-sticky="">
                <Header/>
                <div className="neoh_fn_content">{children}</div>
                <Footer/>
            </div>

            <div className="neoh_fn_moving_box"></div>
        </Fragment>
    );
};
export default Layout;
