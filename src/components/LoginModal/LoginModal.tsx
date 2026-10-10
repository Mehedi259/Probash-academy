import React, { useState } from 'react';
import { X, Mail, Lock, User, Phone, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import styles from './LoginModal.module.css';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess?: () => void;
  initialTab?: 'login' | 'register';
}

const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
  initialTab = 'login'
}) => {
  const { login, register, demoLogin } = useAuth();
  const [tab, setTab] = useState<'login' | 'register'>(initialTab);

  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('অনুগ্রহ করে ইমেইল এবং পাসওয়ার্ড প্রদান করুন');
      return;
    }
    setError('');
    login(email, password);
    setSuccessMsg('সফলভাবে লগইন হয়েছে! ড্যাশবোর্ডে নিয়ে যাওয়া হচ্ছে...');
    setTimeout(() => {
      onClose();
      if (onLoginSuccess) onLoginSuccess();
    }, 600);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !password) {
      setError('অনুগ্রহ করে সব তথ্য সঠিকভাবে পূরণ করুন');
      return;
    }
    setError('');
    register(name, email, phone, password);
    setSuccessMsg('অ্যাকাউন্ট তৈরি সফল হয়েছে! ড্যাশবোর্ডে স্বাগতম...');
    setTimeout(() => {
      onClose();
      if (onLoginSuccess) onLoginSuccess();
    }, 600);
  };

  const handleQuickDemo = () => {
    setError('');
    demoLogin();
    setSuccessMsg('ডেমো স্টুডেন্ট হিসেবে সফলভাবে লগইন করা হয়েছে!');
    setTimeout(() => {
      onClose();
      if (onLoginSuccess) onLoginSuccess();
    }, 500);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className={styles.header}>
          <div className={styles.logoBadge}>
            <span className={styles.logoInitial}>P</span>
            <div>
              <h3 className={styles.modalTitle}>Hello Probash Academy</h3>
              <span className={styles.modalSub}>প্রবাসী শিক্ষার্থীদের লার্নিং পোর্টাল</span>
            </div>
          </div>
        </div>

        {/* Quick Demo Login Banner */}
        <div className={styles.demoBanner}>
          <div className={styles.demoContent}>
            <div className={styles.demoHeader}>
              <Sparkles size={18} className={styles.sparkleIcon} />
              <strong>দ্রুত ড্যাশবোর্ড দেখার সুবিধা:</strong>
            </div>
            <p className={styles.demoText}>কোন ফর্ম পূরণ ছাড়াই সরাসরি ডেমো স্টুডেন্ট হিসেবে ড্যাশবোর্ড এক্সপ্লোর করুন।</p>
          </div>
          <button type="button" className={styles.demoBtn} onClick={handleQuickDemo}>
            ১-ক্লিকে ডেমো লগইন <ArrowRight size={16} />
          </button>
        </div>

        {/* Tabs */}
        <div className={styles.tabContainer}>
          <button
            type="button"
            className={`${styles.tabBtn} ${tab === 'login' ? styles.activeTab : ''}`}
            onClick={() => { setTab('login'); setError(''); }}
          >
            ছাত্র লগইন
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${tab === 'register' ? styles.activeTab : ''}`}
            onClick={() => { setTab('register'); setError(''); }}
          >
            নতুন রেজিস্ট্রেশন
          </button>
        </div>

        {error && <div className={styles.errorAlert}>{error}</div>}
        {successMsg && (
          <div className={styles.successAlert}>
            <CheckCircle2 size={16} /> {successMsg}
          </div>
        )}

        {tab === 'login' ? (
          <form className={styles.form} onSubmit={handleLogin}>
            <div className={styles.inputGroup}>
              <label>ইমেইল অথবা মোবাইল নম্বর</label>
              <div className={styles.inputWrapper}>
                <Mail size={18} className={styles.inputIcon} />
                <input
                  type="text"
                  placeholder="tanvir.oman@gmail.com বা +968 9123 4567"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.labelRow}>
                <label>পাসওয়ার্ড</label>
                <a href="#forgot" onClick={(e) => { e.preventDefault(); alert('ডেমো পাসওয়ার্ড: যে কোনো কিছু টাইপ করুন অথবা ডেমো লগইন বাটনে ক্লিক করুন'); }} className={styles.forgotLink}>
                  পাসওয়ার্ড ভুলে গেছেন?
                </a>
              </div>
              <div className={styles.inputWrapper}>
                <Lock size={18} className={styles.inputIcon} />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
              লগইন করুন ও ড্যাশবোর্ডে যান
            </button>
          </form>
        ) : (
          <form className={styles.form} onSubmit={handleRegister}>
            <div className={styles.inputGroup}>
              <label>আপনার পূর্ণ নাম</label>
              <div className={styles.inputWrapper}>
                <User size={18} className={styles.inputIcon} />
                <input
                  type="text"
                  placeholder="যেমন: মোঃ কামরুল হাসান"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>ইমেইল এড্রেস</label>
              <div className={styles.inputWrapper}>
                <Mail size={18} className={styles.inputIcon} />
                <input
                  type="email"
                  placeholder="kamrul@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>ওমান বা বাংলাদেশ মোবাইল নম্বর</label>
              <div className={styles.inputWrapper}>
                <Phone size={18} className={styles.inputIcon} />
                <input
                  type="tel"
                  placeholder="+968 9xxx xxxx বা +880 1xxx xxxxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>নতুন পাসওয়ার্ড তৈরি করুন</label>
              <div className={styles.inputWrapper}>
                <Lock size={18} className={styles.inputIcon} />
                <input
                  type="password"
                  placeholder="কমপক্ষে ৬ অক্ষরের পাসওয়ার্ড"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
              রেজিস্ট্রেশন সম্পূর্ণ করুন
            </button>
          </form>
        )}

        <div className={styles.footerNote}>
          🔒 আপনার তথ্য সম্পূর্ণ নিরাপদ। Hello Probash Academy শিক্ষার্থীদের গোপনীয়তা রক্ষা করে।
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
