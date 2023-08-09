import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import styles from './createpost.module.scss';
import { isAuth } from '../../redux/slices/authSlice';
import axios from '../../middleware/axios';

const Createpost = () => {
  const isAuthorizated = useSelector(isAuth);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const navigate = useNavigate();

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

    if (title.length < 1 || title.length > 30) {
      console.warn('Title must be at least 1 characters or less than 30 characters');
      return;
    }

    if (text.length < 5 || title.length > 300) {
      console.warn('Text must be at least 5 characters or less than 300 characters');
      return;
    }

    try {
      const res = await axios.post('/post/create', { title, text });

      if (!res) {
        console.warn('Post creation failed');
      } else {
        console.log('Post created successfully');
        setTitle('');
        setText('');
        const id = res.data.id;
        navigate(`/post/${id}`);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className={styles.createpost}>
      <h1>Create Page</h1>
      <form className={styles.createpostBlock} onSubmit={onHandleSumbit}>
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
        <input type="submit" value="Submit" className={styles.submitbtn} />
      </form>
    </div>
  );
};

export default Createpost;
