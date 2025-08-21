import { Outlet } from 'react-router';
import Footer from './Footer';
import Navbar from './Navbar';

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-200px)] flex flex-col justify-center items-center">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
