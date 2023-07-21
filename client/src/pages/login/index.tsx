import { Link, useNavigate } from 'react-router-dom';
import styles from './login.module.scss';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin, selectIsAuth } from '../../redux/slices/authSlice';
import { useEffect } from 'react';

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onHandleSubmit = async (values) => {
    const data = await dispatch(fetchLogin(values));

    if (!data.payload) {
      console.log('error');
    }

    if (data.payload.token) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  console.log(isAuth);

  useEffect(() => {
    if (isAuth) {
      navigate('/', { replace: true });
    }
  }, [isAuth]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.login}>
        <h2 className={styles.login__title}>Login</h2>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <label
            htmlFor="email"
            className={styles.login__label}
            {...register('email', { required: 'Write email' })}>
            Email:
            <input type="email" id="email" name="email" className={styles.login__input} />
            <span className={styles.error}>{errors.email?.message}</span>
          </label>
          <label
            htmlFor="password"
            className={styles.login__label}
            {...register('password', { required: 'Write password' })}>
            Password:
            <input type="password" id="password" name="password" className={styles.login__input} />
            <span className={styles.error}>{errors.password?.message}</span>
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
