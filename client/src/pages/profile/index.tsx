import { useDispatch } from 'react-redux';
import { Post } from '../../component';
import styles from './profile.module.scss';
import { logoutUser } from '../../redux/slices/authSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={styles.profile}>
      <div className={styles.profile__header}>
        <div className={styles.block}>
          <img src="" alt="" className={styles.userimg} />
          <p className={styles.username}>Username</p>
        </div>
        <div>
          <button className={styles.edit}>Edit</button>
          <button className={styles.logout} onClick={handleLogout}>
            Logout
          </button>
        </div>
        <div className={styles.tabs}>
          <li className={styles.tabs__activeli}>Posts</li>
          <li className={styles.tabs__li}>Likes</li>
        </div>
      </div>
      <div className={styles.profile__posts}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Profile;
