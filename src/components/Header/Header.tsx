import React from 'react';
import { Search } from 'lucide-react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <img src="https://ui-avatars.com/api/?name=P&background=0D8ABC&color=fff&rounded=true&bold=true" alt="Logo" className={styles.logoImg} style={{width: '40px', height: '40px', background: 'transparent'}} />
          <div>
            <h1 className={styles.logoTitle}>Hello Probash</h1>
            <span className={styles.logoSubtitle}>ACADEMY</span>
            <span className={styles.logoTags}>LANGUAGE • SKILLS • LEARNING</span>
          </div>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}><a href="#" className={`${styles.navLink} ${styles.active}`}>Home</a></li>
            <li className={styles.navItem}><a href="#" className={styles.navLink}>Courses</a></li>
            <li className={styles.navItem}><a href="#" className={styles.navLink}>Oman Guide</a></li>
            <li className={styles.navItem}><a href="#" className={styles.navLink}>Skills</a></li>
            <li className={styles.navItem}><a href="#" className={styles.navLink}>Blog</a></li>
            <li className={styles.navItem}><a href="#" className={styles.navLink}>About Us</a></li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <div className={styles.searchBar}>
            <Search size={18} className={styles.searchIcon} />
            <input type="text" placeholder="Search courses..." className={styles.searchInput} />
          </div>
          <button className="btn btn-outline">Login</button>
          <button className="btn btn-primary">Start Learning</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
