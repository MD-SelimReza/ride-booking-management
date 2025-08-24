import AdminLayout from '@/components/layout/AdminLayout';
import PublicLayout from '@/components/layout/PublicLayout';
import ChangePasswordPage from '@/components/modules/auth/ChangePasswordPage';
import EditProfilePage from '@/components/modules/auth/EditProfilePage';
import ForgotPasswordPage from '@/components/modules/auth/ForgotPasswordPage';
import OtpVerifyPage from '@/components/modules/auth/OtpVerifyPage';
import ProfilePage from '@/components/modules/auth/ProfilePage';
import SigninPage from '@/components/modules/auth/SigninPage';
import SignupPage from '@/components/modules/auth/SignupPage';
import AboutPage from '@/components/modules/public/About/AboutPage';
import Contact from '@/components/modules/public/Contact/ContactPage';
import Faq from '@/components/modules/public/Faq/FaqSection';
import { FeaturesPage } from '@/components/modules/public/Feature/FeatureSection';
import HomePage from '@/pages/HomePage';
import Sample from '@/pages/Sample';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    Component: PublicLayout,
    path: '/',
    children: [
      {
        Component: HomePage,
        index: true,
      },
      {
        Component: FeaturesPage,
        path: 'features',
      },
      {
        Component: AboutPage,
        path: 'about',
      },
      {
        Component: Contact,
        path: 'contact',
      },
      {
        Component: Faq,
        path: 'faq',
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
  {
    Component: SignupPage,
    path: '/signup',
  },
  {
    Component: SigninPage,
    path: '/signin',
  },
  {
    Component: ProfilePage,
    path: '/profile',
  },
  {
    Component: EditProfilePage,
    path: '/edit-profile',
  },
  {
    Component: OtpVerifyPage,
    path: '/otp-verify',
  },
  {
    Component: ForgotPasswordPage,
    path: '/forgot-password',
  },
  {
    Component: ChangePasswordPage,
    path: '/change-password',
  },
]);
