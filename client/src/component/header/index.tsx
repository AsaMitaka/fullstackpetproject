import { Link } from 'react-router-dom';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.header__list}>
        <Link to="/" className={styles.header__link}>
          Main
        </Link>
        <Link to="/profile" className={styles.header__link}>
          Profile
        </Link>
      </ul>
    </header>
  );
};

export default Header;
