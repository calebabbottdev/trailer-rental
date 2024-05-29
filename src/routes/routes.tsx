// Components & Pages
import Navbar from '@navbar';

// React Router
import { createBrowserRouter } from 'react-router-dom';

// Routes
import Error from '@features/error/Error';
import Home from '@features/home/Home';
import Login from '@features/auth/login/Login';
import Signup from '@features/auth/signup/Signup';

export const routes = {
  HOME: '/',

  // Auth
  LOGIN: '/login',
  SIGNUP: '/signup',
};

export const router = createBrowserRouter([
  {
    path: routes.HOME,
    element: <Navbar />,
    errorElement: <Error />,
    children: [
      {
        path: routes.HOME,
        element: <Home />,
      },
      {
        path: routes.LOGIN,
        element: <Login />,
      },
      {
        path: routes.SIGNUP,
        element: <Signup />,
      },
    ],
  },
]);
