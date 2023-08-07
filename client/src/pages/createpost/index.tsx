import styles from './createpost.module.scss';

const Createpost = () => {
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
