import { Navigate, useNavigate, useParams } from 'react-router-dom';
import styles from './editpost.module.scss';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isAuth } from '../../redux/slices/authSlice';
import axios from '../../middleware/axios';

const Editpost = () => {
  const { id } = useParams();
  const isAuthorizated = useSelector(isAuth);
  const [data, setData] = useState(null);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/post/${id}`);

      setData(data);
      setTitle(data.title);
      setText(data.text);
    };

    getData();
  }, []);

  const onHandleTitle = (e) => {
    const value = e.target.value;

    setTitle(value);
  };

  const onHandleText = (e) => {
    const value = e.target.value;

    setText(value);
  };

  if (!isAuthorizated) {
    return <Navigate to={'/'} />;
  }

  const onHandleSumbit = async (e) => {
    e.preventDefault();

    if (!(text && title)) {
      console.warn('Text or title is empty');
      return;
    }

    if (text === data?.text && title === data?.title) {
      console.warn('Old text and title are same');
      return;
    }

    if (title.length < 1 || title.length > 30) {
      console.warn('Title must be at least 1 characters or less than 30 characters');
      return;
    }

    if (text.length < 5 || title.length > 300) {
      console.warn('Text must be at least 5 characters or less than 300 characters');
      return;
    }

    try {
      const res = await axios.patch(`/post/${id}`, { title, text });

      if (!res) {
        console.warn('Post edit failed');
      } else {
        console.log('Post edited successfully');

        navigate(`/post/${id}`);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const onHandleCancel = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className={styles.editpost}>
      <h1>Edit Page</h1>
      <form className={styles.editpostBlock} onSubmit={onHandleSumbit}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="title"
          className={styles.title}
          value={title}
          onChange={onHandleTitle}
        />
        <textarea
          name="text"
          id="text"
          placeholder="text"
          className={styles.textarea}
          value={text}
          onChange={onHandleText}
        />
        <div className={styles.btns}>
          <input type="submit" value="Submit" className={styles.btn} />
          <button onClick={onHandleCancel} className={styles.btn}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default Editpost;
