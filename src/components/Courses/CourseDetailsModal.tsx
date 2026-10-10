import React, { useState } from 'react';
import { X, CheckCircle, Clock, BookOpen, Star, Shield, ArrowRight, PlayCircle, ChevronDown, ChevronUp } from 'lucide-react';
import type { Course } from '../../data/coursesData';
import { useAuth } from '../../context/AuthContext';
import styles from './CourseDetailsModal.module.css';

interface CourseDetailsModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  onGoToDashboard: (courseId?: string) => void;
  onOpenLogin: () => void;
}

const CourseDetailsModal: React.FC<CourseDetailsModalProps> = ({
  course,
  isOpen,
  onClose,
  onGoToDashboard,
  onOpenLogin
}) => {
  const { user, isLoggedIn, enrollCourse } = useAuth();
  const [openModuleIndex, setOpenModuleIndex] = useState<number>(0);
  const [enrolledSuccess, setEnrolledSuccess] = useState(false);

  if (!isOpen || !course) return null;

  const isAlreadyEnrolled = user?.enrolledCourseIds.includes(course.id);

  const handleEnroll = () => {
    if (!isLoggedIn) {
      // Prompt user or auto-login with demo
      enrollCourse(course.id);
      setEnrolledSuccess(true);
      setTimeout(() => {
        onClose();
        onGoToDashboard(course.id);
      }, 700);
      return;
    }

    enrollCourse(course.id);
    setEnrolledSuccess(true);
    setTimeout(() => {
      onClose();
      onGoToDashboard(course.id);
    }, 700);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className={styles.modalHeader}>
          <div className={styles.headerBadge} style={{ backgroundColor: course.badgeColor }}>
            {course.badge}
          </div>
          <h2 className={styles.title}>{course.title}</h2>
          <p className={styles.englishTitle}>{course.englishTitle}</p>
          <p className={styles.subtitle}>{course.subtitle}</p>

          <div className={styles.metaRow}>
            <div className={styles.metaItem}>
              <Star size={16} fill="#F59E0B" color="#F59E0B" />
              <span>{course.rating} ({course.reviewsCount} রিভিউ)</span>
            </div>
            <div className={styles.metaItem}>
              <BookOpen size={16} />
              <span>{course.lessonsCount}টি লেসন</span>
            </div>
            <div className={styles.metaItem}>
              <Clock size={16} />
              <span>{course.durationHours} ঘণ্টা ভিডিও</span>
            </div>
          </div>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.leftCol}>
            {/* Instructor Mini Card */}
            <div className={styles.instructorBox}>
              <img src={course.instructorAvatar} alt={course.instructorName} className={styles.instImg} />
              <div>
                <span className={styles.instLabel}>ক্লাস নিবেন:</span>
                <h4 className={styles.instName}>{course.instructorName}</h4>
                <p className={styles.instTitle}>{course.instructorTitle}</p>
              </div>
            </div>

            {/* Description */}
            <div className={styles.sectionBlock}>
              <h3 className={styles.blockTitle}>কোর্স সম্পর্কে বিস্তারিত</h3>
              <p className={styles.descriptionText}>{course.description}</p>
            </div>

            {/* What you will learn */}
            <div className={styles.sectionBlock}>
              <h3 className={styles.blockTitle}>এই কোর্সে যা যা শিখবেন</h3>
              <div className={styles.highlightsGrid}>
                {course.highlights.map((item, idx) => (
                  <div key={idx} className={styles.highlightItem}>
                    <CheckCircle size={16} className={styles.checkIcon} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum Accordion */}
            <div className={styles.sectionBlock}>
              <h3 className={styles.blockTitle}>কোর্স কারিকুলাম ও লেসনসমূহ</h3>
              <div className={styles.modulesContainer}>
                {course.modules.map((module, mIdx) => {
                  const isOpen = openModuleIndex === mIdx;
                  return (
                    <div key={module.id} className={styles.moduleItem}>
                      <button
                        type="button"
                        className={styles.moduleHeader}
                        onClick={() => setOpenModuleIndex(isOpen ? -1 : mIdx)}
                      >
                        <div className={styles.moduleTitleGroup}>
                          <span className={styles.moduleIndexBadge}>{mIdx + 1}</span>
                          <span className={styles.moduleName}>{module.title}</span>
                        </div>
                        <div className={styles.moduleHeaderRight}>
                          <span className={styles.lessonsBadge}>{module.lessons.length} লেসন</span>
                          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className={styles.lessonsList}>
                          {module.lessons.map((lesson) => (
                            <div key={lesson.id} className={styles.lessonRow}>
                              <div className={styles.lessonLeft}>
                                <PlayCircle size={16} className={styles.playIcon} />
                                <div>
                                  <div className={styles.lessonName}>{lesson.title}</div>
                                  {lesson.summary && <div className={styles.lessonSummary}>{lesson.summary}</div>}
                                </div>
                              </div>
                              <span className={styles.lessonDuration}>{lesson.duration}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.enrollCard}>
              <img src={course.image} alt={course.title} className={styles.previewImage} />
              
              <div className={styles.priceRow}>
                <div className={styles.priceBDT}>৳ {course.priceBDT.toLocaleString()}</div>
                <div className={styles.priceOMR}>বা {course.priceOMR} ওমানি রিয়াল (OMR)</div>
              </div>

              {enrolledSuccess ? (
                <div className={styles.successEnrolled}>
                  <CheckCircle size={20} />
                  <span>এনরোল সম্পন্ন হয়েছে! ড্যাশবোর্ডে যাচ্ছেন...</span>
                </div>
              ) : isAlreadyEnrolled ? (
                <button
                  type="button"
                  className={`btn btn-primary ${styles.ctaBtn}`}
                  onClick={() => {
                    onClose();
                    onGoToDashboard(course.id);
                  }}
                >
                  ড্যাশবোর্ডে কোর্সটি চালু করুন <ArrowRight size={18} />
                </button>
              ) : (
                <button
                  type="button"
                  className={`btn btn-primary ${styles.ctaBtn}`}
                  onClick={handleEnroll}
                >
                  এখনই এনরোল করুন <ArrowRight size={18} />
                </button>
              )}

              <div className={styles.perksList}>
                <div className={styles.perk}>
                  <Shield size={16} /> <span>জীবনব্যাপী আনলিমিটেড এক্সেস</span>
                </div>
                <div className={styles.perk}>
                  <BookOpen size={16} /> <span>সকল পিডিএফ ও অডিও রিসোর্স ফ্রি</span>
                </div>
                <div className={styles.perk}>
                  <Star size={16} /> <span>কোর্স সমাপ্তিতে ডিজিটাল সার্টিফিকেট</span>
                </div>
              </div>

              {!isLoggedIn && (
                <div className={styles.loginHint}>
                  ইতিমধ্যে শিক্ষার্থী?{' '}
                  <button type="button" onClick={() => { onClose(); onOpenLogin(); }} className={styles.loginLink}>
                    লগইন করুন
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsModal;
