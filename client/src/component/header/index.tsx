import { Link, useLocation } from 'react-router-dom';
import styles from './header.module.scss';

const Header = ({ setActive }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <header className={styles.header}>
      <ul className={styles.header__list}>
        <div className={styles.left}>
          <Link to="/" className={styles.header__link}>
            Main
          </Link>
          {pathname === '/' && (
            <button type="button" className={styles.header__btn} onClick={() => setActive(true)}>
              Create Post
            </button>
          )}
        </div>
        {pathname !== '/profile' && (
          <Link to="/profile" className={styles.header__link}>
            Profile
          </Link>
        )}
      </ul>
    </header>
  );
};

export default Header;
