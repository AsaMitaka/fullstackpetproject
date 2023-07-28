import { Navigate } from 'react-router-dom';
import styles from './createpost.module.scss';
import { useSelector } from 'react-redux';

const Createpost = () => {
  const isAuth = useSelector((state) => state.auth.user);

  if (!isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.createpost}>
      <h1>Create Page</h1>
      <form className={styles.createpostBlock}>
        <input type="text" name="title" id="title" placeholder="title" className={styles.title} />
        <textarea name="text" id="text" placeholder="text" className={styles.textarea} />
        <input type="submit" value="Submit" className={styles.submitbtn} />
      </form>
    </div>
  );
};

export default Createpost;
