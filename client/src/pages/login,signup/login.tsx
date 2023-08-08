import { Link, Navigate } from 'react-router-dom';
import styles from './index.module.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin, isAuth } from '../../redux/slices/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    const email = e.target.value;

    setEmail(email);
  };

  const handlePassword = (e) => {
    const password = e.target.value;

    setPassword(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    const data = await dispatch(fetchLogin({ email, password }));

    if (!data.payload) {
      alert('Failed to login');
      console.warn('Failed to login');
    }

    if (data.payload.token) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  const isAuthorizated = useSelector(isAuth);

  if (isAuthorizated) {
    return <Navigate to={'/'} />;
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
