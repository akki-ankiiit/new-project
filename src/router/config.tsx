import { RouteObject } from 'react-router-dom';
import HomePage from '../pages/home/page';
import ServicesPage from '../pages/services/page';
import ContactPage from '../pages/contact/page';
import LegalPage from '../pages/legal/page';
import NotFound from '../pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/services',
    element: <ServicesPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/legal',
    element: <LegalPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
