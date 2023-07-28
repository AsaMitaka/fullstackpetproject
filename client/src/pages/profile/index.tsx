import Post from '../../components/post';
import styles from './profile.module.scss';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileHeader}>
        <img src="" alt="" className={styles.profileHeaderImg} />
        <p className={styles.profileHeaderUsername}>Username</p>
        <button className={styles.editBtn}>Edit</button>
      </div>
      <div className={styles.profileBlock}>
        {[...new Array(3)].map((_, index) => (
          <Post key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
