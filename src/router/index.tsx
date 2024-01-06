import { RouterPaths } from '@constants/routerPaths';
import CourseDetails from '@views/CourseDetails/CourseDetails';
import Courses from '@views/Courses/Courses';
import Home from '@views/Home/Home';
import PostDetails from '@views/PostDetails/PostDetails';
import Posts from '@views/Posts/Posts';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFound from '@views/NotFound/NotFound';
import Contacts from '@views/Contacts/Contacts';

const Router = createBrowserRouter([
  {
    path: RouterPaths.Index,
    element: <App />,
    handle: {
      crumb: () => ({
        title: 'Home',
      }),
    },
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

export default Router;
