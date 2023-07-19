import { Link } from 'react-router-dom';
import styles from './post.module.scss';

const Post = () => {
  return (
    <div className={styles.post}>
      <div className={styles.post__header}>
        <div className={styles.info}>
          <Link to="/profile" className={styles.link}>
            <img src="" className={styles.userimg} />
            <p className={styles.username}>nickname</p>
          </Link>
          <time className={styles.time}>20 02 2022</time>
        </div>
        <Link to="/post/1" className={styles.title}>
          Title
        </Link>
      </div>

      <div className={styles.post__block}>
        {'sdadadawdadawdadadawkdkajwkfjnaklwfnlkawnflkanwkfnak'.slice(0, 30) + '...'}
      </div>
      <div className={styles.post__info}>view: 0</div>
    </div>
  );
};
export default Post;
