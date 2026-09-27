import React from 'react';
import { BookA, FileText, Compass, Users, TrendingUp, Monitor } from 'lucide-react';
import styles from './Categories.module.css';

const Categories: React.FC = () => {
  const categories = [
    { id: 1, title: 'ওমানি আরবি', subtitle: 'বেসিক থেকে এডভান্স', icon: <BookA size={32} color="#0A1B3B" />, bg: '#EEF2FF' },
    { id: 2, title: 'ওমানের নিয়ম-কানুন', subtitle: 'আইন, সংস্কৃতি, জরুরি তথ্য', icon: <FileText size={32} color="#DC2626" />, bg: '#FEF2F2' },
    { id: 3, title: 'ওমান ভিসা ও প্রবাস জীবন', subtitle: 'ভিসা, আকামা, জীবনযাপন', icon: <Compass size={32} color="#059669" />, bg: '#ECFDF5' },
    { id: 4, title: 'কাজের ভাষা ও কমিউনিকেশন', subtitle: 'প্রফেশনাল আরবি ও ইংরেজি', icon: <Users size={32} color="#D97706" />, bg: '#FFFBEB' },
    { id: 5, title: 'ফিউচার স্কিলস', subtitle: 'ক্যারিয়ার ও ব্যক্তিগত উন্নয়ন', icon: <TrendingUp size={32} color="#4F46E5" />, bg: '#EEF2FF' },
    { id: 6, title: 'ডিজিটাল স্কিলস', subtitle: 'অনলাইন ইনকাম ও টেক স্কিল', icon: <Monitor size={32} color="#0891B2" />, bg: '#ECFEFF' },
  ];

  return (
    <section className={styles.categoriesSection}>
      <div className="container">
        <div className={styles.grid}>
          {categories.map((cat) => (
            <div key={cat.id} className={styles.card}>
              <div className={styles.iconWrapper} style={{ backgroundColor: cat.bg }}>
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
