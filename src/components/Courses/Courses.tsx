import React, { useState } from 'react';
import { BookOpen, Star, ArrowRight, Clock, Eye, Sparkles } from 'lucide-react';
import { coursesData, type Course } from '../../data/coursesData';
import { useAuth } from '../../context/AuthContext';
import CourseDetailsModal from './CourseDetailsModal';
import styles from './Courses.module.css';

interface CoursesProps {
  onGoToDashboard: (courseId?: string) => void;
  onOpenLogin: () => void;
  selectedCourseId?: string | null;
}

const Courses: React.FC<CoursesProps> = ({
  onGoToDashboard,
  onOpenLogin,
  selectedCourseId
}) => {
  const { user } = useAuth();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [modalCourse, setModalCourse] = useState<Course | null>(() => {
    if (selectedCourseId) {
      return coursesData.find((c) => c.id === selectedCourseId) || null;
    }
    return null;
  });

  // Update when selectedCourseId changes
  React.useEffect(() => {
    if (selectedCourseId) {
      const match = coursesData.find((c) => c.id === selectedCourseId);
      if (match) {
        setModalCourse(match);
      }
    }
  }, [selectedCourseId]);

  const filteredCourses = activeCategory === 'all'
    ? coursesData
    : coursesData.filter((c) => {
        if (activeCategory === 'language') return c.category === 'language';
        if (activeCategory === 'guide-visa') return c.category === 'guide' || c.category === 'visa';
        if (activeCategory === 'skills') return c.category === 'skills';
        return true;
      });

  return (
    <section id="courses" className={styles.coursesSection}>
      <div className="container">
        <div className={styles.headerRow}>
          <div>
            <div className={styles.badgeWrapper}>
              <span className={styles.sectionBadge}>
                <Sparkles size={14} /> ৫টি বিশেষায়িত প্রবাস কোর্স
              </span>
            </div>
            <h2 className="section-title">প্রবাসীদের জন্য আমাদের নির্বাচিত কোর্সসমূহ</h2>
            <p className="section-subtitle">
              ওমান প্রবাস জীবনকে সহজ, নিরাপদ এবং উন্নত আয়ের উপযোগী করতে তৈরি ৫টি অপরিহার্য কোর্স
            </p>
          </div>

          <div className={styles.filterPills}>
            <button
              type="button"
              className={`${styles.filterBtn} ${activeCategory === 'all' ? styles.activeFilter : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              সকল কোর্স (৫)
            </button>
            <button
              type="button"
              className={`${styles.filterBtn} ${activeCategory === 'language' ? styles.activeFilter : ''}`}
              onClick={() => setActiveCategory('language')}
            >
              ভাষা শিক্ষা (আরবি ও ইংরেজি)
            </button>
            <button
              type="button"
              className={`${styles.filterBtn} ${activeCategory === 'guide-visa' ? styles.activeFilter : ''}`}
              onClick={() => setActiveCategory('guide-visa')}
            >
              ওমান গাইড ও ভিসা
            </button>
            <button
              type="button"
              className={`${styles.filterBtn} ${activeCategory === 'skills' ? styles.activeFilter : ''}`}
              onClick={() => setActiveCategory('skills')}
            >
              ভিডিও এডিটিং ও স্কিলস
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {filteredCourses.map((course) => {
            const isEnrolled = user?.enrolledCourseIds.includes(course.id);
            return (
              <div key={course.id} className={styles.card}>
                <div
                  className={styles.imageContainer}
                  onClick={() => setModalCourse(course)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={course.image} alt={course.title} className={styles.courseImage} />
                  <span
                    className={styles.cardBadge}
                    style={{ backgroundColor: course.badgeColor }}
                  >
                    {course.badge}
                  </span>
                  <div className={styles.imageOverlay}>
                    <button type="button" className={styles.previewBtn}>
                      <Eye size={16} /> কারিকুলাম ও বিবরণ দেখুন
                    </button>
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.instructorMini}>
                    <img src={course.instructorAvatar} alt={course.instructorName} className={styles.instructorImg} />
                    <span className={styles.instructorNameTxt}>{course.instructorName}</span>
                  </div>

                  <h3
                    className={styles.courseTitle}
                    onClick={() => setModalCourse(course)}
                    style={{ cursor: 'pointer' }}
                  >
                    {course.title}
                  </h3>
                  <span className={styles.englishTitleTag}>{course.englishTitle}</span>
                  <p className={styles.courseSubtitle}>{course.subtitle}</p>

                  <div className={styles.metaInfo}>
                    <div className={styles.metaItem}>
                      <BookOpen size={14} />
                      <span>{course.lessonsCount} Lessons</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Clock size={14} />
                      <span>{course.durationHours}h</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Star size={14} color="#F59E0B" fill="#F59E0B" />
                      <span>{course.rating} ({course.reviewsCount})</span>
                    </div>
                  </div>

                  <div className={styles.cardFooter}>
                    <div className={styles.priceContainer}>
                      <span className={styles.priceBDT}>৳ {course.priceBDT.toLocaleString()}</span>
                      <span className={styles.priceOMR}>({course.priceOMR} OMR)</span>
                    </div>

                    <div className={styles.actionBtns}>
                      <button
                        type="button"
                        className={styles.detailsBtn}
                        onClick={() => setModalCourse(course)}
                        title="বিস্তারিত দেখুন"
                      >
                        বিস্তারিত
                      </button>
                      <button
                        type="button"
                        className={`btn btn-primary ${styles.enrollBtn}`}
                        onClick={() => {
                          if (isEnrolled) {
                            onGoToDashboard(course.id);
                          } else {
                            setModalCourse(course);
                          }
                        }}
                      >
                        {isEnrolled ? 'ক্লাস শুরু' : 'এনরোল'} <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Course Details Modal */}
      <CourseDetailsModal
        course={modalCourse}
        isOpen={!!modalCourse}
        onClose={() => setModalCourse(null)}
        onGoToDashboard={(courseId) => {
          setModalCourse(null);
          onGoToDashboard(courseId);
        }}
        onOpenLogin={onOpenLogin}
      />
    </section>
  );
};

export default Courses;
