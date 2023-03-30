import { lazy, Suspense } from 'react';
import './App.css';
import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';

const Home = lazy(() => import('./pages/Home'));
const SignIn = lazy(() => import('./pages/SignIn'));

let router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'SignIn', element: <SignIn /> },
    ],
  },
]);

router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='SignIn' element={<SignIn />} />
    </Route>
  )
);

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<div>로딩 중...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
