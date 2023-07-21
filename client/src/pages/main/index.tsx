import { useEffect } from 'react';
import { Post } from '../../component';
import styles from './main.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost, fetchMyPost } from '../../redux/slices/postSlice';

const Main = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const status = useSelector((state) => state.post.status);
  console.log(posts, status);

  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  return (
    <div className={styles.main}>
      <h1>Main</h1>
      <div className={styles.main__block}>
        <ul className={styles.list}>
          <li className={styles.list__activeli}>New</li>
          <li className={styles.list__li}>Popular</li>
        </ul>
        {status === 'loading'
          ? 'loading'
          : posts.length > 0 && posts.map((item, index) => <Post key={index} item={item} />)}
      </div>
    </div>
  );
};

export default Main;
