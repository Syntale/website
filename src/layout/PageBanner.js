import Link from "next/link";
const PageBanner = ({ pageName }) => {
  return (
    <div className="neoh_fn_pagetitle">
      <div className="bg_overlay">
        <div className="bg_color" />
        <div className="bg_image" data-bg-img="img/hero/bg.jpg" />
      </div>
      <div className="pt_content">
        <div className="container">
          <h3
            className="fn_title"
          >
            {pageName}
          </h3>
          <p className="fn_desc">
            <Link href="/">
              Home
            </Link>
            <span className="separator">/</span>
            <span className="current">{pageName}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default PageBanner;
