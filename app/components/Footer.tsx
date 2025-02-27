import React from "react";
import { Link } from "@remix-run/react";

const Footer: React.FC = () => {
  return (
    <footer className="footer-area position-relative py-80" style={{ zIndex: 25 }}>
      <img className="faq-ellipse-right" src="/images/faq-ellipse-right.png" alt="ellipse" />
      <img className="faq-ellipse-left" src="/images/faq-ellipse-left.png" alt="ellipse" />
      <div className="container">
        <div className="d-md-flex justify-content-between align-items-center text-center text-md-start">
          <div className="header-left-side mb-4 mb-md-0">
            <div className="footer-logo header-logo">
              <Link to="/" className="logo-design wow fadeInUp">LeakNix</Link>
            </div>
          </div>
          <ul className="d-md-flex footer-list header-list align-items-center">
            <li>
              <Link to="/contact" className="mb-3 mb-md-0 wow fadeInUp">Contact us</Link>
            </li>
            <li>
              <Link to="/privacy" className="mb-3 mb-md-0 wow fadeInUp">Privacy policy</Link>
            </li>
            <li>
              <Link to="/terms" className="wow fadeInUp">Terms of service</Link>
            </li>
          </ul>
          <div className="check-btn-div mt-4 mt-md-0">
            <Link to="/#check" className="check-btn wow fadeInUp">Check now</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;