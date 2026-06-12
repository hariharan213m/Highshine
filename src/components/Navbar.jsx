import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { HiX } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoChevronDown } from "react-icons/io5";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [blogsOpen, setBlogsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="/" className="navbar__logo">
          <img className="navbar__logo-icon" src={logo} />
          <span className="navbar__logo-text">Highshine</span>
        </a>

        <div
          className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}
        >
          <button
            onClick={() => scrollToSection("hero")}
            className="navbar__link"
          >
            Home
          </button>

          <div
            className="navbar__dropdown"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button className="navbar__link navbar__link--has-dropdown">
              Solutions
              <IoChevronDown size={14} />
            </button>
            {solutionsOpen && (
              <div className="navbar__dropdown-menu">
                <a
                  href="https://highshine.in/"
                  className="navbar__dropdown-item"
                >
                  ERP Solutions
                </a>
                <a
                  href="https://highshine.in/"
                  className="navbar__dropdown-item"
                >
                  Digital Transformation
                </a>
                <a
                  href="https://highshine.in/"
                  className="navbar__dropdown-item"
                >
                  Implementation Services
                </a>
              </div>
            )}
          </div>

          <div
            className="navbar__dropdown"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button className="navbar__link navbar__link--has-dropdown">
              Industries
              <IoChevronDown size={14} />
            </button>
            {industriesOpen && (
              <div className="navbar__dropdown-menu">
                <a
                  href="https://highshine.in/"
                  className="navbar__dropdown-item"
                >
                  Manufacturing
                </a>
                <a
                  href="https://highshine.in/"
                  className="navbar__dropdown-item"
                >
                  Retail
                </a>
                <a
                  href="https://highshine.in/"
                  className="navbar__dropdown-item"
                >
                  Healthcare
                </a>
              </div>
            )}
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="navbar__link navbar__link--active"
          >
            About Us
          </button>

          <div
            className="navbar__dropdown"
            onMouseEnter={() => setBlogsOpen(true)}
            onMouseLeave={() => setBlogsOpen(false)}
          >
            <button className="navbar__link navbar__link--has-dropdown">
              Blogs
              <IoChevronDown size={14} />
            </button>
            {blogsOpen && (
              <div className="navbar__dropdown-menu">
                <a
                  href="https://highshine.in/"
                  className="navbar__dropdown-item"
                >
                  ERP Insights
                </a>
                <a
                  href="https://highshine.in/"
                  className="navbar__dropdown-item"
                >
                  Case Studies
                </a>
              </div>
            )}
          </div>

          <button
            onClick={() => scrollToSection("gallery")}
            className="navbar__link"
          >
            Our Works
          </button>
          <button
            onClick={() => scrollToSection("cta")}
            className="navbar__link"
          >
            Contact
          </button>
        </div>

        <a
          href="https://highshine.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__cta"
        >
          Contact Us
        </a>

        <button
          className={`navbar__burger ${menuOpen ? "navbar__burger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <RxHamburgerMenu className="icon menu-icon" size={28} />
          <HiX className="icon close-icon" size={28} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
