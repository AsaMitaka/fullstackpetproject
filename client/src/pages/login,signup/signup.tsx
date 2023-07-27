import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const Signup = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerwrapper}>
        <h1>Sign Up</h1>
        <form>
          <div className={styles.container}>
            <label htmlFor="username" className={styles.label}>
              Username
            </label>
            <input type="text" name="username" id="username" className={styles.input} />
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input type="email" name="email" id="email" className={styles.input} />
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input type="password" name="password" id="password" className={styles.input} />
            <input type="submit" value="submit" className={styles.btn} />
          </div>
        </form>
        <div className={styles.block}>
          If u have account
          <Link to="/login" className={styles.spanbtn}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
