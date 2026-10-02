import { Outlet, NavLink } from "react-router-dom";
import "./root.css";

export async function action() { return null; }
export async function loader() { return null; }

export default function Root() {
  return (
    <>
      <nav id="navbar">
        <NavLink to="/" className="brand">
          React <span>All-in-One</span>
        </NavLink>
        <NavLink to="/" className="home-link">Home</NavLink>
      </nav>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
