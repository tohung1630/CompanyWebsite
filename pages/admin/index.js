import AdminLayout from '../../layouts/AdminLayout';
import styles from './style.module.scss';

const Admin = () => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['container']}>
        <h1>Admin</h1>
      </div>
    </div>
  );
};

Admin.Layout = AdminLayout;

export default Admin;
