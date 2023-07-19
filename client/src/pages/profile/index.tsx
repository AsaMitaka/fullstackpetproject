import { Post } from '../../component';
import styles from './profile.module.scss';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profile__header}>
        <div className={styles.block}>
          <img src="" alt="" className={styles.userimg} />
          <p className={styles.username}>Username</p>
        </div>
        <button className={styles.edit}>Edit</button>
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
