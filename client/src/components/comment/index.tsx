import { Link } from 'react-router-dom';
import axios from '../../middleware/axios';
import styles from './comment.module.scss';

const Comment = ({ item, isOwner, postId }) => {
  const onHandleEdit = () => {
    console.log('EDIT');
  };

  const onHandleDelete = async () => {
    try {
      const res = await axios.delete(`/comment/${item._id}`, postId);
      if (!res) {
        console.warn('Error deleting comment');
      }

      console.log('Comment deleted');
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <div className={styles.comment}>
      <div className={styles.commentRow}>
        <Link className={styles.commentHeader} to={`/profile/${item.userId._id}`}>
          <img src="" alt="" className={styles.commentHeaderImg} />
          <span className={styles.commentHeaderNickname}>{item.userId.username}</span>
        </Link>
        {isOwner && (
          <div className={styles.commentBtns}>
            <button className={styles.commentBtn} onClick={onHandleEdit}>
              edit
            </button>
            <button className={styles.commentBtn} onClick={onHandleDelete}>
              delete
            </button>
          </div>
        )}
      </div>
      <div className={styles.commentBlockText}>{item.text}</div>
    </div>
  );
};

export default Comment;
