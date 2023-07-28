import { Link } from 'react-router-dom';
import styles from './post.module.scss';

const Post = () => {
  return (
    <div className={styles.post}>
      <Link to="/profile" className={styles.postProfile}>
        <img src="" alt="" className={styles.postProfileImg} />
        <p className={styles.postProfileNickname}>Nickname</p>
      </Link>
      <Link to="/post" className={styles.postTitle}>
        Post
      </Link>
      <div className={styles.postText}>
        TextTextTextTextTextTextTextTextTextTextTextText
        TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
        TextTextTextTextTextTextTextTextTextTextTextText TextTextTextTextTextTextTextTextText...
      </div>
    </div>
  );
};

export default Post;
