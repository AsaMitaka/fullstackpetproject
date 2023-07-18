import { Link } from 'react-router-dom';
import styles from './header.module.scss';

const Header = ({ setActive }) => {
  return (
    <header className={styles.header}>
      <ul className={styles.header__list}>
        <div>
          <Link to="/" className={styles.header__link}>
            Main
          </Link>
          <button type="button" onClick={() => setActive(true)}>
            Create Post
          </button>
        </div>
        <Link to="/profile" className={styles.header__link}>
          Profile
        </Link>
      </ul>
    </header>
  );
};

export default Header;
