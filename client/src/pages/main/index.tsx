import { Post } from '../../component';
import styles from './main.module.scss';

const Main = () => {
  return (
    <div className={styles.main}>
      <h1>Main</h1>
      <div className={styles.main__block}>
        <ul className={styles.list}>
          <li className={styles.list__activeli}>New</li>
          <li className={styles.list__li}>Popular</li>
        </ul>
        {[...new Array(4)].map((_, index) => (
          <Post key={index} />
        ))}
      </div>
    </div>
  );
};

export default Main;
