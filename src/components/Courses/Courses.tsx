import React from 'react';
import { BookOpen, Star, ArrowRight } from 'lucide-react';
import styles from './Courses.module.css';

const Courses: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: 'ওমানি আরবি - বেসিক কোর্স',
      subtitle: 'দৈনন্দিন জীবনের জন্য প্র্যাক্টিক্যাল আরবি',
      image: 'https://images.unsplash.com/photo-1577563908411-50cb98976fea?q=80&w=2070&auto=format&fit=crop',
      lessons: 30,
      rating: 4.8,
      reviews: '1.2k',
      price: '1,500',
    },
    {
      id: 2,
      title: 'ওমানের নিয়ম-কানুন ও সংস্কৃতি',
      subtitle: 'নতুন প্রবাসীদের জন্য পূর্ণাঙ্গ গাইড',
      image: 'https://images.unsplash.com/photo-1549480614-25e2d67a122e?q=80&w=2070&auto=format&fit=crop',
      lessons: 25,
      rating: 4.7,
      reviews: '950',
      price: '1,200',
    },
    {
      id: 3,
      title: 'ওমান ভিসা প্রসেস (A to Z)',
      subtitle: 'ভিসা, আকামা, মেডিকেল, নবায়ন',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop',
      lessons: 28,
      rating: 4.9,
      reviews: '1.1k',
      price: '1,800',
    },
    {
      id: 4,
      title: 'কাজের ভাষা ও যোগাযোগ',
      subtitle: 'ওয়ার্কপ্লেস কমিউনিকেশন স্কিল',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop',
      lessons: 20,
      rating: 4.6,
      reviews: '780',
      price: '1,200',
    },
    {
      id: 5,
      title: 'ডিজিটাল স্কিলস ফর প্রবাসী',
      subtitle: 'অনলাইন ইনকাম ও ফ্রিল্যান্সিং',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
      lessons: 40,
      rating: 4.8,
      reviews: '1.5k',
      price: '2,000',
    }
  ];

  return (
    <section className={styles.coursesSection}>
      <div className="container">
        <div className="flex-between">
          <div>
            <h2 className="section-title">জনপ্রিয় কোর্সসমূহ</h2>
            <p className="section-subtitle">আপনার প্রবাস জীবনের জন্য সবচেয়ে প্রয়োজনীয় কোর্স</p>
          </div>
          <button className={`btn btn-outline ${styles.viewAllBtn}`}>
            সকল কোর্স দেখুন <ArrowRight size={16} />
          </button>
        </div>

        <div className={styles.grid}>
          {courses.map((course) => (
            <div key={course.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <img src={course.image} alt={course.title} className={styles.courseImage} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.courseTitle}>{course.title}</h3>
                <p className={styles.courseSubtitle}>{course.subtitle}</p>
                
                <div className={styles.metaInfo}>
                  <div className={styles.metaItem}>
                    <BookOpen size={14} />
                    <span>{course.lessons} Lessons</span>
                  </div>
                  <div className={styles.metaItem}>
                    <Star size={14} color="#F59E0B" fill="#F59E0B" />
                    <span>{course.rating} ({course.reviews})</span>
                  </div>
                </div>
                
                <div className={styles.cardFooter}>
                  <div className={styles.price}>৳ {course.price}</div>
                  <button className={`btn btn-primary ${styles.enrollBtn}`}>এনরোল করুন</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
