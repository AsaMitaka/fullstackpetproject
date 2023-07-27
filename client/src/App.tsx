import { Route, Routes } from 'react-router-dom';
import { Createpost, Login, Main, Post, Profile, Signup } from './pages';
import Layout from './layout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post" element={<Post />} />
          <Route path="/createpost" element={<Createpost />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
