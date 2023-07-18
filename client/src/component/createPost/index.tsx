import { useEffect, useRef } from 'react';
import styles from './createpost.module.scss';

const CreatePost = ({ onClose }) => {
  const ref = useRef();

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (ref.current && !ref.current.contains(event.target) && event.target !== document) {
  //       onClose();
  //     }
  //   };

  //   document.addEventListener('click', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('click', handleClickOutside);
  //   };
  // }, [onClose]);

  return (
    <div className={styles.modal}>
      <form>
        <div ref={ref} className={styles.modal__dialog}>
          <div onClick={onClose}>x</div>
          <textarea className={styles.textarea}></textarea>
          <input type="submit" value="create post" className={styles.btn} />
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
