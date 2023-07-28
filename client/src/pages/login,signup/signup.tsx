import { Link, Navigate } from 'react-router-dom';
import styles from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchSignup } from '../../redux/slices/authSlice';

const Signup = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isAuth = useSelector((state) => state.auth.user);
  console.log(isAuth, isAuth?.token);

  const handleUsername = (e) => {
    const username = e.target.value;

    setUsername(username);
  };

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

    if (!email || !password || !username) {
      return;
    }

    dispatch(fetchSignup({ email: email, password: password, username: username }));
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
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.container}>
            <label htmlFor="username" className={styles.label}>
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={handleUsername}
              className={styles.input}
            />
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleEmail}
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
