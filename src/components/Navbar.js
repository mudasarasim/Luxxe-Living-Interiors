import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleLinkClick = () => {
    closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Bar - Hidden on small screens */}
      <section className="top-bar-style2 d-none d-md-block">
        <div className="top-style2 clearfix">
          <div className="top-style2-left">
            <p><span className="icon-music"></span>We have Answers</p>
            <ul>
              <li>+971 52 513 1339</li>
              <li>lovelie.gallo@gmail.com</li>
              <li>Mon - Sat: 9am to 6pm</li>
            </ul>
          </div>
          <div className="top-style2-right">
            <ul className="topbar-social-links">
              <li><a href=" https://www.instagram.com/lovelie.interiors1/" style={{color: 'grey'}} target='blank'>Connect With Us On <i className="fa fa-instagram"></i> Instagram</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Navbar */}
      <header className="main-header header-style2 stricky">
        <div className="inner-container clearfix">
          <div className="logo-box-style2 float-left">
            <NavLink to="/" onClick={handleLinkClick}>
              <img src="images/resources/logo.png" style={{height: '65px', width: '210px'}} alt="Awesome Logo" />
            </NavLink>
          </div>

          <div className="main-menu-box float-right">
            <nav className="main-menu style2 clearfix">
              <div className="navbar-header clearfix">
                <button
                  type="button"
                  className="navbar-toggle"
                  onClick={toggleMenu}
                  aria-expanded={menuOpen}
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>

              <div className={`navbar-collapse clearfix ${menuOpen ? 'show-menu' : 'hide-menu'}`}>
                <ul className="navigation clearfix">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) => (isActive ? 'active-link' : '')}
                      onClick={handleLinkClick}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services"
                      className={({ isActive }) => (isActive ? 'active-link' : '')}
                      onClick={handleLinkClick}
                    >
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/reviews"
                      className={({ isActive }) => (isActive ? 'active-link' : '')}
                      onClick={handleLinkClick}
                    >
                      Reviews
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) => (isActive ? 'active-link' : '')}
                      onClick={handleLinkClick}
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) => (isActive ? 'active-link' : '')}
                      onClick={handleLinkClick}
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="mainmenu-right style2">
              <div className="button">
                <NavLink className="btn-one" to="/contact" onClick={handleLinkClick}>
                  Get in touch<span className="flaticon-next"></span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Styles for toggle menu and active links */}
      <style>{`
        .hide-menu {
          display: none;
        }
        .show-menu {
          display: block;
        }
        .active-link {
          color: red !important;
        }
        @media (min-width: 768px) {
          .hide-menu,
          .show-menu {
            display: block !important;
          }
          .navbar-toggle {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
