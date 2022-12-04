
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Errorpage from './components/Errorpage/Errorpage';
import Courses from './components/Courses/Courses';
import Blog from './components/Blog/Blog';
import CourseDetailsCard from './components/CourseDetailsCard/CourseDetailsCard';
import Checkout from './components/Checkout/Checkout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Errorpage></Errorpage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/courses',
          element: <Courses></Courses>,
          loader: () => {
            return fetch('https://learnopedia-server.vercel.app/courses')
          }
        },
        {
          path: '/details/:id',
          element: <CourseDetailsCard></CourseDetailsCard>,
          loader: ({ params }) => {
            return fetch(`https://learnopedia-server.vercel.app/details/${params.id}`)
          }
        },

        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/checkout/:id',
          element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
        }
      ]

    },

  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
