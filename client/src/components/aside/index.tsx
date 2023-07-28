import { Link } from 'react-router-dom';
import styles from './aside.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';

const Aside = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    window.localStorage.removeItem('token');
    dispatch(logout());
  };

  return (
    <aside className={styles.aside}>
      <div className={styles.asideBlock}>
        <p className={styles.asideBlockHeader}>Menu</p>
        <Link to="/" className={styles.link}>
          Main
        </Link>
        <Link to="/createpost" className={styles.link}>
          Create Post
        </Link>
      </div>
      <div className={styles.asideBlock}>
        {isAuth ? (
          <>
            <p className={styles.asideBlockHeader}>Profile</p>
            <Link to="/profile" className={styles.profile}>
              <div className={styles.profileleft}>
                <img src="" alt="" className={styles.profileimg} />
              </div>
              <div className={styles.profileright}>
                <p>Username</p>
                <p>Email</p>
              </div>
            </Link>
            <div className={styles.logout} onClick={handleLogout}>
              Logout
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className={styles.login}>
              Login
            </Link>
            <Link to="/signup" className={styles.signup}>
              Signup
            </Link>
          </>
        )}
      </div>
    </aside>
  );
};

export default Aside;
