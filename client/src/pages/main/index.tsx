import { useDispatch, useSelector } from 'react-redux';
import Post from '../../components/post';
import styles from './main.module.scss';
import { useEffect } from 'react';
import { fetchPosts } from '../../redux/slices/postsSlice';

const Main = () => {
  const dispatch = useDispatch();
  const { posts, status } = useSelector((state) => state.posts);
  const isLoading = status === 'loading';
  const isError = status === 'rejected';

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  console.log(posts, status);

  return (
    <div className={styles.main}>
      <h1>Main</h1>
      <div className={styles.mainBlock}>
        {isError ? (
          <p>Error</p>
        ) : isLoading ? (
          <p>Loading</p>
        ) : (
          posts.map((post) => (
            <Post
              key={post._id}
              id={post._id}
              text={post.text}
              title={post.title}
              username={post.userId.username}
              userId={post.userId._id}
              viewsCount={post.views}
            />
          ))
        )}
      </div>
    </div>
  );
};
export default Main;
