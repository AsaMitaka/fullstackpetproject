import { Link, Navigate } from 'react-router-dom';
import styles from './signup.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, fetchSignup } from '../../redux/slices/authSlice';
import { useForm } from 'react-hook-form';

const Signup = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onHandleSubmit = async (values) => {
    const data = await dispatch(fetchSignup(values));

    if (!data.payload) {
      console.log('error');
    }

    if (data.payload.token) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.signup}>
        <h2 className={styles.signup__title}>Sign Up</h2>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <label
            htmlFor="username"
            className={styles.signup__label}
            {...register('username', { required: 'Write username' })}>
            Username:
            <input type="text" name="username" id="username" className={styles.signup__input} />
            <span className={styles.error}>{errors.username?.message}</span>
          </label>
          <label
            htmlFor="email"
            className={styles.signup__label}
            {...register('email', { required: 'Write email' })}>
            Email:
            <input type="email" name="email" id="email" className={styles.signup__input} />
            <span className={styles.error}>{errors.email?.message}</span>
          </label>
          <label
            htmlFor="password"
            className={styles.signup__label}
            {...register('password', { required: 'Write password' })}>
            Password:
            <input type="password" name="password" id="password" className={styles.signup__input} />
            <span className={styles.error}>{errors.password?.message}</span>
          </label>
          <input type="submit" value="Submit" className={styles.signup__btn} />
        </form>

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
