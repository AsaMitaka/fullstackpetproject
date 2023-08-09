import { Route, Routes } from 'react-router-dom';
import { Createpost, Login, Main, Post, Profile, Signup, Editpost } from './pages';
import Layout from './layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMe, isAuth } from './redux/slices/authSlice';

const App = () => {
  const dispatch = useDispatch();
  const isAuthorizated = useSelector(isAuth);

  useEffect(() => {
    dispatch(fetchMe());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/:id/edit" element={<Editpost />} />
          <Route path="/createpost" element={<Createpost />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
