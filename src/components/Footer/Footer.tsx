import React from 'react';
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

interface FooterProps {
  onOpenLogin?: () => void;
  onGoToDashboard?: () => void;
  onSelectCourse?: (courseId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenLogin, onGoToDashboard, onSelectCourse }) => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.companyInfo}>
          <div className={styles.logo}>
            <div className={styles.logoBadge}>P</div>
            <div>
              <h2 className={styles.logoTitle}>Hello Probash</h2>
              <span className={styles.logoSubtitle}>ACADEMY</span>
              <span className={styles.logoTags}>LANGUAGE • SKILLS • LEARNING</span>
            </div>
          </div>
          <p className={styles.description}>
            ওমান ও মধ্যপ্রাচ্যের সকল প্রবাসী বাংলাদেশিদের জন্য বাস্তবমুখী লার্নিং প্ল্যাটফর্ম। ভাষা শিখুন, আইনি সচেতনতা অর্জন করুন, ডিজিটাল দক্ষতায় এগিয়ে যান।
          </p>
        </div>

        <div className={styles.linksGroup}>
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>আমাদের ৫টি কোর্স</h4>
            <ul className={styles.linkList}>
              <li>
                <a
                  href="#courses"
                  onClick={(e) => {
                    if (onSelectCourse) {
                      e.preventDefault();
                      onSelectCourse('arabic-language');
                    }
                  }}
                >
                  ১. আরবি ভাষা শিক্ষা (Arabic)
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  onClick={(e) => {
                    if (onSelectCourse) {
                      e.preventDefault();
                      onSelectCourse('english-language');
                    }
                  }}
                >
                  ২. English Language (স্পোকেন)
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  onClick={(e) => {
                    if (onSelectCourse) {
                      e.preventDefault();
                      onSelectCourse('content-creation-video-editing');
                    }
                  }}
                >
                  ৩. Content Creation & Video Editing
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  onClick={(e) => {
                    if (onSelectCourse) {
                      e.preventDefault();
                      onSelectCourse('oman-guide-atoz');
                    }
                  }}
                >
                  ৪. ওমান গাইড A to Z
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  onClick={(e) => {
                    if (onSelectCourse) {
                      e.preventDefault();
                      onSelectCourse('oman-visa-atoz');
                    }
                  }}
                >
                  ৫. ওমানের ভিসা A to Z
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>দ্রুত লিংক</h4>
            <ul className={styles.linkList}>
              <li><a href="#home">হোম পেজ</a></li>
              <li><a href="#courses">সকল কোর্স</a></li>
              <li><a href="#instructors">শিক্ষক পরিচিতি</a></li>
              <li>
                <a
                  href="#dashboard"
                  onClick={(e) => {
                    if (onGoToDashboard) {
                      e.preventDefault();
                      onGoToDashboard();
                    }
                  }}
                >
                  ছাত্রদের ড্যাশবোর্ড (LMS)
                </a>
              </li>
              <li>
                <a
                  href="#login"
                  onClick={(e) => {
                    if (onOpenLogin) {
                      e.preventDefault();
                      onOpenLogin();
                    }
                  }}
                >
                  ছাত্র লগইন / রেজিস্ট্রেশন
                </a>
              </li>
              <li><a href="#oman-guide">ওমান গাইড</a></li>
              <li><a href="#blog">ব্লগ ও আপডেট</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.subscribeGroup}>
          <div className={styles.socialMedia}>
            <h4 className={styles.columnTitle}>যুক্ত থাকুন</h4>
            <div className={styles.socialIcons}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className={styles.socialIcon} aria-label="Facebook"><FaFacebook size={20} /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className={styles.socialIcon} aria-label="YouTube"><FaYoutube size={20} /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className={styles.socialIcon} aria-label="Instagram"><FaInstagram size={20} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.socialIcon} aria-label="LinkedIn"><FaLinkedin size={20} /></a>
            </div>
          </div>

          <div className={styles.newsletter}>
            <h4 className={styles.columnTitle}>প্রবাসী আপডেট পেতে সাবস্ক্রাইব করুন</h4>
            <div className={styles.subscribeForm}>
              <input type="email" placeholder="আপনার ইমেইল বা ফোন" className={styles.emailInput} />
              <button
                type="button"
                className={styles.subscribeBtn}
                onClick={() => alert('ধন্যবাদ! Hello Probash Academy-তে সাবস্ক্রাইব সফল হয়েছে।')}
              >
                সাবস্ক্রাইব
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={`container ${styles.footerBottomContainer}`}>
          <p>© 2026 Hello Probash Academy. সর্বস্বত্ব সংরক্ষিত।</p>
          <p className={styles.tagline}>জানাই প্রবাস জীবনের সবচেয়ে বড় শক্তি ✈️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
