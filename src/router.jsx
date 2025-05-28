import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductPage from './pages/ProductPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'catalog',
        element: <Catalog />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'product/:id',
        element: <ProductPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}