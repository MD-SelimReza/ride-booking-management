import AdminLayout from '@/components/layout/AdminLayout';
import PublicLayout from '@/components/layout/PublicLayout';
import Sample from '@/pages/Sample';
import Test from '@/pages/Test';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    Component: PublicLayout,
    path: '/',
    children: [
      {
        Component: Test,
        path: 'test',
      },
    ],
  },
  {
    Component: AdminLayout,
    path: '/admin',
    children: [
      {
        Component: Sample,
        path: 'sample',
      },
    ],
  },
]);
