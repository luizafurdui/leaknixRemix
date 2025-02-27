const testimonialsData = [
  {
    name: "Razvan",
    image: "/images/razvan.png",
    text: "LeakNix instantly showed me which sites exposed my password. I changed them all the same day!",
  },
  {
    name: "Chris",
    image: "/images/cristian.png",
    text: "I had no idea my phone number was circulating on hacker forums—thanks to LeakNix, I feel safer.",
  },
  {
    name: "Paul R.",
    image: "/images/paul.png",
    text: "They do an amazing job of explaining next steps to stay secure. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-area py-80" id="testimonialArea">
      <img
        className="testimonial-right-ellipse"
        src="/images/testimonial-right-ellipse.png"
        alt="image"
      />
      <img
        className="testimonial-left-ellipse"
        src="/images/testimonial-left-ellipse.png"
        alt="image"
      />
      <div className="container">
        <div className="testimonials-title text-center">
          <h2 className="wow fadeInUp">Testimonials</h2>
        </div>
        <div className="check-leaks-grid testimonials-grid pt-0">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="check-leaks-item testimonials-grid-item text-center wow fadeInUp"
            >
              <img
                className="w-8 h-8 rounded-full leaks-icon wow fadeInUp"
                style={{ maxWidth: "50px", maxHeight: "50px", objectFit: "cover" }}
                src={testimonial.image}
                alt={testimonial.name}
              />
              <h4 className="md-text sky-blue-color fw-semibold wow fadeInUp">
                {testimonial.name}
              </h4>
              <p className="mt-2 wow fadeInUp">{testimonial.text}</p>
              <img
                className="leaks-ellipse-image wow fadeInUp"
                src="/images/testimonial-ellipse.png"
                alt="image"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Secțiunea adițională */}
      <div className="personal-info-area position-relative" style={{ zIndex: 25 }}>
        <div className="container">
          <div className="personal-info-box text-center wow fadeInUp">
            <h2 className="wow fadeInUp">Ready to protect your personal information?</h2>
            <p className="wow fadeInUp">Start your free scan with LeakNix today!</p>
            <a href="#" className="wow fadeInUp">Scan my data now</a>
          </div>
        </div>
      </div>
    </section>
  );
}