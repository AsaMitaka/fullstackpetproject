import { Link } from 'react-router-dom';
import styles from './post.module.scss';
import { useDispatch } from 'react-redux';
import { fetchDeletePost } from '../../redux/slices/postsSlice';

const Post = ({ id, title, username, userId, viewsCount, text, isOwner }) => {
  const dispatch = useDispatch();

  const onHandleEdit = () => {};

  const onHandleDelete = () => {
    dispatch(fetchDeletePost(id));
  };

  return (
    <div className={styles.post}>
      <div className={styles.postHeader}>
        <Link to={`/profile/${userId}`} className={styles.postProfile}>
          <img src="" alt="" className={styles.postProfileImg} />
          <p className={styles.postProfileNickname}>{username}</p>
        </Link>
        {isOwner && (
          <div>
            <button className={styles.postBtn}>edit</button>
            <button className={styles.postBtn} onClick={onHandleDelete}>
              X
            </button>
          </div>
        )}
      </div>
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
