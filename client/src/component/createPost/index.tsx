import { useEffect, useRef } from 'react';
import styles from './createpost.module.scss';

const CreatePost = ({ onClose }) => {
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target) && event.target !== document) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={styles.modal}>
      <form>
        <div ref={ref} className={styles.modal__dialog}>
          <button onClick={onClose} className={styles.close__btn}>
            x
          </button>
          <input type="text" name="title" placeholder="title" className={styles.title} />
          <textarea className={styles.textarea} placeholder="text" />
          <input type="submit" value="create post" className={styles.btn} />
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
