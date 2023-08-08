import { Link, useParams } from 'react-router-dom';
import styles from './post.module.scss';
import { useEffect, useState } from 'react';
import axios from '../../middleware/axios';

const Post = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    text: '',
    title: '',
    userId: [],
    views: 0,
    _id: '',
    createdAt: '',
    updatedAt: '',
  });

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
        <div className={styles.postBlockText}>{data.text}</div>
      </div>
    </div>
  );
};

export default Post;
