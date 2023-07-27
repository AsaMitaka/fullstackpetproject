import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';
import Aside from '../components/aside';

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Aside />
      <Outlet />
    </div>
  );
};

export default Layout;
