import React from "react";
import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

function Root() {
  useEffect(() => {
    document.title = 'Oliver Timko';
  }, []);
  return (
    <div className="App">
      <nav>
        <div className="nav-left-link">
          <NavLink to="/">Oliver Timko</NavLink>
        </div>
        <div className="nav-right-link">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
          <p className="footer-text">Copyright © {new Date().getFullYear()} Oliver Timko. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Root;
