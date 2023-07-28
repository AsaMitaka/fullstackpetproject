import { useEffect } from 'react';
import Post from '../../components/post';
import styles from './main.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPost } from '../../redux/slices/postSlice';
import { Navigate } from 'react-router-dom';

const Main = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const isAuth = useSelector((state) => state.auth.user);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  useEffect(() => {
    dispatch(fetchAllPost());
  }, []);

  console.log(posts);

  return (
    <div className={styles.main}>
      <h1>Main</h1>
      <div className={styles.mainBlock}>
        {[...new Array(10)].map((_, index) => (
          <Post key={index} />
        ))}
      </div>
    </div>
  );
};
export default Main;
