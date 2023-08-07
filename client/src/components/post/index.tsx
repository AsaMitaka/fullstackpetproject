import { Link } from 'react-router-dom';
import styles from './post.module.scss';

const Post = ({ id, title, username, userId, viewsCount, text }) => {
  return (
    <div className={styles.post}>
      <Link to={`/profile/${userId}`} className={styles.postProfile}>
        <img src="" alt="" className={styles.postProfileImg} />
        <p className={styles.postProfileNickname}>{username}</p>
      </Link>
      <Link to={`/post/${id}`} className={styles.postTitle}>
        {title}
      </Link>
      <div className={styles.postBlock}>
        <p className={styles.postSubinfo}>Views: {viewsCount}</p>
      </div>
      <div className={styles.postText}>{text}</div>
    </div>
  );
};

export default Post;
