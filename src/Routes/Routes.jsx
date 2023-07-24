import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import ErrorPage from '../ErrorPage/ErrorPage';
import LoginForm from '../pages/Login/Login';
import PrivateRoutes from './PrivateRoutes';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'colleges/:id',
          element: <PrivateRoutes><singleCollege></singleCollege></PrivateRoutes>,
          loader: ({ params }) =>
          fetch(``)
        },
        {
          path: '/login',
          element: <LoginForm></LoginForm>
        }
      ]
    },
  ]);

export default router;