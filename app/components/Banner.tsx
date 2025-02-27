import { useEffect, useRef } from "react";

export default function Banner() {
    const bannerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
      // Check if window is defined (for SSR compatibility)
      if (typeof window !== "undefined") {
        // Dynamic import of WOW.js
        import("wow.js").then((module) => {
          const WOW = module.default;
          // Initialize WOW.js
          new WOW().init();
        }).catch(error => {
          console.error("Failed to load WOW.js:", error);
        });
      }
    }, []);
    
  

  return (
    <div className="banner-area position-relative" ref={bannerRef}>
      <div className="container">
        <div className="banner-content text-center">
          <h1 className="mb-3 wow fadeInUp">Protect your digital <br /> identity with LeakNix</h1>
          <p className="p-lg wow fadeInUp">
            Easily check if your email, username, or phone number has <br className="d-none d-sm-block" />
            been compromised in any known data breach
          </p>

          <form id="leakForm">
            <input className="p-lg me-3 wow fadeInUp" type="email" id="emailInput" name="email" placeholder="Enter email address" required />
            <button type="submit" className="check-btn check-btn2 wow fadeInUp">Check now</button>
          </form>

          <div id="results" className="mt-4"></div>

          <div className="banner-btn-div">
            <ul className="text-center">
              <li><a href="#" className="p-sm text-white wow zoomIn"><img src="/images/icons/scan_line.svg" alt="icon" /> Quick and easy scan</a></li>
              <li><a href="#" className="p-sm text-white wow zoomIn"><img src="/images/icons/cube_3d_line.svg" alt="icon" /> Comprehensive breach sources</a></li>
              <li><a href="#" className="p-sm text-white wow zoomIn"><img src="/images/icons/safe_shield_line.svg" alt="icon" /> Confidential & secure</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
