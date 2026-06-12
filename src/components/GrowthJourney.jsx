import { useEffect, useRef, useState } from 'react';
import './GrowthJourney.css';

const milestones = [
  { year: '2022', title: 'Company Started', employees: '5 employees', isCurrent: false },
  { year: '2023', title: 'Team Expansion', employees: '15 employees', isCurrent: false },
  { year: '2024', title: 'Growth Phase', employees: '23 employees', isCurrent: false },
  { year: '2025', title: 'Scaling Operations', employees: '34 employees', isCurrent: false },
  { year: '2026', title: 'Future Vision', employees: '45+ employees', isCurrent: true },
];

const GrowthJourney = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(4);
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            // Animate the line
            setTimeout(() => setLineWidth(100), 400);
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
    <section className="journey" ref={sectionRef}>
      <div className="journey__bg">
        <div className="journey__orb" />
      </div>

      <div className="journey__inner">
        <div className="journey__header reveal">
          <span className="journey__eyebrow">Milestones</span>
          <h2 className="journey__title">Our Growth Journey</h2>
        </div>

        <div className="journey__timeline reveal reveal--delay">
          <div className="journey__line-track">
            <div
              className="journey__line-fill"
              style={{ width: `${lineWidth}%` }}
            />
          </div>

          <div className="journey__milestones">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`journey__milestone ${activeIndex === i ? 'journey__milestone--active' : ''} ${m.isCurrent ? 'journey__milestone--current' : ''}`}
                onClick={() => setActiveIndex(i)}
              >
                <div className="journey__dot-wrapper">
                  <div className="journey__dot">
                    {m.isCurrent && <div className="journey__dot-ring" />}
                  </div>
                </div>
                <div className="journey__milestone-info">
                  <span className="journey__year">{m.year}</span>
                  <span className="journey__milestone-title">{m.title}</span>
                  <span className="journey__employees">{m.employees}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active milestone detail card */}
        {/* <div className="journey__detail reveal reveal--delay2">
          <div className="journey__detail-card">
            <div className="journey__detail-year">{milestones[activeIndex].year}</div>
            <div className="journey__detail-info">
              <h3>{milestones[activeIndex].title}</h3>
              <p>{milestones[activeIndex].employees}</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default GrowthJourney;
