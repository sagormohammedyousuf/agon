import React from "react";
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">
      <footer class="padding-4x">
        <div class="flex">
          <section class="flex-content padding_1x">
            <h3>Features</h3>
            <a href="/">Jobs</a>
            <a href="/">Brand Assets</a>
            <a href="/">Investor Relations</a>
            <a href="/">Terms of Service</a>
          </section>
          <section class="flex-content padding-1x">
            <h3>Resources</h3>
            <a href="/">Guides</a>
            <a href="/">Research</a>
            <a href="/">Experts</a>
            <a href="/">Agencies</a>
          </section>
          <section class="flex-content padding-1x news-letter">
            <h3>Newsletter</h3>
            <p>You can trust us. we only send promo offers</p>
            <fieldset >
              <input
              className="input"
                type="email"
                name="newsletter"
                placeholder="Your Email Address"
              />
              <button class="btn btn-2">Subscribe</button>
            </fieldset>
          </section>
        </div>
        <div class="flex">
          <section class="flex-content padding-1x">
            <p className="copyright">Copyright ©2023 All rights reserved || Agon</p>
          </section>
          <section class="flex-content padding-1x social-list">
            <a href="/">
              <FaFacebookF />
            </a>
            <a href="/">
              <FaTwitter />
            </a>
            <a href="/">
              <FaGithub />
            </a>
            <a href="/">
              <FaLinkedin />{" "}
            </a>
          </section>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Footer;
