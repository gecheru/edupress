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
    children: [
      {
        path: '*',
        element: <NotFound />,
      },
      {
        index: true,
        element: <Home />,
      },
      {
        path: RouterPaths.Courses,
        element: <Courses />,
      },
      {
        path: RouterPaths.CourseDetails,
        element: <CourseDetails />,
      },
      {
        path: RouterPaths.Posts,
        element: <Posts />,
      },
      {
        path: RouterPaths.PostDetails,
        element: <PostDetails />,
      },
      {
        path: RouterPaths.Contacts,
        element: <Contacts />,
      },
    ],
  },
]);

export default Router;
