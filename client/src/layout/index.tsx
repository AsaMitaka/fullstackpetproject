import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../component';
import styles from './outlet.module.scss';

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <section className={styles.main}>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default Layout;
