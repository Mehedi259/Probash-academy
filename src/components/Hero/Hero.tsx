import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      {/* Background Image that covers the right side */}
      <div className={styles.heroBackground}>
        <img src="/hero.jpg" alt="Probash Academy Background" className={styles.bgImage} />
        <div className={styles.gradientOverlay}></div>
        
        {/* Badges positioned over the background image */}
        <div className={styles.badgeTopRight}>
          <div className={styles.quoteMark}>"</div>
          <div className={styles.quoteText}>
            জানাই প্রবাস জীবনের<br />সবচেয়ে বড় শক্তি
          </div>
          <div className={styles.quoteMarkClose}>"</div>
        </div>

        <div className={styles.badgeBottomRight}>
          প্রবাসীদের জন্য<br />বাস্তব জ্ঞান, বাস্তব সমাধান
        </div>
        
        <div className={styles.badgeCenterText}>
          <div className={styles.cursiveText}>Learn<br/>Grow<br/>Go Further</div>
        </div>
      </div>

      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.textBlue}>আরবি শিখুন,</span><br />
            <span className={styles.textBlue}>দক্ষতা বাড়ান,</span><br />
            <span className={styles.textRed}>ভবিষ্যৎ গড়ুন</span>
          </h1>
          
          <p className={styles.heroSubtitle}>
            ওমানি আরবি ভাষা, ওমানের নিয়ম-কানুন, ভিসা, প্রবাস জীবন, কাজের ভাষা, ডিজিটাল স্কিলস এবং ভবিষ্যৎ ক্যারিয়ার — সবকিছু এক প্ল্যাটফর্মে।
          </p>
          
          <div className={styles.heroButtons}>
            <button className="btn btn-primary">
              কোর্স শুরু করুন <ArrowRight size={18} />
            </button>
            <button className={`btn btn-outline ${styles.btnPlay}`}>
              <PlayCircle size={20} className={styles.playIcon} /> কোর্স দেখুন
            </button>
          </div>

          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>5,000+</span>
              <span className={styles.statLabel}>শিক্ষার্থী</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>অনলাইন কোর্স</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>20+</span>
              <span className={styles.statLabel}>এক্সপার্ট ইন্সট্রাক্টর</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>95%</span>
              <span className={styles.statLabel}>সন্তুষ্ট শিক্ষার্থী</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
