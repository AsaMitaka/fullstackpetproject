import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerwrapper}>
        <h1>Login</h1>
        <form>
          <div className={styles.container}>
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
          If u dont have account
          <Link to="/signup" className={styles.spanbtn}>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
