import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <header className="header-area d-none d-md-block">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="header-left-side d-flex align-items-center">
            <div className="header-logo">
              <Link to="/" className="logo-design">LeakNix</Link>
            </div>
            <ul className="d-flex header-list align-items-center">
              <li><a href="#howLeakNixWork">How it works</a></li>
              <li><a href="#pricingArea">Pricing</a></li>
              <li><a href="#testimonialArea">Testimonials</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
