import { useEffect } from "react";
export default function LeakNixReport() {
    useEffect(() => {
      if (typeof window !== "undefined") {
        import("wow.js").then((module) => {
          const WOW = module.default;
          new WOW().init();
        });
      }
    }, []);
  
    return (
      <section className="leakNix-report-area leakNix-works-area position-relative">
        <img className="report-ellipse" src="/images/report-ellipse.png" alt="image" />
        <img className="compare-ellipse-image" src="/images/compare-ellipse.png" alt="image" />
        <div className="container">
          <div className="report-title works-title text-center">
            <h2 className="wow fadeInUp">What you get with your LeakNix report</h2>
          </div>
          <div className="leakNix-report-grid leakNix-works-grid">
            {[
              {
                title: "Breach Summary.",
                description: "A clear list of all incidents where your data may have been compromised.",
                imgSrc: "/images/icons/report-icon1.svg",
                fadeDirection: "fadeInLeft",
              },
              {
                title: "Exposure Details.",
                description: "Insights into the type of data leaked (passwords, phone numbers, addresses, etc.).",
                imgSrc: "/images/icons/report-icon2.svg",
                fadeDirection: "fadeInRight",
              },
            ].map((item, index) => (
              <div key={index} className={`leakNix-report-item leakNix-grid-item position-relative z-3 wow ${item.fadeDirection}`}>
                <div className="leakNix-report-bg leakNix-grid-bg align-items-center">
                  <img className="leakNix-works-ellipse" src="/images/leakNix-report-ellipse.png" alt="image" />
                  <div className="leakNix-image mb-3">
                    <img src={item.imgSrc} alt="icon" />
                  </div>
                  <div className="leakNix-content">
                    <h4 className="lg-text">
                      <strong className="fw-semibold sky-blue-color">{item.title}</strong> {item.description}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="leakNix-report-grid leakNix-report-grid2 leakNix-works-grid">
            {[
              {
                title: "Continuous monitoring.",
                description: "Opt-in for alerts whenever we detect new exposures linked to your details.",
                imgSrc: "/images/icons/report-icon3.svg",
                fadeDirection: "fadeInLeft",
              },
              {
                title: "Security recommendations.",
                description: "Actionable steps to strengthen your accounts, create safer passwords, and enable two-factor authentication.",
                imgSrc: "/images/icons/report-icon4.svg",
                fadeDirection: "fadeInRight",
              },
            ].map((item, index) => (
              <div key={index} className={`leakNix-report-item leakNix-grid-item position-relative z-3 wow ${item.fadeDirection}`}>
                <div className="leakNix-report-bg leakNix-grid-bg align-items-center">
                  <img className="leakNix-works-ellipse" src="/images/leakNix-report-ellipse.png" alt="image" />
                  <div className="leakNix-image mb-3">
                    <img src={item.imgSrc} alt="icon" />
                  </div>
                  <div className="leakNix-content">
                    <h4 className="lg-text">
                      <strong className="fw-semibold sky-blue-color">{item.title}</strong> {item.description}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }