import React, { useState } from 'react';
import {
  BookOpen,
  PlayCircle,
  CheckCircle2,
  Calendar,
  Award,
  User,
  LogOut,
  Home,
  Clock,
  ArrowRight,
  Download,
  MessageSquare,
  Sparkles,
  Check,
  Video
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { coursesData, type Course, type Lesson } from '../../data/coursesData';
import styles from './StudentDashboard.module.css';

interface StudentDashboardProps {
  onBackToHome: () => void;
  initialCourseId?: string | null;
}

const StudentDashboard: React.FC<StudentDashboardProps> = ({
  onBackToHome,
  initialCourseId
}) => {
  const { user, logout, completedLessons, toggleLessonComplete } = useAuth();

  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'classroom' | 'schedule' | 'certificates' | 'profile'>(
    initialCourseId ? 'classroom' : 'overview'
  );

  // Classroom state
  const enrolledCourses = coursesData.filter((c) =>
    user?.enrolledCourseIds.includes(c.id)
  );

  const [selectedCourseId, setSelectedCourseId] = useState<string>(
    initialCourseId || (enrolledCourses[0]?.id ?? coursesData[0].id)
  );

  const activeCourse: Course =
    coursesData.find((c) => c.id === selectedCourseId) || coursesData[0];

  // Active lesson
  const allLessonsInCourse: Lesson[] = activeCourse.modules.flatMap((m) => m.lessons);
  const [activeLessonId, setActiveLessonId] = useState<string>(
    allLessonsInCourse[0]?.id || ''
  );

  const currentLesson: Lesson =
    allLessonsInCourse.find((l) => l.id === activeLessonId) || allLessonsInCourse[0];

  // Questions state for Q&A demo
  const [qaInput, setQaInput] = useState('');
  const [questions, setQuestions] = useState([
    {
      id: 1,
      author: 'মোঃ তানভীর আহমেদ (আপনি)',
      question: 'ওমানে কাজের জায়গায় কফিলের সাথে বেতন নিয়ে কথা বলতে কোন শব্দগুলো ব্যবহার করব?',
      reply: 'ওস্তাদ আব্দুল্লাহ: আপনি লেসন ৬ দেখুন। সেখানে "কাম রাতিব" এবং "আনারিদ রাতিব হাক্কি" ডায়ালগ প্র্যাকটিস করানো হয়েছে।',
      time: '২ ঘণ্টা আগে'
    }
  ]);

  const handlePostQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!qaInput.trim()) return;
    setQuestions([
      {
        id: Date.now(),
        author: user?.name || 'আপনি',
        question: qaInput,
        reply: 'শিক্ষক শীঘ্রই আপনার প্রশ্নের উত্তর প্রদান করবেন। (সাধারণত ২ ঘণ্টার মধ্যে)',
        time: 'এইমাত্র'
      },
      ...questions
    ]);
    setQaInput('');
  };

  // Calculate student statistics
  const totalEnrolled = enrolledCourses.length;
  const courseLessons = allLessonsInCourse.map((l) => l.id);
  const courseCompletedCount = courseLessons.filter((id) =>
    completedLessons.includes(id)
  ).length;
  const courseProgressPercent = courseLessons.length
    ? Math.round((courseCompletedCount / courseLessons.length) * 100)
    : 0;

  return (
    <div className={styles.dashboardWrapper}>
      {/* Top Navbar */}
      <header className={styles.topBar}>
        <div className={styles.topBarLeft}>
          <button
            type="button"
            className={styles.backHomeBtn}
            onClick={onBackToHome}
          >
            <Home size={18} />
            <span>ওয়েবসাইটে ফিরুন</span>
          </button>

          <div className={styles.brandTitle}>
            <span className={styles.brandBadge}>P</span>
            <div>
              <span className={styles.brandMain}>Hello Probash</span>
              <span className={styles.brandSub}>STUDENT LMS</span>
            </div>
          </div>
        </div>

        <div className={styles.topBarRight}>
          <div className={styles.userBadge}>
            <img
              src={user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop'}
              alt={user?.name}
              className={styles.userAvatar}
            />
            <div className={styles.userInfo}>
              <span className={styles.userName}>{user?.name || 'শিক্ষার্থী'}</span>
              <span className={styles.userRole}>আইডি: {user?.studentId || 'PA-2026-8941'}</span>
            </div>
          </div>

          <button
            type="button"
            className={styles.logoutBtn}
            onClick={() => {
              logout();
              onBackToHome();
            }}
            title="লগআউট"
          >
            <LogOut size={16} />
            <span className={styles.logoutText}>লগআউট</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className={styles.mainContainer}>
        {/* Sidebar Nav */}
        <aside className={styles.sidebar}>
          <div className={styles.studentCard}>
            <div className={styles.studentCardHeader}>
              <span className={styles.statusOnline}>● সক্রিয় শিক্ষার্থী</span>
              <span className={styles.batchTag}>ব্যাচ ২০২৬</span>
            </div>
            <h4 className={styles.studentCardName}>{user?.name}</h4>
            <p className={styles.studentCardLocation}>{user?.location || 'মাস্কাট, ওমান'}</p>
          </div>

          <nav className={styles.navMenu}>
            <button
              type="button"
              className={`${styles.navItem} ${activeTab === 'overview' ? styles.activeNav : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <Sparkles size={18} />
              <span>ওভারভিউ</span>
            </button>

            <button
              type="button"
              className={`${styles.navItem} ${activeTab === 'courses' ? styles.activeNav : ''}`}
              onClick={() => setActiveTab('courses')}
            >
              <BookOpen size={18} />
              <span>আমার কোর্সসমূহ ({totalEnrolled})</span>
            </button>

            <button
              type="button"
              className={`${styles.navItem} ${activeTab === 'classroom' ? styles.activeNav : ''}`}
              onClick={() => setActiveTab('classroom')}
            >
              <PlayCircle size={18} />
              <span>ক্লাসরুম ও লেসন প্লেয়ার</span>
            </button>

            <button
              type="button"
              className={`${styles.navItem} ${activeTab === 'schedule' ? styles.activeNav : ''}`}
              onClick={() => setActiveTab('schedule')}
            >
              <Calendar size={18} />
              <span>লাইভ ক্লাস রুটিন</span>
            </button>

            <button
              type="button"
              className={`${styles.navItem} ${activeTab === 'certificates' ? styles.activeNav : ''}`}
              onClick={() => setActiveTab('certificates')}
            >
              <Award size={18} />
              <span>সার্টিফিকেট ও অর্জন</span>
            </button>

            <button
              type="button"
              className={`${styles.navItem} ${activeTab === 'profile' ? styles.activeNav : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              <User size={18} />
              <span>প্রোফাইল ও সেটিংস</span>
            </button>
          </nav>

          <div className={styles.supportBox}>
            <p className={styles.supportTitle}>জরুরি সহায়তা দরকার?</p>
            <p className={styles.supportSub}>যেকোনো সমস্যায় আমাদের সাপোর্ট টিমে নক করুন</p>
            <a
              href="https://wa.me/96890000000"
              target="_blank"
              rel="noreferrer"
              className={styles.supportBtn}
            >
              হোয়াটসঅ্যাপ সাপোর্ট
            </a>
          </div>
        </aside>

        {/* Content Area */}
        <main className={styles.contentArea}>
          {/* 1. OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className={styles.tabContent}>
              <div className={styles.welcomeBanner}>
                <div>
                  <h2 className={styles.welcomeHeading}>
                    স্বাগতম, {user?.name || 'শিক্ষার্থী'}! 🚀
                  </h2>
                  <p className={styles.welcomeSub}>
                    আজকের ক্লাস সম্পন্ন করে আপনার প্রবাস দক্ষতাকে আরও এক ধাপ এগিয়ে নিয়ে যান।
                  </p>
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setActiveTab('classroom')}
                >
                  আজকের ক্লাস শুরু করুন <ArrowRight size={16} />
                </button>
              </div>

              {/* Stats Grid */}
              <div className={styles.statsRow}>
                <div className={styles.statBox}>
                  <div className={styles.statIcon} style={{ background: '#EFF6FF', color: '#2563EB' }}>
                    <BookOpen size={22} />
                  </div>
                  <div>
                    <span className={styles.statNumber}>{totalEnrolled}টি</span>
                    <span className={styles.statLabel}>ভর্তি হওয়া কোর্স</span>
                  </div>
                </div>

                <div className={styles.statBox}>
                  <div className={styles.statIcon} style={{ background: '#ECFDF5', color: '#059669' }}>
                    <CheckCircle2 size={22} />
                  </div>
                  <div>
                    <span className={styles.statNumber}>{completedLessons.length}টি</span>
                    <span className={styles.statLabel}>সম্পন্ন লেসন</span>
                  </div>
                </div>

                <div className={styles.statBox}>
                  <div className={styles.statIcon} style={{ background: '#FEF2F2', color: '#E1212B' }}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <span className={styles.statNumber}>১৮.৫ ঘণ্টা</span>
                    <span className={styles.statLabel}>শেখার সময়কাল</span>
                  </div>
                </div>

                <div className={styles.statBox}>
                  <div className={styles.statIcon} style={{ background: '#FFFBEB', color: '#D97706' }}>
                    <Award size={22} />
                  </div>
                  <div>
                    <span className={styles.statNumber}>২টি</span>
                    <span className={styles.statLabel}>অর্জিত সার্টিফিকেট</span>
                  </div>
                </div>
              </div>

              {/* Continue Learning Feature Card */}
              <div className={styles.continueCard}>
                <div className={styles.continueHeader}>
                  <span className={styles.continueTag}>সর্বশেষ দেখা কোর্স</span>
                  <span className={styles.continueProgressText}>
                    {courseProgressPercent}% সম্পন্ন
                  </span>
                </div>

                <div className={styles.continueBody}>
                  <img
                    src={activeCourse.image}
                    alt={activeCourse.title}
                    className={styles.continueThumb}
                  />
                  <div className={styles.continueInfo}>
                    <h3 className={styles.continueTitle}>{activeCourse.title}</h3>
                    <p className={styles.continueSub}>
                      ইন্সট্রাক্টর: {activeCourse.instructorName} | চলমান লেসন:{' '}
                      {currentLesson?.title || 'লেসন ১'}
                    </p>

                    <div className={styles.progressBarWrapper}>
                      <div
                        className={styles.progressBarFill}
                        style={{ width: `${courseProgressPercent}%` }}
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setActiveTab('classroom')}
                  >
                    ক্লাস চালিয়ে যান <PlayCircle size={16} />
                  </button>
                </div>
              </div>

              {/* Quick Live Class Notification */}
              <div className={styles.liveNotice}>
                <div className={styles.liveNoticeLeft}>
                  <div className={styles.livePulse}>
                    <span className={styles.pulseDot} />
                    <strong>পরবর্তী লাইভ ক্লাস:</strong>
                  </div>
                  <p>
                    <strong>বিষয়:</strong> ওমানে নতুন শ্রম আইন ২০২৬ ও ভিসা নবায়ন সমাধান • শিক্ষক: মুসা ইমন
                  </p>
                  <span className={styles.liveTime}>
                    আগামীকাল রাত ৯:০০ টা (ওমান সময়) / রাত ১১:০০ টা (বাংলাদেশ সময়)
                  </span>
                </div>
                <button
                  type="button"
                  className={styles.liveJoinBtn}
                  onClick={() => setActiveTab('schedule')}
                >
                  সময়সূচি দেখুন <ArrowRight size={14} />
                </button>
              </div>

              {/* Enrolled Courses Grid Preview */}
              <div className={styles.sectionTitleRow}>
                <h3 className={styles.sectionHeading}>আপনার কোর্সসমূহ</h3>
                <button
                  type="button"
                  className={styles.seeAllBtn}
                  onClick={() => setActiveTab('courses')}
                >
                  সবগুলো দেখুন
                </button>
              </div>

              <div className={styles.coursesGrid}>
                {enrolledCourses.map((c) => (
                  <div key={c.id} className={styles.miniCourseCard}>
                    <img src={c.image} alt={c.title} className={styles.miniCourseThumb} />
                    <div className={styles.miniCourseContent}>
                      <h4 className={styles.miniCourseTitle}>{c.title}</h4>
                      <p className={styles.miniCourseInst}>{c.instructorName}</p>
                      <button
                        type="button"
                        className={styles.miniPlayBtn}
                        onClick={() => {
                          setSelectedCourseId(c.id);
                          setActiveTab('classroom');
                        }}
                      >
                        ক্লাসরুমে যান <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. MY COURSES TAB */}
          {activeTab === 'courses' && (
            <div className={styles.tabContent}>
              <div className={styles.contentHeader}>
                <div>
                  <h2 className={styles.contentTitle}>আমার এনরোল্ড কোর্সসমূহ</h2>
                  <p className={styles.contentSub}>
                    আপনি এই কোর্সগুলোতে সক্রিয়ভাবে ভর্তি আছেন। যেকোনো সময় ক্লাস শুরু করুন।
                  </p>
                </div>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={onBackToHome}
                >
                  আরও কোর্স খুঁজুন
                </button>
              </div>

              <div className={styles.enrolledList}>
                {enrolledCourses.map((course) => {
                  const lessons = course.modules.flatMap((m) => m.lessons);
                  const completedInThis = lessons.filter((l) =>
                    completedLessons.includes(l.id)
                  ).length;
                  const percent = lessons.length
                    ? Math.round((completedInThis / lessons.length) * 100)
                    : 0;

                  return (
                    <div key={course.id} className={styles.enrolledRowCard}>
                      <img
                        src={course.image}
                        alt={course.title}
                        className={styles.rowThumb}
                      />
                      <div className={styles.rowMain}>
                        <div className={styles.rowTop}>
                          <span
                            className={styles.rowBadge}
                            style={{ backgroundColor: course.badgeColor }}
                          >
                            {course.badge}
                          </span>
                          <span className={styles.rowLessonsCount}>
                            {completedInThis}/{lessons.length} সম্পন্ন
                          </span>
                        </div>
                        <h3 className={styles.rowTitle}>{course.title}</h3>
                        <p className={styles.rowSub}>{course.subtitle}</p>

                        <div className={styles.progressBarWrapper}>
                          <div
                            className={styles.progressBarFill}
                            style={{ width: `${percent}%` }}
                          />
                        </div>
                        <span className={styles.percentText}>{percent}% সম্পন্ন</span>
                      </div>

                      <div className={styles.rowActions}>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => {
                            setSelectedCourseId(course.id);
                            setActiveTab('classroom');
                          }}
                        >
                          ক্লাসরুম শুরু <PlayCircle size={16} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 3. CLASSROOM & VIDEO PLAYER TAB */}
          {activeTab === 'classroom' && (
            <div className={styles.tabContent}>
              {/* Course Selector Bar */}
              <div className={styles.classroomHeaderBar}>
                <div className={styles.selectorGroup}>
                  <label>বর্তমান কোর্স পরিবর্তন:</label>
                  <select
                    value={selectedCourseId}
                    onChange={(e) => {
                      setSelectedCourseId(e.target.value);
                      const target = coursesData.find((c) => c.id === e.target.value);
                      if (target && target.modules[0]?.lessons[0]) {
                        setActiveLessonId(target.modules[0].lessons[0].id);
                      }
                    }}
                    className={styles.courseSelect}
                  >
                    {coursesData.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.instructorTag}>
                  ইন্সট্রাক্টর: <strong>{activeCourse.instructorName}</strong>
                </div>
              </div>

              {/* Player and Playlist Container */}
              <div className={styles.playerContainer}>
                {/* Left: Video Player Mockup */}
                <div className={styles.videoPlayerArea}>
                  <div className={styles.videoScreen}>
                    {/* Visual Player Mockup */}
                    <div className={styles.videoOverlayMock}>
                      <div className={styles.screenCenter}>
                        <div className={styles.playButtonLarge}>
                          <PlayCircle size={64} fill="#E1212B" stroke="#ffffff" />
                        </div>
                        <h4 className={styles.videoNowPlaying}>
                          {currentLesson?.title || 'লেসন ১: ওমানে প্রাথমিক সালাম ও পরিচিতি'}
                        </h4>
                        <span className={styles.videoInstructor}>
                          ইন্সট্রাক্টর: {activeCourse.instructorName}
                        </span>
                      </div>

                      {/* Video Bottom Bar */}
                      <div className={styles.videoControlBar}>
                        <div className={styles.controlLeft}>
                          <PlayCircle size={20} />
                          <span>04:12 / {currentLesson?.duration || '20:00'}</span>
                        </div>
                        <div className={styles.controlTimeline}>
                          <div className={styles.timelineProgress} style={{ width: '28%' }} />
                        </div>
                        <div className={styles.controlRight}>
                          <span className={styles.qualityBadge}>1080p HD</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Under Video Actions */}
                  <div className={styles.lessonMetaBar}>
                    <div>
                      <h3 className={styles.lessonMetaTitle}>
                        {currentLesson?.title || 'লেসন পরিচিতি'}
                      </h3>
                      <p className={styles.lessonMetaSub}>
                        {currentLesson?.summary || 'এই লেসনে শেখানো হয়েছে বিস্তারিত বিষয়সমূহ।'}
                      </p>
                    </div>

                    <button
                      type="button"
                      className={`${styles.markDoneBtn} ${
                        completedLessons.includes(activeLessonId) ? styles.doneActive : ''
                      }`}
                      onClick={() => toggleLessonComplete(activeLessonId)}
                    >
                      {completedLessons.includes(activeLessonId) ? (
                        <>
                          <Check size={18} /> সম্পন্ন হয়েছে
                        </>
                      ) : (
                        <>
                          <CheckCircle2 size={18} /> সম্পন্ন হিসেবে চিহ্নিত করুন
                        </>
                      )}
                    </button>
                  </div>

                  {/* Lesson Resources & Notes Tabs */}
                  <div className={styles.tabsSection}>
                    <div className={styles.resourceCard}>
                      <h4>📥 এই ক্লাসের শিক্ষণীয় রিসোর্স ও পিডিএফ</h4>
                      <p>
                        ক্লাসের সাথে যুক্ত শিট ডাউনলোড করে মোবাইলে সেভ করে রাখুন এবং প্র্যাকটিস করুন।
                      </p>
                      <div className={styles.resourceButtons}>
                        <button
                          type="button"
                          className={styles.dlBtn}
                          onClick={() => alert('পিডিএফ লেকচার শিট ডাউনলোড শুরু হয়েছে!')}
                        >
                          <Download size={15} /> লেকচার শিট (PDF)
                        </button>
                        <button
                          type="button"
                          className={styles.dlBtn}
                          onClick={() => alert('অডিও প্র্যাকটিস ফাইল ডাউনলোড শুরু হয়েছে!')}
                        >
                          <Download size={15} /> উচ্চারণ অডিও ফাইল (MP3)
                        </button>
                      </div>
                    </div>

                    {/* Teacher Q&A Box */}
                    <div className={styles.qaCard}>
                      <h4>
                        <MessageSquare size={16} /> সরাসরি শিক্ষকের কাছে প্রশ্ন করুন
                      </h4>
                      <form onSubmit={handlePostQuestion} className={styles.qaForm}>
                        <input
                          type="text"
                          placeholder="আপনার কোনো জিজ্ঞাসা থাকলে এখানে লিখুন..."
                          value={qaInput}
                          onChange={(e) => setQaInput(e.target.value)}
                          className={styles.qaInput}
                        />
                        <button type="submit" className="btn btn-primary">
                          প্রশ্ন পাঠান
                        </button>
                      </form>

                      <div className={styles.qaList}>
                        {questions.map((q) => (
                          <div key={q.id} className={styles.qaItem}>
                            <div className={styles.qaAuthorRow}>
                              <strong>{q.author}</strong>
                              <span className={styles.qaTime}>{q.time}</span>
                            </div>
                            <p className={styles.qaQuestion}>"{q.question}"</p>
                            <div className={styles.qaReply}>
                              <strong>উত্তর:</strong> {q.reply}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Modules & Lessons Playlist */}
                <div className={styles.playlistSidebar}>
                  <div className={styles.playlistHeader}>
                    <h4>কোর্স কারিকুলাম ও লেসনসমূহ</h4>
                    <span className={styles.playlistProgress}>
                      {courseCompletedCount}/{allLessonsInCourse.length} সম্পন্ন
                    </span>
                  </div>

                  <div className={styles.modulesScroll}>
                    {activeCourse.modules.map((module) => (
                      <div key={module.id} className={styles.moduleBlock}>
                        <div className={styles.moduleBlockTitle}>{module.title}</div>
                        <div className={styles.lessonsGroup}>
                          {module.lessons.map((lesson) => {
                            const isCurrent = lesson.id === activeLessonId;
                            const isDone = completedLessons.includes(lesson.id);

                            return (
                              <button
                                key={lesson.id}
                                type="button"
                                className={`${styles.lessonBtn} ${isCurrent ? styles.activeLessonBtn : ''}`}
                                onClick={() => setActiveLessonId(lesson.id)}
                              >
                                <div className={styles.lessonBtnLeft}>
                                  <span
                                    className={`${styles.checkCircle} ${
                                      isDone ? styles.checkCircleDone : ''
                                    }`}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleLessonComplete(lesson.id);
                                    }}
                                  >
                                    {isDone && <Check size={12} />}
                                  </span>
                                  <span className={styles.lessonBtnTitle}>{lesson.title}</span>
                                </div>
                                <span className={styles.lessonBtnDuration}>{lesson.duration}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4. LIVE SCHEDULE TAB */}
          {activeTab === 'schedule' && (
            <div className={styles.tabContent}>
              <div className={styles.contentHeader}>
                <div>
                  <h2 className={styles.contentTitle}>আসন্ন লাইভ ক্লাস রুটিন</h2>
                  <p className={styles.contentSub}>
                    সরাসরি শিক্ষকদের সাথে জুমে / গুগল মিটে লাইভ ইন্টারঅ্যাক্টিভ ক্লাস।
                  </p>
                </div>
              </div>

              <div className={styles.scheduleList}>
                <div className={styles.scheduleCard}>
                  <div className={styles.scheduleBadgeLive}>আগামীকাল লাইভ</div>
                  <div className={styles.scheduleMain}>
                    <div className={styles.scheduleTimeBadge}>
                      <Clock size={16} /> রাত ০৯:০০ টা (ওমান) / রাত ১১:০০ টা (বিডি)
                    </div>
                    <h3 className={styles.scheduleTitle}>
                      ওমান নতুন শ্রম আইন ২০২৬, বেতন ও ছুটি নিয়ে সরাসরি প্রশ্নোত্তর
                    </h3>
                    <p className={styles.scheduleMentor}>শিক্ষক: মুসা ইমন (Musa Emon)</p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => alert('লাইভ ক্লাসের লিংক: https://meet.google.com/probash-academy (ক্লাসের ১৫ মিনিট আগে সক্রিয় হবে)')}
                  >
                    <Video size={16} /> ক্লাসে যুক্ত হন
                  </button>
                </div>

                <div className={styles.scheduleCard}>
                  <div className={styles.scheduleBadgeUpcoming}>শুক্রবার</div>
                  <div className={styles.scheduleMain}>
                    <div className={styles.scheduleTimeBadge}>
                      <Clock size={16} /> বিকাল ০৪:৩০ টা (ওমান) / সন্ধ্যা ০৬:৩০ টা (বিডি)
                    </div>
                    <h3 className={styles.scheduleTitle}>
                      আরবি স্পিকিং লাইভ প্র্যাকটিস: বাজার ও হাসপাতালে কথা বলা
                    </h3>
                    <p className={styles.scheduleMentor}>শিক্ষক: ওস্তাদ আব্দুল্লাহ আল-মামুন</p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => alert('রিমাইন্ডার সেট করা হয়েছে!')}
                  >
                    রিমাইন্ডার সেট করুন
                  </button>
                </div>

                <div className={styles.scheduleCard}>
                  <div className={styles.scheduleBadgeUpcoming}>রবিবার</div>
                  <div className={styles.scheduleMain}>
                    <div className={styles.scheduleTimeBadge}>
                      <Clock size={16} /> রাত ০৮:৩০ টা (ওমান) / রাত ১০:৩০ টা (বিডি)
                    </div>
                    <h3 className={styles.scheduleTitle}>
                      মোবাইলে ক্যাপকাট দিয়ে ফেসবুক রিলস এডিটিং ও সাউন্ড ডিজাইন
                    </h3>
                    <p className={styles.scheduleMentor}>শিক্ষক: ইঞ্জিঃ সাইদুর রহমান</p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => alert('রিমাইন্ডার সেট করা হয়েছে!')}
                  >
                    রিমাইন্ডার সেট করুন
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 5. CERTIFICATES TAB */}
          {activeTab === 'certificates' && (
            <div className={styles.tabContent}>
              <div className={styles.contentHeader}>
                <div>
                  <h2 className={styles.contentTitle}>আপনার অর্জিত সার্টিফিকেট</h2>
                  <p className={styles.contentSub}>
                    কোর্স সম্পন্ন করার পর ডিজিটাল সার্টিফিকেট সরাসরি ডাউনলোড ও ভেরিফাই করতে পারবেন।
                  </p>
                </div>
              </div>

              <div className={styles.certificateGrid}>
                <div className={styles.certCard}>
                  <div className={styles.certPreview}>
                    <div className={styles.certBorder}>
                      <Award size={40} color="#E1212B" />
                      <h4>Certificate of Completion</h4>
                      <p className={styles.certName}>{user?.name || 'মোঃ তানভীর আহমেদ'}</p>
                      <p className={styles.certCourse}>ওমান গাইড A to Z</p>
                      <span className={styles.certId}>ID: PA-CERT-894101</span>
                    </div>
                  </div>
                  <div className={styles.certFooter}>
                    <div>
                      <strong>ওমান গাইড A to Z</strong>
                      <p>ইস্যু তারিখ: ১০ সেপ্টেম্বর ২০২৬</p>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => alert('আপনার সার্টিফিকেট পিডিএফ ফরম্যাটে ডাউনলোড সম্পন্ন হয়েছে!')}
                    >
                      <Download size={16} /> ডাউনলোড
                    </button>
                  </div>
                </div>

                <div className={styles.certCard}>
                  <div className={styles.certPreview}>
                    <div className={styles.certBorder}>
                      <Award size={40} color="#0A1B3B" />
                      <h4>Certificate of Completion</h4>
                      <p className={styles.certName}>{user?.name || 'মোঃ তানভীর আহমেদ'}</p>
                      <p className={styles.certCourse}>ওমানের ভিসা A to Z</p>
                      <span className={styles.certId}>ID: PA-CERT-894102</span>
                    </div>
                  </div>
                  <div className={styles.certFooter}>
                    <div>
                      <strong>ওমানের ভিসা A to Z</strong>
                      <p>ইস্যু তারিখ: ২৫ আগস্ট ২০২৬</p>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => alert('আপনার সার্টিফিকেট পিডিএফ ফরম্যাটে ডাউনলোড সম্পন্ন হয়েছে!')}
                    >
                      <Download size={16} /> ডাউনলোড
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 6. PROFILE TAB */}
          {activeTab === 'profile' && (
            <div className={styles.tabContent}>
              <div className={styles.contentHeader}>
                <div>
                  <h2 className={styles.contentTitle}>শিক্ষার্থী প্রোফাইল</h2>
                  <p className={styles.contentSub}>আপনার ব্যক্তিগত তথ্য ও যোগাযোগ নম্বর</p>
                </div>
              </div>

              <div className={styles.profileBox}>
                <div className={styles.profileTop}>
                  <img
                    src={user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop'}
                    alt={user?.name}
                    className={styles.profileLargeImg}
                  />
                  <div>
                    <h3 className={styles.profileName}>{user?.name}</h3>
                    <p className={styles.profileIdBadge}>স্টুডেন্ট আইডি: {user?.studentId}</p>
                    <span className={styles.profileJoined}>যোগদান: {user?.joinedDate}</span>
                  </div>
                </div>

                <div className={styles.profileFields}>
                  <div className={styles.fieldItem}>
                    <label>পূর্ণ নাম</label>
                    <input type="text" defaultValue={user?.name} className={styles.fieldInput} />
                  </div>
                  <div className={styles.fieldItem}>
                    <label>ইমেইল এড্রেস</label>
                    <input type="email" defaultValue={user?.email} className={styles.fieldInput} />
                  </div>
                  <div className={styles.fieldItem}>
                    <label>মোবাইল নম্বর (ওমান/বাংলাদেশ)</label>
                    <input type="text" defaultValue={user?.phone} className={styles.fieldInput} />
                  </div>
                  <div className={styles.fieldItem}>
                    <label>বর্তমান অবস্থান</label>
                    <input type="text" defaultValue={user?.location} className={styles.fieldInput} />
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => alert('প্রোফাইল তথ্য সফলভাবে আপডেট হয়েছে!')}
                >
                  তথ্য সংরক্ষণ করুন
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
