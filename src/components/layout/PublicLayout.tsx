import { Outlet } from 'react-router';
import Footer from './Footer';
import Navbar from './Navbar';

// interface IProps {
//   children: React.ReactNode;
// }

export default function PublicLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
