import React from "react";

const PricingSection = () => {
  return (
    <section className="pricing-area py-30" id="pricingArea">
      <div className="container">
        <div className="pricing-title text-center">
          <h2 className="wow fadeInUp">Pricing</h2>
        </div>
        <div className="pricing-card-grid">
          
          {/* FREE PLAN (NO PAYMENT NEEDED) */}
          <div className="pricing-card">
            <div className="pricing-card-header">
              <span className="hidden-span">Best Value</span>
              <div className="pricing-header-bg position-relative z-3">
                <img className="hover__bg" src="/images/pricing-card-texture1.png" alt="image" />
                <img className="wow fadeInUp" src="/images/icons/pricing-icon1.svg" alt="icon" />
                <h4 className="md-text fw-bold wow fadeInUp">FREE LIGHT REPORT</h4>
                <p className="p-sm wow fadeInUp">Ideal for a quick snapshot of your <br /> email exposure.</p>
                <h3 className="wow fadeInUp">$0 <small className="p-sm"></small></h3>
                <img className="card-header-ellipse" src="/images/card-header-ellipse.png" alt="image" />
              </div>
            </div>
            <div className="pricing-card-body pt-1 position-relative">
              <ul>
                <li className="d-flex gap-2 align-items-start wow fadeInUp">
                  <div>
                    <img src="/images/icons/right.svg" alt="icon" />
                  </div>
                  <div>
                    <h4 className="md-text mb-2">Single Email Check</h4>
                    <p className="p-sm">Check one email address to see if it's part of known breaches.</p>
                  </div>
                </li>
                <li className="d-flex gap-2 align-items-start wow fadeInUp">
                  <div>
                    <img src="/images/icons/right.svg" alt="icon" />
                  </div>
                  <div>
                    <h4 className="md-text mb-2">Basic Email Monitoring</h4>
                    <p className="p-sm">Quickly scan for exposed passwords linked to this email.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="pricing-card-footer">
              <ul>
                <li className="p-sm wow fadeInUp">Perfect if you just want to dip your toes into cybersecurity!</li>
              </ul>
              <a href="#" className="card-get-a d-block w-100 text-center wow fadeInUp">Get my free report</a>
            </div>
          </div>

          {/* IN-DEPTH ONE-TIME REPORT (PAID) */}
          <div className="pricing-card">
            <div className="pricing-card-header">
              <span className="hidden-span">Best Value</span>
              <div className="pricing-header-bg position-relative z-3">
                <img className="hover__bg" src="/images/pricing-card-texture1.png" alt="image" />
                <img className="wow fadeInUp" src="/images/icons/pricing-icon2.svg" alt="icon" />
                <h4 className="md-text fw-bold wow fadeInUp">IN-DEPTH ONE-TIME REPORT</h4>
                <p className="p-sm wow fadeInUp">
                  Go deeper with comprehensive coverage and <br className="d-none d-xl-block" /> essential training.
                </p>
                <h3 className="wow fadeInUp">$19.99 <small className="p-sm">(one-time)</small></h3>
                <img className="card-header-ellipse" src="/images/card-header-ellipse.png" alt="image" />
              </div>
            </div>
            <div className="pricing-card-body pt-1 position-relative">
              <ul>
                <li className="d-flex gap-2 align-items-start wow fadeInUp">
                  <div>
                    <img src="/images/icons/right.svg" alt="icon" />
                  </div>
                  <div>
                    <h4 className="md-text mb-2">Multi-Point Monitoring</h4>
                    <p className="p-sm">Check your email, phone number, and username for any data leaks.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="pricing-card-footer">
              <ul>
                <li className="p-sm wow fadeInUp">Perfect for users who want a full security overhaul without a monthly commitment.</li>
              </ul>
              <button 
                className="card-get-a d-block w-100 text-center stripe-checkout wow fadeInUp" 
                data-planid="in_depth"
              >
                Get my in-depth report
              </button>
            </div>
          </div>

          {/* CONTINUOUS PROTECTION (PAID) */}
          <div className="pricing-card">
            <div className="pricing-card-header">
              <span className="hidden-span">Best Value</span>
              <div className="pricing-header-bg position-relative z-3">
                <img className="hover__bg" src="/images/pricing-card-texture1.png" alt="image" />
                <img className="wow fadeInUp" src="/images/icons/pricing-icon3.svg" alt="icon" />
                <h4 className="md-text fw-bold wow fadeInUp">CONTINUOUS PROTECTION (12 Months)</h4>
                <p className="p-sm wow fadeInUp">Our best value plan for total peace <br /> of mind.</p>
                <h3 className="wow fadeInUp">$89 <small className="p-sm">/year (Only $7.41 per month)</small></h3>
                <img className="card-header-ellipse" src="/images/card-header-ellipse.png" alt="image" />
              </div>
            </div>
            <div className="pricing-card-body pt-1 position-relative">
              <ul>
                <li className="d-flex gap-2 align-items-start wow fadeInUp">
                  <div>
                    <img src="/images/icons/right.svg" alt="icon" />
                  </div>
                  <div>
                    <h4 className="md-text mb-2">24/7 Monitoring & Alerts</h4>
                    <p className="p-sm">We'll track all your provided data points around the clock. If a new breach occurs, you'll be notified immediately by email.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="pricing-card-footer">
              <ul>
                <li className="p-sm wow fadeInUp">Perfect for individuals serious about staying ahead of hackers year-round.</li>
              </ul>
              <button 
                className="card-get-a d-block w-100 text-center stripe-checkout wow fadeInUp" 
                data-planid="continuous"
              >
                Secure my data for 12 months
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;