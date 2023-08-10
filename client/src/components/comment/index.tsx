import { Link } from 'react-router-dom';
import styles from './comment.module.scss';

const Comment = () => {
  return (
    <div className={styles.comment}>
      <Link className={styles.commentHeader} to="/profile">
        <img src="" alt="" className={styles.commentHeaderImg} />
        <span className={styles.commentHeaderNickname}>nickname</span>
      </Link>
      <div className={styles.commentBlockText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem saepe accusantium
        culpa iusto cum omnis dolore error laboriosam ipsa libero ad fugiat, nisi, placeat hic
        facere dicta, distinctio dolorem ab.
      </div>
    </div>
  );
};

export default Comment;
