import {
  FWIconAdmin,
  FWIconLogout,
  FWIconOverview,
  FWIconUsers,
} from '../components/assets';

export const SidebarContent = [
  {
    route: '/overview',
    icon: <FWIconOverview />,
    text: 'Overview',
  },
  {
    route: '/users',
    icon: <FWIconUsers />,
    text: 'Users',
  },
  {
    route: '/admins',
    icon: <FWIconAdmin />,
    text: 'Admin',
  },
  {
    route: '/logout',
    icon: <FWIconLogout />,
    text: 'Logout',
  },
];
