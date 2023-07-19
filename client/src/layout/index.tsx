import { Outlet } from 'react-router-dom';
import { CreatePost, Footer, Header } from '../component';
import styles from './outlet.module.scss';
import { useState } from 'react';

const Layout = () => {
  const [isActive, setActive] = useState(false);
  const handleClose = () => {
    setActive(false);
  };

  return (
    <div className={styles.wrapper}>
      <Header setActive={setActive} />
      <section className={styles.main}>
        <Outlet />
        {isActive && <CreatePost onClose={handleClose} />}
      </section>
      <Footer />
    </div>
  );
};

export default Layout;
