import "./Footer.css";
import logo from "../assets/logo1.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <img className="footer__logo-icon" src={logo} />
              <span className="footer__logo-text">Highshine</span>
            </div>
            <p className="footer__tagline">
              Your lifelong ERP transformation partner. We stay committed to
              your success long after go-live.
            </p>
            <div className="footer__socials">
              <a
                href="https://highshine.in/"
                className="footer__social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://highshine.in/"
                className="footer__social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Solutions</h4>
            <ul className="footer__links">
              <li>
                <a href="https://highshine.in/">ERP Implementation</a>
              </li>
              <li>
                <a href="https://highshine.in/">Digital Transformation</a>
              </li>
              <li>
                <a href="https://highshine.in/">Post Go-Live Support</a>
              </li>
              <li>
                <a href="https://highshine.in/">Training &amp; Development</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Company</h4>
            <ul className="footer__links">
              <li>
                <a href="https://highshine.in/">About Us</a>
              </li>
              <li>
                <a href="https://highshine.in/">Our Team</a>
              </li>
              <li>
                <a href="https://highshine.in/">Our Works</a>
              </li>
              <li>
                <a href="https://highshine.in/">Blogs</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <ul className="footer__links footer__links--contact">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <a href="mailto:hr@highshine.in">hr@highshine.in</a>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <a
                  href="https://highshine.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  highshine.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 Highshine IT Solutions Pvt. Ltd. All rights reserved.</p>
          <p className="footer__bottom-right">
            Built with ❤️ for the <a href="https://highshine.in/">Highshine</a>{" "}
            team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
