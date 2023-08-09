import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './post.module.scss';
import { useEffect, useState } from 'react';
import axios from '../../middleware/axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeletePost } from '../../redux/slices/postsSlice';
import { isAuth } from '../../redux/slices/authSlice';

const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthorizated = useSelector(isAuth);
  const [data, setData] = useState({
    text: '',
    title: '',
    userId: [],
    views: 0,
    _id: '',
    createdAt: '',
    updatedAt: '',
  });
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
      </div>
    </div>
  );
};

export default Post;
