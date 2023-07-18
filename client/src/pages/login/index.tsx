import { Link } from 'react-router-dom';
import styles from './login.module.scss';

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.login}>
        <h2 className={styles.login__title}>Login</h2>
        <form>
          <label htmlFor="username" className={styles.login__label}>
            Username:
            <input type="text" name="username" className={styles.login__input} />
          </label>
          <label htmlFor="email" className={styles.login__label}>
            Email:
            <input type="email" name="email" className={styles.login__input} />
          </label>
          <label htmlFor="password" className={styles.login__label}>
            Password:
            <input type="password" name="password" className={styles.login__input} />
          </label>
          <input type="submit" value="Submit" className={styles.login__btn} />
        </form>

        <div className={styles.subblock}>
          <p className={styles.subblock__text}>
            You don't have an account
            <Link to="/signup" className={styles.link}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
