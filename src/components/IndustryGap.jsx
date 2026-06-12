import { useEffect, useRef } from "react";
import "./IndustryGap.css";
import industryGapImg from "../assets/industryGap.avif";

const IndustryGap = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.15 },
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="problem" className="gap-section" ref={sectionRef}>
      <div className="gap-section__inner">
        <div className="gap-section__text reveal">
          <span className="gap-section__eyebrow">The Problem</span>
          <h2 className="gap-section__title">The Industry Gap</h2>
          <p className="gap-section__body">
            While most ERP providers emphasize the implementation as the key
            phase, we see the real work beginning after that. When a business
            starts using the software day-to-day, that's when the transformation
            truly unfolds.
          </p>
          <p className="gap-section__body">
            This is the moment Highshine steps in as a committed partner,
            ensuring that our clients realize the full value of their ERP
            investment.
          </p>
          <div className="gap-section__quote">
            <p>"The real transformation begins after go-live."</p>
          </div>
        </div>

        <div className="gap-section__visual reveal reveal--delay">
          <div className="gap-section__image-wrapper">
            <div className="gap-section__image-glow" />
            <img
              src={industryGapImg}
              alt="ERP transformation team discussion"
              className="gap-section__image"
            />
            <div className="gap-section__image-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Value Beyond Implementation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryGap;
