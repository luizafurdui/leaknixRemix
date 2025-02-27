import { Link } from "@remix-run/react";

export default function MobileMenu() {
  return (
    <div className="offcanvas offcanvas-start" tabIndex={-1} id="menuOffcanvas" aria-labelledby="menuOffcanvasLabel">
      <div className="offcanvas-header">
        <div className="header-logo">
          <Link to="/" className="logo-design">LeakNix</Link>
        </div>
        <button 
          type="button" 
          style={{ right: "20px", fontSize: "20px" }} 
          className="position-absolute text-white"
          data-bs-dismiss="offcanvas" 
          aria-label="Close"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div className="offcanvas-body">
        <div className="header-list-div">
          <ul>
            <li>
              <a className="d-block w-100 text-center" href="#howLeakNixWork">How it works</a>
            </li>
            <li>
              <a className="d-block w-100 text-center" href="#pricingArea">Pricing</a>
            </li>
            <li>
              <a className="d-block w-100 text-center" href="#testimonialArea">Testimonials</a>
            </li>
          </ul>
          <div className="check-btn-div text-center mt-3">
            <a href="#" className="check-btn">Check now</a>
          </div>
        </div>
      </div>
    </div>
  );
}