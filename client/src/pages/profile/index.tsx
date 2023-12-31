import { useParams } from 'react-router-dom';
import Post from '../../components/post';
import styles from './profile.module.scss';
import { useEffect, useState } from 'react';
import axios from '../../middleware/axios';
import { useSelector } from 'react-redux';
import { isAuth } from '../../redux/slices/authSlice';

const Profile = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    username: '',
    createdAt: '',
    updatedAt: '',
    email: '',
    _id: '',
    post: [],
  });
  const isAuthorized = useSelector(isAuth);
  const owner = isAuthorized._id === data._id;

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/user/${id}`);

        setData(data);
      } catch (err) {
        console.warn(err);
        alert(`Error: ${err}`);
      }
    };

    getData();
  }, []);

  return (
    <div className={styles.profile}>
      <div className={styles.profileHeader}>
        <img src="" alt="" className={styles.profileHeaderImg} />
        <p className={styles.profileHeaderUsername}>{data.username}</p>
        <p>Email: {data.email}</p>
        <p>Created At: {data.createdAt}</p>
        <button className={styles.editBtn}>Edit</button>
      </div>
      <div className={styles.profileBlock}>
        {data.post &&
          data.post.map((post) => (
            <Post
              key={post._id}
              id={post._id}
              text={post.text}
              title={post.title}
              username={post.userId?.username}
              userId={post.userId?._id}
              viewsCount={post.views}
              isOwner={owner}
            />
          ))}
      </div>
    </div>
  );
};

export default Profile;
