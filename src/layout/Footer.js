import CopyrightComponent from "../components/CopyrightComponent";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="neoh_fn_footer">
        {/* Footer Bottom */}
        <div className="footer_bottom">
          <div className="container">
            <div className="fb_in">
              <div className="fb_left">
                <CopyrightComponent />
              </div>
              <div className="fb_right">
                <ul>
                  <li>
                    <a href="https://discord.com/invite/THwN4Ut7m3" target="_blank" rel="noreferrer">
                      Discord
                    </a>
                  </li>
                  <li>
                    <a href="#">Cookies</a>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* !Footer Bottom */}
      </div>
    </footer>
  );
};
export default Footer;
