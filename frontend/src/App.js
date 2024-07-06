import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './layout.scss';
import HomePage from './routes/homePage/HomePage';
import Layout from './routes/layout/Layout';
import ListPage from './routes/listPage/ListPage';
import Login from './routes/login/Login';
import ProfilePage from './routes/profilePage/ProfilePage';
import Register from './routes/register/Register';
import SinglePage from './routes/singlePage/SinglePage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/:id",
          element: <SinglePage />
        },
        {
          path: "/profile",
          element: <ProfilePage />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        }
      ]
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
