import React from 'react';
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.companyInfo}>
          <div className={styles.logo}>
            <img src="https://ui-avatars.com/api/?name=P&background=E1212B&color=fff&rounded=true&bold=true" alt="Logo" className={styles.logoImg} style={{width: '50px', height: '50px', background: 'white'}} />
            <div>
              <h2 className={styles.logoTitle}>Hello Probash</h2>
              <span className={styles.logoSubtitle}>ACADEMY</span>
              <span className={styles.logoTags}>LANGUAGE • SKILLS • LEARNING</span>
            </div>
          </div>
          <p className={styles.description}>
            প্রবাসীদের জন্য<br/>জ্ঞান, দক্ষতা ও উজ্জ্বল ভবিষ্যৎ
          </p>
        </div>

        <div className={styles.linksGroup}>
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><a href="#">Home</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Oman Guide</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Help & Support</h4>
            <ul className={styles.linkList}>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.subscribeGroup}>
          <div className={styles.socialMedia}>
            <h4 className={styles.columnTitle}>Follow Us</h4>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon}><FaFacebook size={20} /></a>
              <a href="#" className={styles.socialIcon}><FaYoutube size={20} /></a>
              <a href="#" className={styles.socialIcon}><FaInstagram size={20} /></a>
              <a href="#" className={styles.socialIcon}><FaLinkedin size={20} /></a>
            </div>
          </div>

          <div className={styles.newsletter}>
            <h4 className={styles.columnTitle}>Subscribe to Our Newsletter</h4>
            <div className={styles.subscribeForm}>
              <input type="email" placeholder="Your email address" className={styles.emailInput} />
              <button className={styles.subscribeBtn}>Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={`container ${styles.footerBottomContainer}`}>
          <p>© 2026 Hello Probash Academy. All rights reserved.</p>
          <p className={styles.tagline}>Knowledge Today, A Brighter Tomorrow ✈️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
