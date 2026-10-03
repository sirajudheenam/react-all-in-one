import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../../contexts/themeContext";
import "./root.css";

export async function action() { return null; }
export async function loader() { return null; }

export default function Root() {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <>
      <nav id="navbar">
        <NavLink to="/" className="brand">
          React <span>All-in-One</span>
        </NavLink>
        {!isHome && (
          <NavLink to="/" className="back-link" aria-label="Back to home">
            ← Home
          </NavLink>
        )}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          <span className="theme-toggle__track">
            <span className="theme-toggle__thumb" />
          </span>
          <span className="theme-toggle__icon theme-toggle__icon--sun">☀</span>
          <span className="theme-toggle__icon theme-toggle__icon--moon">☾</span>
        </button>
      </nav>
      <div id="detail" className="demo-wrapper">
        <Outlet />
      </div>
    </>
  );
}
