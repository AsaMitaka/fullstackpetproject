import { Routes, Route } from 'react-router-dom';
import { Login, Signup, Main, Profile, Post } from './pages';
import Layout from './layout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/post/:id" element={<Post />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
