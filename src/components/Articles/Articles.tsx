import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import styles from './Articles.module.css';

const Articles: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: 'ওমান ভিসা ২০২৬ - নতুন আপডেট ও যা জানা দরকার',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop',
      date: '15 Sep 2026',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'ওমানে নতুন প্রবাসীদের জন্য ১০টি গুরুত্বপূর্ণ টিপস',
      image: 'https://images.unsplash.com/photo-1574512966579-245c4794218a?q=80&w=2070&auto=format&fit=crop',
      date: '12 Sep 2026',
      readTime: '4 min read',
    },
    {
      id: 3,
      title: 'ওমানের জীবনযাত্রার খরচ: বাসস্থান, খাবার, যাতায়াত',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop',
      date: '10 Sep 2026',
      readTime: '6 min read',
    },
  ];

  return (
    <section className={styles.articlesSection}>
      <div className="container">
        <div className="flex-between">
          <div>
            <h2 className="section-title">সর্বশেষ গাইড ও আর্টিকেল</h2>
            <p className="section-subtitle">ওমান, প্রবাস জীবন ও ক্যারিয়ার সম্পর্কিত গুরুত্বপূর্ণ তথ্য</p>
          </div>
          <button className={`btn btn-outline ${styles.viewAllBtn}`}>
            সব আর্টিকেল দেখুন <ArrowRight size={16} />
          </button>
        </div>

        <div className={styles.grid}>
          {articles.map((article) => (
            <div key={article.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <img src={article.image} alt={article.title} className={styles.articleImage} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.articleTitle}>{article.title}</h3>
                
                <div className={styles.metaInfo}>
                  <div className={styles.metaItem}>
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
