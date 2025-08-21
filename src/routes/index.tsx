import App from '@/App';
import Test from '@/pages/Test';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    Component: App,
    path: '/',
    children: [
      {
        Component: Test,
        path: 'test',
      },
    ],
  },
]);
