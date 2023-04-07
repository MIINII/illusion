import { Outlet } from 'react-router-dom';

// components
import { Header } from '@/components';

export function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
3;
