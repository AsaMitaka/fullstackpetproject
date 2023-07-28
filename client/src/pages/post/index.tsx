import { Link } from 'react-router-dom';
import styles from './post.module.scss';

const Post = () => {
  return (
    <div className={styles.post}>
      <div className={styles.postHeader}>
        <Link to="/profile" className={styles.postHeaderLink}>
          <img src="" alt="" className={styles.postHeaderLinkImg} />
          <p className={styles.postHeaderLinkUsername}>Nickname</p>
        </Link>
      </div>
      <div className={styles.postBlock}>
        <h1 className={styles.postBlockTitle}>Title</h1>
        <span className={styles.postBlockViews}>Views: 0</span>
        <div className={styles.postBlockText}>
          texttexttexttexttexttexttexttexttexttexttexttexttexttext
          texttexttexttexttexttexttexttexttexttexttexttexttexttext
          texttexttexttexttexttexttexttexttexttexttexttexttexttext
          texttexttexttexttexttexttexttexttexttexttexttexttexttext
          texttexttexttexttexttexttexttexttexttexttexttexttexttext
          texttexttexttexttexttexttexttexttexttexttexttexttexttext
          texttexttexttexttexttexttexttexttexttexttexttexttexttext
          texttexttexttexttexttexttexttexttexttexttexttexttexttext
          texttexttexttexttexttexttexttexttexttexttexttexttexttext
          texttexttexttexttexttexttexttexttexttexttexttexttexttext
          texttexttexttexttexttexttexttexttexttexttexttexttexttext
          texttexttexttexttexttexttexttexttexttexttexttexttexttext
          texttexttexttexttexttexttexttexttexttexttexttexttexttext
          texttexttexttexttexttexttexttexttexttexttexttexttexttext
          texttexttexttexttexttexttexttexttexttexttexttexttexttext
        </div>
      </div>
    </div>
  );
};

export default Post;
