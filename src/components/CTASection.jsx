import "./CTASection.css";

const CTASection = () => {
  return (
    <section className="cta">
      <div className="cta__container">
        <div className="cta__content">
          <span className="cta__eyebrow">
            READY TO TRANSFORM YOUR BUSINESS?
          </span>

          <h2 className="cta__title">
            Empower Your Digital
            <br />
            Transformation Today
          </h2>

          <p className="cta__description">
            Unlock the full value of your ERP investment with expert guidance,
            continuous support, and a trusted partner committed to your
            long-term success.
          </p>

          <div className="cta__actions">
            <button className="cta__btn cta__btn--primary">
              <span>Schedule a Free Consultation</span>
              <span className="cta__btn-arrow">→</span>
            </button>

            <button className="cta__btn cta__btn--secondary">Contact Us</button>
          </div>
        </div>

        <div className="cta__stats">
          <div className="cta__stat-card">
            <h3>300%</h3>
            <p>Year-over-Year Growth</p>
          </div>

          <div className="cta__stat-card">
            <h3>Global</h3>
            <p>ERP Transformation Experience</p>
          </div>

          <div className="cta__stat-card">
            <h3>100%</h3>
            <p>Client-Focused Approach</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
