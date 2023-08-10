import styles from './post.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchDeletePost } from '../../redux/slices/postsSlice';
import { isAuth } from '../../redux/slices/authSlice';
import Comment from '../../components/comment';
import axios from '../../middleware/axios';

const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthorizated = useSelector(isAuth);
  const [data, setData] = useState({
    text: '',
    title: '',
    userId: [],
    comments: [],
    views: 0,
    _id: '',
    createdAt: '',
    updatedAt: '',
  });
  const [comment, setComment] = useState('');
  const isOwnPost = isAuthorizated?._id === data.userId?._id;

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/post/${id}`);

        setData(data);
      } catch (err) {
        console.warn(err);
        alert(`Error: ${err}`);
      }
    };
    getData();
  }, []);

  const onHandleEdit = () => {
    navigate(`/post/${id}/edit`);
  };

  const onHandleDelete = () => {
    dispatch(fetchDeletePost(id));
    navigate(`/`);
  };

  const onHandleComment = (e) => {
    const value = e.target.value;

    if (value.length > 200) {
      return;
    }

    setComment(value);
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    if (comment.length < 1 || comment.length > 200) {
      console.warn('Comment must be more than 1 or less than 200 characters');
      return;
    }

    try {
      const res = await axios.post('/comment/create', { postId: id, text: comment });

      if (!res) {
        console.warn('Comment is not published');
      } else {
        setComment('');
        console.log('Comment posted');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  console.log(data.comments, data);

  return (
    <div className={styles.post}>
      <div className={styles.postHeader}>
        <Link to={`/profile/${data.userId?._id}`} className={styles.postHeaderLink}>
          <img src="" alt="" className={styles.postHeaderLinkImg} />
          <p className={styles.postHeaderLinkUsername}>{data.userId?.username}</p>
        </Link>
        <p>{data.createdAt}</p>
      </div>
      <div className={styles.postBlock}>
        <h1 className={styles.postBlockTitle}>{data.title}</h1>
        <span className={styles.postBlockViews}>Views: {data.views}</span>
        {isOwnPost && (
          <div className={styles.postBlockBtns}>
            <button onClick={onHandleEdit} className={styles.btn}>
              Edit
            </button>
            <button onClick={onHandleDelete} className={styles.btn}>
              Delete
            </button>
          </div>
        )}

        <div className={styles.postBlockText}>{data.text}</div>
        {isAuthorizated && (
          <form onSubmit={onHandleSubmit} className={styles.postComment}>
            <textarea
              className={styles.postCommentInput}
              placeholder="Write comment"
              value={comment}
              onChange={onHandleComment}
            />
            <input type="submit" className={styles.postCommentBtn} />
          </form>
        )}
        <div className={styles.postBlockComments}>
          {data.comments.length > 0 ? (
            data.comments.map((item) => (
              <Comment
                item={item}
                key={item._id}
                isOwner={item?.userId._id === isAuthorizated?._id}
                postId={id}
              />
            ))
          ) : (
            <p>No comments</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
