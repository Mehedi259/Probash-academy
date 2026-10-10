import React from 'react';
import { Star, Users, Award, BookOpen, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { instructorsData, type Instructor } from '../../data/instructorsData';
import styles from './Instructors.module.css';

interface InstructorsProps {
  onSelectCourse?: (courseId: string) => void;
}

const Instructors: React.FC<InstructorsProps> = ({ onSelectCourse }) => {
  return (
    <section id="instructors" className={styles.instructorsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className={styles.badgeWrapper}>
            <span className={styles.badge}>
              <Sparkles size={14} /> আমাদের মেন্টর ও শিক্ষক প্যানেল
            </span>
          </div>
          <h2 className={styles.sectionHeading}>
            অভিজ্ঞ শিক্ষক পরিচিতি — কে কোন ক্লাস নিবেন
          </h2>
          <p className={styles.sectionSub}>
            শুধুমাত্র তাত্ত্বিক নয়, ওমানের বাস্তব প্রবাস জীবন, ভাষা ও ডিজিটাল দক্ষতার ক্ষেত্রে সফল ও অভিজ্ঞ মেন্টরদের তত্ত্বাবধানে শিখুন।
          </p>
        </div>

        <div className={styles.grid}>
          {instructorsData.map((instructor: Instructor) => (
            <div key={instructor.id} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.avatarContainer}>
                  <img
                    src={instructor.avatar}
                    alt={instructor.name}
                    className={styles.avatarImg}
                  />
                  <span className={styles.verifiedBadge} title="ভেরিফাইড মেন্টর">
                    <CheckCircle size={16} fill="#E1212B" stroke="#ffffff" />
                  </span>
                </div>

                <div className={styles.headerInfo}>
                  <div className={styles.nameRow}>
                    <h3 className={styles.instructorName}>{instructor.name}</h3>
                    <span className={styles.roleTag}>{instructor.role}</span>
                  </div>
                  <p className={styles.instructorTitle}>{instructor.title}</p>
                  <p className={styles.experienceText}>
                    <Award size={14} className={styles.expIcon} /> {instructor.experience}
                  </p>
                </div>
              </div>

              {/* Teaching Courses Highlight */}
              <div className={styles.teachingBox}>
                <div className={styles.teachingHeader}>
                  <BookOpen size={15} className={styles.bookIcon} />
                  <span>যে যে ক্লাস নিবেন:</span>
                </div>
                <div className={styles.coursesList}>
                  {instructor.coursesTeaching.map((course, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={styles.coursePill}
                      onClick={() => onSelectCourse && onSelectCourse(course.courseId)}
                    >
                      <span className={styles.coursePillName}>{course.courseTitle}</span>
                      <span className={styles.coursePillBadge}>{course.badge}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bio & Specialties */}
              <p className={styles.bio}>{instructor.bio}</p>

              <div className={styles.specialties}>
                {instructor.specialties.slice(0, 3).map((item, i) => (
                  <span key={i} className={styles.specBadge}>
                    ✓ {item}
                  </span>
                ))}
              </div>

              {/* Footer with stats and CTA */}
              <div className={styles.cardFooter}>
                <div className={styles.stats}>
                  <div className={styles.statItem}>
                    <Users size={14} />
                    <span>{instructor.studentsCount} শিক্ষার্থী</span>
                  </div>
                  <div className={styles.statItem}>
                    <Star size={14} fill="#F59E0B" color="#F59E0B" />
                    <span>{instructor.rating} রেটিং</span>
                  </div>
                </div>

                <button
                  type="button"
                  className={styles.viewCourseBtn}
                  onClick={() => onSelectCourse && onSelectCourse(instructor.coursesTeaching[0].courseId)}
                >
                  ক্লাসগুলো দেখুন <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className={styles.mentorBanner}>
          <div className={styles.mentorBannerContent}>
            <h3>সরাসরি শিক্ষকদের সাথে লাইভ ক্লাসে প্রশ্ন করার সুযোগ</h3>
            <p>প্রতি সপ্তাহে রয়েছে লাইভ প্রশ্নোত্তর ও ওমান সংক্রান্ত যেকোনো সমস্যার সমাধানের সেশন।</p>
          </div>
          <a href="#courses" className="btn btn-primary">
            আজই ক্লাসে যোগ দিন
          </a>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
