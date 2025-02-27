import React, { useState } from "react";

const faqData = [
  {
    question: "Is LeakNix safe to use?",
    answer:
      "Yes. We only need your email, username, or phone number to check if it appears in known breaches. We never store your passwords or share your personal information with third parties.",
  },
  {
    question: "How often is the data updated?",
    answer:
      "Our data is continuously updated in real-time. We aggregate breach reports from multiple trusted cybersecurity sources, including dark web monitoring services, security researchers, and leaked databases.",
  },
  {
    question: "What should I do if I find out my data was leaked?",
    answer: (
      <ul>
        <li>
          <strong>Change your passwords</strong> for any affected accounts and use a strong, unique password.
        </li>
        <li>
          <strong>Enable two-factor authentication (2FA)</strong> to add an extra layer of security.
        </li>
        <li>
          <strong>Monitor your accounts</strong> for any suspicious activity.
        </li>
        <li>
          <strong>Use a password manager</strong> to generate and store secure passwords.
        </li>
        <li>
          <strong>Consider identity protection services</strong> for additional security.
        </li>
      </ul>
    ),
  },
  {
    question: "Do you cover phone number leaks?",
    answer:
      "Yes, LeakNix checks for phone numbers that have been exposed in known data breaches. If your phone number has been leaked, we recommend updating security settings, enabling two-factor authentication, and being cautious of phishing or spam calls.",
  },
  {
    question: "Can I monitor more than one email or phone number?",
    answer:
      "Yes, with our premium plans, you can monitor multiple email addresses and phone numbers for breaches. This is ideal for individuals who manage several accounts or businesses that want to ensure the security of their employees' credentials.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-area py-80 position-relative" style={{ zIndex: 30 }}>
      <div className="container">
        <div className="faq-title text-center">
          <h2 className="wow fadeInUp">Frequently Asked Questions</h2>
        </div>

        <div className="accordion_container">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`accordion-bg wow fadeInUp ${openIndex === index ? "active" : ""}`}
            >
              <div className="accordion_head" onClick={() => toggleAccordion(index)}>
                <h3>{item.question}</h3>
                <span className="plusminus">
                  <img
                    src={openIndex === index ? "/images/icons/minus.svg" : "/images/icons/plus.svg"}
                    alt="icon"
                  />
                </span>
              </div>
              {openIndex === index && (
                <div className="accordion_body" style={{ display: "block" }}>
                  <p className="fw-medium">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;