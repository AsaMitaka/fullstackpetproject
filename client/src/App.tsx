import { Routes, Route } from 'react-router-dom';
import { Login, Signup, Main, Profile, Post, ErrorPage } from './pages';
import Layout from './layout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe, selectIsAuth } from './redux/slices/authSlice';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  if (isAuth) {
    return (
      <>
        <Routes>
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> */}
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="profile" element={<Profile />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </>
    );
  } else {
    return (
      <>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </>
    );
  }
};

export default App;
