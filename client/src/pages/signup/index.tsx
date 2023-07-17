import { Link } from 'react-router-dom';
import styles from './signup.module.scss';

const Signup = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.signup}>
        <h2 className={styles.signup__title}>Sign Up</h2>
        <label htmlFor="email" className={styles.signup__label}>
          Email:
          <input type="email" className={styles.signup__input} />
        </label>
        <label htmlFor="password" className={styles.signup__label}>
          Password:
          <input type="password" className={styles.signup__input} />
        </label>
        <input type="submit" value="Submit" className={styles.signup__btn} />

        <div className={styles.subblock}>
          <p className={styles.subblock__text}>
            You don't have an account
            <Link to="/login" className={styles.link}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
