import { useEffect, useRef } from "react";
import "./StorySection.css";
import coFounderImg from "../assets/coFounder.jpg"
import founderImg from "../assets/founder.jpg"

const StorySection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.12 }
    );
    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="story" className="story" ref={sectionRef}>
      <div className="story__inner">

        <div className="story__left reveal">
          <div className="story__founder-card">
            <div className="story__founder-img story__founder-img--purple">
              <div className="story__founder-blob" />
              <img src={founderImg} alt="Hari Gautham" className="story__founder-photo" />
              <div className="story__founder-header">
                <div className="story__avatar story__avatar--purple">HG</div>
                <div>
                  <p className="story__founder-name">Hari Gautham</p>
                  <p className="story__founder-role">Founder &amp; CEO</p>
                </div>
              </div>
            </div>
            <div className="story__founder-bio">
              <p>Building a community of experts committed to client success as a lifelong partnership — not a one-time deployment.</p>
            </div>
          </div>

          <div className="story__founder-card">
            <div className="story__founder-img story__founder-img--blue">
              <div className="story__founder-blob" />
              <img src={coFounderImg} alt="Hari Gautham" className="story__founder-photo" />
              <div className="story__founder-header">
                <div className="story__avatar story__avatar--blue">S</div>
                <div>
                  <p className="story__founder-name">Surendar</p>
                  <p className="story__founder-role">Co-Founder &amp; COO</p>
                </div>
              </div>
            </div>
            <div className="story__founder-bio">
              <p>Global ERP transformation expert — Asia to the Americas — who identified the post-go-live gap and built Highshine to close it.</p>
            </div>
          </div>

          <div className="story__stats">
            <div className="story__stat-box">
              <span className="story__stat-num story__stat-num--purple">300%</span>
              <span className="story__stat-label">Year-over-year growth since inception</span>
            </div>
            <div className="story__stat-box">
              <span className="story__stat-num story__stat-num--gold">&#8734;</span>
              <span className="story__stat-label">Post go-live commitment to every client</span>
            </div>
          </div>
        </div>

        <div className="story__right reveal reveal--delay">
          <div className="story__eyebrow">
            <span className="story__eyebrow-line" />
            <span className="story__eyebrow-text">Our foundation</span>
          </div>

          <h2 className="story__title">
            Story of <em className="story__title-em">Highshine</em>
          </h2>
          <p className="story__subtitle">
            How two ERP veterans redefined what client success really means.
          </p>

          <div className="story__chips">
            <span className="story__chip">
              <span className="story__chip-dot story__chip-dot--purple" />
              ERP Transformation
            </span>
            <span className="story__chip">
              <span className="story__chip-dot story__chip-dot--gold" />
              Global Reach
            </span>
            <span className="story__chip">
              <span className="story__chip-dot story__chip-dot--green" />
              300% Growth
            </span>
          </div>

          <p className="story__body">
            Our founder, <strong>Hari Gautham</strong>, is creating a community
            of experts dedicated to viewing each implementation as a lifelong
            commitment to our clients' success — not a project to be closed and
            forgotten.
          </p>
          <p className="story__body">
            Our co-founder, <strong>Surendar</strong>, identified this gap
            repeatedly during his extensive global experience in ERP
            transformations. From Asia to the Americas, he recognised the need
            for a provider who remains committed long after go-live, ensuring
            clients unlock the full potential of ERP.
          </p>
          <p className="story__body">
            This approach has driven Highshine to achieve an extraordinary{" "}
            <strong>300% year-over-year growth</strong> since inception — not
            because of numbers, but because of an unwavering dedication to
            clients and team alike.
          </p>

          <div className="story__quote">
            <p className="story__quote-text">
              We believe ERP success is a lifelong partnership.
            </p>
            <p className="story__quote-author">
              — Hari Gautham &amp; Surendar, Co-Founders of Highshine
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StorySection;