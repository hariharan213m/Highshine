import { useEffect, useRef } from 'react';
import './LeadershipSection.css';
import teamPhoto from '../assets/team.jpg';

const perks = [
  { icon: 'ti-building-community', label: 'Collaborative workspaces' },
  { icon: 'ti-certificate',        label: 'Continuous training'      },
  { icon: 'ti-heart',              label: 'Employee welfare'          },
  { icon: 'ti-bulb',               label: 'Knowledge sharing'         },
];

const LeadershipSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="leadership" className="leadership" ref={sectionRef}>
      <div className="leadership__inner">

        {/* ── LEFT: Image column ── */}
        <div className="leadership__image-col reveal">
          <div className="leadership__image-frame">
            <img
              src={teamPhoto}
              alt="Highshine team"
              className="leadership__team-photo"
            />
          </div>

          <div className="leadership__badge">
            <i className="ti ti-star" aria-hidden="true" />
            Employee-first culture
          </div>

          <div className="leadership__stats">
            <div className="leadership__stat">
              <span className="leadership__stat-num">100%</span>
              <span className="leadership__stat-label">Employee first</span>
            </div>
            <div className="leadership__stat">
              <span className="leadership__stat-num">4+</span>
              <span className="leadership__stat-label">Training programs</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Content column ── */}
        <div className="leadership__content reveal reveal--delay">
          <span className="leadership__section-label">Leadership &amp; culture</span>

          <h2 className="leadership__title">
            More than a team —<br />
            a <span>family</span>
          </h2>
          <div className="leadership__rule" />

          <p className="leadership__body">
            Highshine is a labor of love for the founders. We envision building
            it more like a family than an organization — the welfare of every
            employee is of utmost importance to leadership.
          </p>

          <div className="leadership__divider" />

          <p className="leadership__section-label">Cultivating growth</p>
          <p className="leadership__body">
            A thriving team creates exceptional results. We've built an
            employee-first culture where every voice matters and ideas shape
            our policies.
          </p>
          <p className="leadership__body">
            From collaborative workspaces to continuous training, we invest in
            our people — because their growth is your success.
          </p>

          <div className="leadership__perks">
            {perks.map(({ icon, label }) => (
              <span className="leadership__perk" key={label}>
                <i className={`ti ${icon}`} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          <div className="leadership__actions">
            <button className="leadership__btn leadership__btn--solid">
              Meet the team
            </button>
            <button className="leadership__btn leadership__btn--ghost">
              <i className="ti ti-arrow-right" aria-hidden="true" />
              Our values
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LeadershipSection;