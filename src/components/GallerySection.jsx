import { useEffect, useRef } from "react";
import "./GallerySection.css";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/team.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const GallerySection = () => {
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
      { threshold: 0.1 },
    );
    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const images = [
    { src: gallery1, alt: "About Us" },
    { src: gallery2, alt: "Empower your Digital Transformation" },
    { src: gallery3, alt: "Our Growth Journey" },
    { src: gallery4, alt: "Story of Highshine" },
    { src: gallery5, alt: "Inside the World of Highshine" },
  ];

  return (
    <section id="gallery" className="gallery" ref={sectionRef}>
      <div className="gallery__inner">
        <div className="gallery__header reveal">
          <h2 className="gallery__title">Inside the World of Highshine</h2>
          <p className="gallery__subtitle">The Faces, Moments, and Culture Behind Our Growth</p>
        </div>

        <div className="gallery__showcase reveal reveal--delay">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={3000}
            grabCursor={true}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 12 },
              480: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="gallery-swiper"
          >
            {/* Duplicate images so loop feels seamless at all breakpoints */}
            {[...images, ...images].map((img, i) => (
              <SwiperSlide key={i}>
                <div className="gallery__slide-frame">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="gallery__slide-image"
                  />
                  <div className="gallery__image-gradient" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="gallery__tags reveal reveal--delay2">
          {[
            "Team Events",
            "Celebrations",
            "Work Culture",
            "Collaborations",
            "Growth",
          ].map((tag) => (
            <span key={tag} className="gallery__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
