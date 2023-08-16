import SignUp from '../pages/signup/SignUp';
import Login from '../pages/login/Login';
// import { Outlet } from 'react-router-dom';
import Overview from '../pages/overview/Overview';

export const privateRoutes = [
  {
    path: '/overview',
    element: <Overview />,
  },
//   {
//     path: 'users/*',
//     element: <Outlet />,
//     children: [
//       {
//         path: '/',
//         element: <RolesTable />,
      ]


export const publicRoutes = [
  {
    path: '/',
    element: < SignUp/>,
  },
  {
    path: '/login',
    element: <Login />,
  },
];
