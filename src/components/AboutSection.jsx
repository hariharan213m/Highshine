import { useEffect, useRef, useState } from 'react';
import './AboutSection.css';

const useCountUp = (target, duration, isActive) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, isActive]);

  return count;
};

const Stat = ({ number, suffix, label, isActive, delay }) => {
  const count = useCountUp(number, 1500, isActive);
  return (
    <div className="about__stat" style={{ transitionDelay: `${delay}ms` }}>
      <span className="about__stat-number">
        {count}{suffix}
      </span>
      <span className="about__stat-label">{label}</span>
    </div>
  );
};

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(true);
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about__inner">
        <div className="about__header reveal">
          <span className="about__eyebrow">About Us</span>
          <h2 className="about__title">Highshine IT Solutions</h2>
          <p className="about__subtitle">
            We are a next-generation ERP transformation partner committed to delivering lifelong value — not just a one-time implementation.
          </p>
        </div>

        <div className="about__stats-row reveal reveal--delay">
          <Stat number={300} suffix="%" label="Year-over-Year Growth" isActive={isActive} delay={0} />
          <div className="about__stats-divider" />
          <Stat number={45} suffix="+" label="Team Members" isActive={isActive} delay={100} />
          <div className="about__stats-divider" />
          <Stat number={4} suffix="+" label="Years of Excellence" isActive={isActive} delay={200} />
          <div className="about__stats-divider" />
          <Stat number={100} suffix="%" label="Client Commitment" isActive={isActive} delay={300} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
