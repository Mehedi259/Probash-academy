import React from 'react';
import { FileText, Map, Users, TrendingUp, Monitor } from 'lucide-react';
import styles from './Categories.module.css';

const Categories: React.FC = () => {
  const categories = [
    { 
      id: 1, 
      title: 'ওমানি আরবি', 
      subtitle: 'বেসিক থেকে এডভান্স', 
      icon: <div className={styles.arabicIcon}><span className={styles.letterA}>A</span> <span className={styles.arabicLetter}>زُب</span></div> 
    },
    { id: 2, title: 'ওমানের নিয়ম-কানুন', subtitle: 'আইন, সংস্কৃতি, জরুরি তথ্য', icon: <FileText size={40} color="#E1212B" strokeWidth={1.5} /> },
    { id: 3, title: 'ওমান ভিসা ও প্রবাস জীবন', subtitle: 'ভিসা, আকামা, জীবনযাপন', icon: <Map size={40} color="#0A1B3B" strokeWidth={1.5} /> },
    { id: 4, title: 'কাজের ভাষা ও কমিউনিকেশন', subtitle: 'প্রফেশনাল আরবি ও ইংরেজি', icon: <Users size={40} color="#E1212B" strokeWidth={1.5} /> },
    { id: 5, title: 'ফিউচার স্কিলস', subtitle: 'ক্যারিয়ার ও ব্যক্তিগত উন্নয়ন', icon: <TrendingUp size={40} color="#0A1B3B" strokeWidth={1.5} /> },
    { id: 6, title: 'ডিজিটাল স্কিলস', subtitle: 'অনলাইন ইনকাম ও টেক স্কিল', icon: <Monitor size={40} color="#0A1B3B" strokeWidth={1.5} /> },
  ];

  return (
    <section className={styles.categoriesSection}>
      <div className="container">
        <div className={styles.grid}>
          {categories.map((cat) => (
            <div key={cat.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                {cat.icon}
              </div>
              <h3 className={styles.cardTitle}>{cat.title}</h3>
              <p className={styles.cardSubtitle}>{cat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
