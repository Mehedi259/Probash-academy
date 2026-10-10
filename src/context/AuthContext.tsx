import React, { createContext, useContext, useState, useEffect } from 'react';

export interface StudentUser {
  id: string;
  studentId: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  location: string;
  joinedDate: string;
  enrolledCourseIds: string[];
}

interface AuthContextType {
  user: StudentUser | null;
  isLoggedIn: boolean;
  login: (email: string, pass: string) => boolean;
  demoLogin: () => void;
  register: (name: string, email: string, phone: string, pass: string) => boolean;
  logout: () => void;
  enrollCourse: (courseId: string) => void;
  completedLessons: string[];
  toggleLessonComplete: (lessonId: string) => void;
}

const defaultDemoUser: StudentUser = {
  id: 'usr-tanvir-101',
  studentId: 'PA-2026-8941',
  name: 'মোঃ তানভীর আহমেদ',
  email: 'tanvir.oman@gmail.com',
  phone: '+968 9123 4567',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=300&auto=format&fit=crop',
  location: 'মাস্কাট, ওমান (Muscat, Oman)',
  joinedDate: 'মার্চ ২০২৬',
  enrolledCourseIds: [
    'arabic-language',
    'oman-visa-atoz',
    'oman-guide-atoz',
    'content-creation-video-editing'
  ]
};

const defaultCompletedLessons = [
  'ar-1', 'ar-2', 'ar-3',
  'ov-1', 'ov-2',
  'og-1', 'og-2',
  'cc-1'
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<StudentUser | null>(() => {
    const saved = localStorage.getItem('probash_academy_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return null;
      }
    }
    // Return default logged in demo user for immediate experience if preferred, or null
    // Let's check: users love seeing demo login easily available or logged in
    return null;
  });

  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    const saved = localStorage.getItem('probash_academy_completed_lessons');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return defaultCompletedLessons;
      }
    }
    return defaultCompletedLessons;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('probash_academy_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('probash_academy_user');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('probash_academy_completed_lessons', JSON.stringify(completedLessons));
  }, [completedLessons]);

  const login = (email: string, _pass: string): boolean => {
    const loggedUser: StudentUser = {
      ...defaultDemoUser,
      email: email || defaultDemoUser.email,
      name: email.split('@')[0] || defaultDemoUser.name
    };
    setUser(loggedUser);
    return true;
  };

  const demoLogin = () => {
    setUser(defaultDemoUser);
  };

  const register = (name: string, email: string, phone: string, _pass: string): boolean => {
    const newUser: StudentUser = {
      id: `usr-${Date.now()}`,
      studentId: `PA-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      name: name || 'নতুন শিক্ষার্থী',
      email: email || 'student@probashacademy.com',
      phone: phone || '+968 9000 0000',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=300&auto=format&fit=crop',
      location: 'ওমান (Oman)',
      joinedDate: 'আজই জয়েন করেছেন',
      enrolledCourseIds: ['arabic-language', 'oman-guide-atoz']
    };
    setUser(newUser);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  const enrollCourse = (courseId: string) => {
    if (!user) {
      // If not logged in, auto login demo user and enroll
      setUser({
        ...defaultDemoUser,
        enrolledCourseIds: Array.from(new Set([...defaultDemoUser.enrolledCourseIds, courseId]))
      });
      return;
    }

    if (!user.enrolledCourseIds.includes(courseId)) {
      setUser({
        ...user,
        enrolledCourseIds: [...user.enrolledCourseIds, courseId]
      });
    }
  };

  const toggleLessonComplete = (lessonId: string) => {
    setCompletedLessons(prev => {
      if (prev.includes(lessonId)) {
        return prev.filter(id => id !== lessonId);
      } else {
        return [...prev, lessonId];
      }
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        login,
        demoLogin,
        register,
        logout,
        enrollCourse,
        completedLessons,
        toggleLessonComplete
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
