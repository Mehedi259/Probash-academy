import React from 'react';
import { GraduationCap, Users, BookOpen, CheckCircle, Headphones, MessageCircle } from 'lucide-react';
import styles from './Features.module.css';

const Features: React.FC = () => {
  const featuresList = [
    { id: 1, title: 'প্রবাসভিত্তিক বাস্তব কন্টেন্ট', icon: <GraduationCap size={28} /> },
    { id: 2, title: 'অভিজ্ঞ ইন্সট্রাক্টর', icon: <Users size={28} /> },
    { id: 3, title: 'সহজ ভাষায় ধাপে ধাপে শিক্ষা', icon: <BookOpen size={28} /> },
    { id: 4, title: 'সার্টিফিকেট ও ক্যারিয়ার সাপোর্ট', icon: <CheckCircle size={28} /> },
    { id: 5, title: 'আজীবন এক্সেস', icon: <Headphones size={28} /> },
    { id: 6, title: 'প্রবাসী কমিউনিটি সাপোর্ট', icon: <MessageCircle size={28} /> },
  ];

  return (
    <section className={styles.featuresSection}>
      <div className={`container ${styles.featuresContainer}`}>
        <div className={styles.contentLeft}>
          <h2 className="section-title">কেন Hello Probash Academy?</h2>
          <p className="section-subtitle">প্রবাস জীবনের বাস্তব অভিজ্ঞতা থেকে তৈরি, আপনার জন্য</p>
          
          <div className={styles.grid}>
            {featuresList.map((feature) => (
              <div key={feature.id} className={styles.featureItem}>
                <div className={styles.iconWrapper}>{feature.icon}</div>
                <h4 className={styles.featureTitle}>{feature.title}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.contentRight}>
          <div className={styles.testimonialCard}>
            <div className={styles.authorImage}>
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" alt="Musa Ahmed" />
            </div>
            <div className={styles.testimonialContent}>
              <div className={styles.quote}>
                "Hello Probash Academy শুধু একটি লার্নিং প্ল্যাটফর্ম নয়, এটি প্রবাসীদের জন্য একটি সহায়তা। জ্ঞান অর্জন করুন, নিজেকে প্রস্তুত করুন, ভবিষ্যৎ গড়ুন।"
              </div>
              <div className={styles.authorInfo}>
                <strong>- Musa Ahmed</strong>
                <span>Founder, Hello Probash Academy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
