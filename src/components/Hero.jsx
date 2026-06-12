import { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Particle/orb animation on load
    const elements = hero.querySelectorAll('.hero__animate-in');
    elements.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.12}s`;
    });
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      {/* Animated background orbs */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid" />
      </div>

      <div className="hero__content">
        {/* <div className="hero__eyebrow hero__animate-in">
          <span className="hero__badge">
            <span className="hero__badge-dot" />
            About Us
          </span>
        </div> */}

        <h1 className="hero__title hero__animate-in">
          <span className="hero__title-line">Our Journey</span>
          <span className="hero__title-accent">Highshine IT Solutions</span>
        </h1>

        <p className="hero__subtitle hero__animate-in">
          Traditionally, many organizations have approached ERP implementation as just another
          project, where service providers focus mainly on completing the setup and moving on.
          But in reality, ERP is far more than a system installation. It has the potential to
          reshape how a business operates, how teams collaborate, and how decisions are made.
        </p>

        <div className="hero__actions hero__animate-in">
          <a
            href="https://highshine.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__btn-primary"
          >
            Explore Our Work
            <span className="hero__btn-arrow">→</span>
          </a>
          <button
            className="hero__btn-secondary"
            onClick={() => {
              const el = document.getElementById('story');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Our Story
          </button>
        </div>

        <div className="hero__stats hero__animate-in">
          <div className="hero__stat">
            <span className="hero__stat-number">300%</span>
            <span className="hero__stat-label">YoY Growth</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">45+</span>
            <span className="hero__stat-label">Team Members</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">2022</span>
            <span className="hero__stat-label">Founded</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="hero__scroll-indicator">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div> */}
    </section>
  );
};

export default Hero;
