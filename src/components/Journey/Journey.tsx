import React from 'react';
import { ChevronRight } from 'lucide-react';
import styles from './Journey.module.css';

const Journey: React.FC = () => {
  return (
    <section className={styles.journeySection}>
      <div className={`container ${styles.journeyContainer}`}>
        <div className={styles.contentLeft}>
          <h2 className="section-title">আপনার শেখার যাত্রা খুবই সহজ</h2>
          <p className="section-subtitle">মাত্র ৩টি ধাপে শুরু করুন আজই</p>
          
          <div className={styles.stepsContainer}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>১</div>
              <div className={styles.stepContent}>
                <h4 className={styles.stepTitle}>একটি একাউন্ট খুলুন</h4>
                <p className={styles.stepSubtitle}>ফ্রি রেজিস্ট্রেশন করুন</p>
              </div>
            </div>
            
            <ChevronRight size={24} className={styles.stepArrow} />
            
            <div className={styles.step}>
              <div className={styles.stepNumber}>২</div>
              <div className={styles.stepContent}>
                <h4 className={styles.stepTitle}>আপনার পছন্দের কোর্স নিন</h4>
                <p className={styles.stepSubtitle}>যেকোনো ডিভাইস থেকে শিখুন</p>
              </div>
            </div>
            
            <ChevronRight size={24} className={styles.stepArrow} />
            
            <div className={styles.step}>
              <div className={styles.stepNumber}>৩</div>
              <div className={styles.stepContent}>
                <h4 className={styles.stepTitle}>দক্ষতা বাড়ান, ভবিষ্যৎ গড়ুন</h4>
                <p className={styles.stepSubtitle}>সার্টিফিকেট অর্জন করুন</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contentRight}>
          <div className={styles.bannerWrapper}>
            <img 
              src="https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop" 
              alt="Journey Banner" 
              className={styles.bannerImage} 
            />
            <div className={styles.bannerOverlay}></div>
            <div className={styles.bannerContent}>
              <h3 className={styles.bannerTitle}>শিক্ষা থেকে সম্ভাবনা<br/>প্রবাস থেকে সাফল্য</h3>
              <p className={styles.bannerSubtitle}>Better Skills<br/>Brighter Tomorrow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
