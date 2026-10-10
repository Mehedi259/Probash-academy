import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Categories from './components/Categories/Categories';
import Courses from './components/Courses/Courses';
import Instructors from './components/Instructors/Instructors';
import Features from './components/Features/Features';
import Journey from './components/Journey/Journey';
import Articles from './components/Articles/Articles';
import Footer from './components/Footer/Footer';
import LoginModal from './components/LoginModal/LoginModal';
import StudentDashboard from './components/Dashboard/StudentDashboard';
import { AuthProvider, useAuth } from './context/AuthContext';
import './index.css';

function MainApp() {
  const { isLoggedIn, demoLogin } = useAuth();
  const [currentView, setCurrentView] = useState<'home' | 'dashboard'>(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#dashboard') {
      return 'dashboard';
    }
    return 'home';
  });
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<string | null>(null);
  const [selectedCourseForClassroom, setSelectedCourseForClassroom] = useState<string | null>(null);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#dashboard') {
        setCurrentView('dashboard');
      } else if (window.location.hash === '#login') {
        setIsLoginModalOpen(true);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleGoToDashboard = (courseId?: string) => {
    if (courseId) {
      setSelectedCourseForClassroom(courseId);
    }
    if (!isLoggedIn) {
      demoLogin(); // Auto login as demo student if not logged in
    }
    setCurrentView('dashboard');
    window.location.hash = 'dashboard';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    window.location.hash = 'home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectInstructorCourse = (courseId: string) => {
    setSelectedCourseForModal(courseId);
    const element = document.getElementById('courses');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (currentView === 'dashboard') {
    return (
      <StudentDashboard
        onBackToHome={handleBackToHome}
        initialCourseId={selectedCourseForClassroom}
      />
    );
  }

  return (
    <div className="App">
      <Header
        onOpenLogin={() => setIsLoginModalOpen(true)}
        onGoToDashboard={() => handleGoToDashboard()}
      />
      <main>
        <div id="home"><Hero /></div>
        <div id="courses">
          <Courses
            onGoToDashboard={handleGoToDashboard}
            onOpenLogin={() => setIsLoginModalOpen(true)}
            selectedCourseId={selectedCourseForModal}
          />
        </div>
        <div id="instructors">
          <Instructors onSelectCourse={handleSelectInstructorCourse} />
        </div>
        <div id="oman-guide"><Categories /></div>
        <div id="about-us"><Features /></div>
        <div id="skills"><Journey /></div>
        <div id="blog"><Articles /></div>
      </main>
      <Footer
        onOpenLogin={() => setIsLoginModalOpen(true)}
        onGoToDashboard={() => handleGoToDashboard()}
        onSelectCourse={handleSelectInstructorCourse}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={() => handleGoToDashboard()}
      />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}

export default App;
