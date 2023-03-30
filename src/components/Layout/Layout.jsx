import { Outlet } from 'react-router-dom';

// components
import Header from '@/components/Header/Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
3