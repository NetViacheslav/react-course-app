import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import cls from './MainLayout.module.css';

export const MainLayout = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={cls.mainLayout}>
      <Header />
      <div className={cls.mainWrapper}>
        <main className={cls.main}>
          <Outlet />
        </main>
        <footer className={cls.footer}>
          React Question Cards Application | {currentYear} <br />
        </footer>
      </div>
    </div>
  );
};
