import { useDispatch, useSelector } from 'react-redux';
import { Post } from '../../component';
import { useNavigate } from 'react-router-dom';
import styles from './profile.module.scss';
import { logoutUser } from '../../redux/slices/authSlice';
import { fetchMyPost } from '../../redux/slices/postSlice';
import { useEffect } from 'react';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector((state) => state.post.posts);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(fetchMyPost(user._id));
  }, []);

  const handleLogout = () => {
    dispatch(logoutUser());
    window.localStorage.removeItem('token');
    navigate('/login');
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
        {posts.length > 0
          ? posts.map((post, index) => <Post key={index} />)
          : 'U dont have any posts'}
      </div>
    </div>
  );
};

export default Profile;
