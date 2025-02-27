import { useEffect } from "react";
export default function LeakNixWorks() {
    useEffect(() => {
      if (typeof window !== "undefined") {
        import("wow.js").then((module) => {
          const WOW = module.default;
          new WOW().init();
        });
      }
    }, []);
  
    return (
      <section className="leakNix-works-area position-relative" id="howLeakNixWork">
        <img className="works-ellipse" src="/images/works-ellipse.png" alt="image" />
        <div className="container">
          <div className="works-title text-center">
            <h2 className="wow fadeInUp">How LeakNix works?</h2>
          </div>
          <div className="leakNix-works-grid">
            {[
              {
                title: "Enter Your Details.",
                description: "Provide the email, username, or phone number you want to check.",
                imgSrc: "/images/icons/leaknix-works-img1.svg",
              },
              {
                title: "We Scan Multiple Databases.",
                description: "Our system combs through breached data sources, dark web listings, and other repositories of stolen credentials.",
                imgSrc: "/images/icons/leaknix-works-img2.svg",
              },
              {
                title: "Receive a Comprehensive Report.",
                description: "Instantly see if your details appear in any known breaches, along with important information like which services were affected.",
                imgSrc: "/images/icons/leaknix-works-img3.svg",
              },
              {
                title: "Get Personalized Security Tips.",
                description: "Based on your report, we’ll guide you on securing your accounts, updating passwords, and protecting your personal information.",
                imgSrc: "/images/icons/leaknix-works-img4.svg",
              },
            ].map((item, index) => (
              <div key={index} className="leakNix-grid-item position-relative z-3 wow fadeInUp">
                <div className="leakNix-grid-bg d-flex gap-4 align-items-center">
                  <img className="leakNix-works-ellipse wow fadeInUp" src="/images/leakNix-works-ellipse.png" alt="image" />
                  <div className="leakNix-image">
                    <img className="wow fadeInUp" src={item.imgSrc} alt="icon" />
                  </div>
                  <div className="leakNix-content">
                    <h4 className="lg-text wow fadeInUp">
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