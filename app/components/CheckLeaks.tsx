import { useEffect } from "react";

export default function CheckLeaks() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("wow.js").then((module) => {
        const WOW = module.default;
        new WOW().init();
      });
    }
  }, []);

  return (
    <section className="check-leaks-area">
      <div className="container">
        <div className="check-leaks-title text-center">
          <h2 className="m-0 wow fadeInUp">Why check for data leaks?</h2>
          <p className="wow fadeInUp">
            Cybercrime is on the rise, and stolen credentials are sold on the dark web every day. Identity theft, financial fraud, and unauthorized account access are just a few of the risks. By quickly checking if your data is exposed, you take the first step toward safeguarding your privacy.
          </p>
        </div>
        <div className="check-leaks-grid">
          <div className="check-leaks-item text-center wow zoomIn">
            <img className="leaks-icon" src="images/icons/leaks-icon1.svg" alt="icon" />
            <h4 className="md-text white-color fw-semibold">Prevent Identity Theft</h4>
            <p className="mt-2">
              Hackers can use your personal information to impersonate you, apply for loans, or access your private accounts.
            </p>
            <img className="leaks-ellipse-image" src="/images/lecks-ellipse.png" alt="image" />
          </div>
          <div className="check-leaks-item text-center wow zoomIn">
            <img className="leaks-icon" src="/images/icons/leaks-icon2.svg" alt="icon" />
            <h4 className="md-text white-color fw-semibold">Stay Ahead of Hackers</h4>
            <p className="mt-2">
              Proactively secure your accounts before criminals exploit leaked passwords or personal details.
            </p>
            <img className="leaks-ellipse-image" src="images/lecks-ellipse.png" alt="image" />
          </div>
          <div className="check-leaks-item text-center wow zoomIn">
            <img className="leaks-icon" src="/images/icons/leaks-icon3.svg" alt="icon" />
            <h4 className="md-text white-color fw-semibold">Protect Your Reputation</h4>
            <p className="mt-2">
              Compromised social media or email accounts can damage your online presence and relationships.
            </p>
            <img className="leaks-ellipse-image" src="/images/lecks-ellipse.png" alt="image" />
          </div>
          <div className="check-leaks-item text-center wow zoomIn">
            <img className="leaks-icon" src="/images/icons/leaks-icon4.svg" alt="icon" />
            <h4 className="md-text white-color fw-semibold">Peace of mind</h4>
            <p className="mt-2">
              Knowing your data status helps you sleep better at night, confident you’ve taken measures to protect yourself.
            </p>
            <img className="leaks-ellipse-image" src="/images/lecks-ellipse.png" alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
}
