import { Link, Outlet } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
  return (
    <>
      <nav className="layout-nav">
        <Link to="/" className="brand">React All-in-One</Link>
        <Link to="/">Home</Link>
      </nav>
      <div className="layout-content">
        <Outlet />
      </div>
    </>
  );
}
