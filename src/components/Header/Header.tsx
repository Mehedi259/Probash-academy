import { Search, LogIn, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import styles from './Header.module.css';

interface HeaderProps {
  onOpenLogin: () => void;
  onGoToDashboard: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenLogin, onGoToDashboard }) => {
  const { user, isLoggedIn, logout } = useAuth();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <a href="#home" className={styles.logo}>
          <div className={styles.logoBadge}>P</div>
          <div>
            <h1 className={styles.logoTitle}>Hello Probash</h1>
            <span className={styles.logoSubtitle}>ACADEMY</span>
            <span className={styles.logoTags}>LANGUAGE • SKILLS • LEARNING</span>
          </div>
        </a>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}><a href="#home" className={`${styles.navLink} ${styles.active}`}>হোম</a></li>
            <li className={styles.navItem}><a href="#courses" className={styles.navLink}>কোর্সসমূহ</a></li>
            <li className={styles.navItem}><a href="#instructors" className={styles.navLink}>শিক্ষক পরিচিতি</a></li>
            <li className={styles.navItem}><a href="#oman-guide" className={styles.navLink}>ওমান গাইড</a></li>
            <li className={styles.navItem}><a href="#skills" className={styles.navLink}>স্কিলস</a></li>
            <li className={styles.navItem}><a href="#blog" className={styles.navLink}>ব্লগ ও আপডেট</a></li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <div className={styles.searchBar}>
            <Search size={16} className={styles.searchIcon} />
            <input type="text" placeholder="কোর্স খুঁজুন..." className={styles.searchInput} />
          </div>

          {isLoggedIn ? (
            <div className={styles.userControls}>
              <button
                type="button"
                className={`btn btn-primary ${styles.dashboardBtn}`}
                onClick={onGoToDashboard}
              >
                <LayoutDashboard size={16} />
                <span>ড্যাশবোর্ড</span>
              </button>

              <div className={styles.profileChip} onClick={onGoToDashboard} title="ড্যাশবোর্ডে প্রবেশ করুন">
                <img
                  src={user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop'}
                  alt={user?.name}
                  className={styles.profileChipImg}
                />
                <span className={styles.profileChipName}>{user?.name?.split(' ')[0]}</span>
              </div>

              <button
                type="button"
                className={styles.logoutSmall}
                onClick={logout}
                title="লগআউট"
              >
                লগআউট
              </button>
            </div>
          ) : (
            <div className={styles.authButtons}>
              <button
                type="button"
                className={`btn btn-outline ${styles.loginBtn}`}
                onClick={onOpenLogin}
              >
                <LogIn size={15} /> লগইন
              </button>
              <a href="#courses" className="btn btn-primary">
                কোর্স শুরু করুন
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
