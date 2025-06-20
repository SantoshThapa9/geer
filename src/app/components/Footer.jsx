import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import styles from "./footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <section className={styles.subscribe}>
      <h2>Subscribe To Newsletter</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label
          htmlFor="email"
          className={styles["email-label"]}
          aria-label="Email"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-mail"
            viewBox="0 0 24 24"
          >
            <path d="M4 4h16c1.1 0 1.99.9 1.99 2L22 18c0 1.1-.89 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          required
          aria-required="true"
        />
        <button type="submit">Subscribe</button>
      </form>
    </section>

    <section className={styles.companyInfo}>
      <div className={styles.logo}>
        <p className={styles.gradientText}>Geer.</p>
        <span className={styles.gradientText}>in</span>
      </div>
      <address>
        2nd floor, Rajhans House, opp. Nayara petrol pump, Varachha road, Surat{" "}
        <br />
        395006 <br />
        Mon - Sat from 9:00 AM - 7:00 PM IST <br />
        Email: <a href="mailto:contact1@geer.in">contact1@geer.in</a> <br />
        Phone: <strong>+91 9773114418</strong>
      </address>
      <div className={styles.social}>
        <a href="#!" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="#!" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>
    </section>

    <nav className={styles.links} aria-label="Footer Navigation">
      {[
        {
          title: "ABOUT",
          items: ["OUR STORY", "BEYOND CONFLICT", "FREE", "CUSTOMER REVIEW"],
        },
        {
          title: "POLICIES",
          items: [
            "TERMS & CONDITIONS",
            "PRIVACY POLICY",
            "FAQ",
            "RETURN & REFUND",
            "SHIPPING POLICY",
          ],
        },
        {
          title: "EDUCATION",
          items: [
            "DIAMOND BUYING GUIDE",
            "LAB GROWN DIAMONDS",
            "RING SIZE CHART",
            "JEWELLERY CARE",
            "BLOG",
          ],
        },
      ].map(({ title, items }) => (
        <div key={title}>
          <h4>{title}</h4>
          <ul>
            {items.map((item) => (
              <li key={item}>
                <strong>{item}</strong>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>

    <hr />
    <div className={styles.portfolio}>
      <a
        href="https://santosh-gamma.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Developed by Santosh Thapa
      </a>
    </div>

    <div className={styles.copyright}>
      © 2025, <strong>Geer.</strong>
    </div>
  </footer>
);

export default Footer;
