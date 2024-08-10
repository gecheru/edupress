import { CourseDetails } from 'pages/CourseDetails';
import { Courses } from 'pages/Courses';
import { Home } from 'pages/Home';
import { PostDetails } from 'pages/PostDetails';
import { Posts } from 'pages/Posts';
import { createBrowserRouter } from 'react-router-dom';
import { NotFound } from 'pages/NotFound';
import { Contacts } from 'pages/Contacts';
import { Layout } from 'app/layouts/Layout';
import { RouterPaths } from 'shared/constants';

export const AppRouter = createBrowserRouter([
  {
    path: RouterPaths.Index,
    element: <Layout />,
    children: [
      {
        path: '*',
        element: <NotFound />,
        handle: {
          crumb: () => ({
            title: 'Not Found',
          }),
        },
      },
      {
        index: true,
        element: <Home />,
        handle: {
          crumb: () => ({
            title: 'Home',
          }),
        },
      },
      {
        path: RouterPaths.Courses,
        element: <Courses />,
        handle: {
          // crumb: () => <Link to={RouterPaths.Courses}>Courses</Link>,
          crumb: () => ({
            title: 'Courses',
          }),
        },
      },
      {
        path: RouterPaths.CourseDetails,
        element: <CourseDetails />,
      },
      {
        path: RouterPaths.Posts,
        element: <Posts />,
        handle: {
          crumb: () => ({
            title: 'Posts',
          }),
        },
      },
      {
        path: RouterPaths.PostDetails,
        element: <PostDetails />,
      },
      {
        path: RouterPaths.Contacts,
        element: <Contacts />,
        handle: {
          crumb: () => ({
            title: 'Contacts',
          }),
        },
      },
    ],
  },
]);
