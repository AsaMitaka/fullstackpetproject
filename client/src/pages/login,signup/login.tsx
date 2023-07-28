import { Link, Navigate } from 'react-router-dom';
import styles from './index.module.scss';
import { useEffect, useState } from 'react';
import { fetchLogin } from '../../redux/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isAuth = useSelector((state) => state.auth.user);
  console.log(isAuth, isAuth?.token);

  const handleEmail = (e) => {
    const email = e.target.value;

    setEmail(email);
  };

  const handlePassword = (e) => {
    const password = e.target.value;

    setPassword(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    dispatch(fetchLogin({ email: email, password: password }));
  };

  useEffect(() => {
    if (isAuth?.token) {
      window.localStorage.setItem('token', isAuth.token);
    }
  }, [isAuth]);

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.innerwrapper}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.container}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
              id="email"
              className={styles.input}
            />
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handlePassword}
              className={styles.input}
            />
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
