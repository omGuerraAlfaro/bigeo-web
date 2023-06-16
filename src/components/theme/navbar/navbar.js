import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/img/LogoBIGEO.png";

const Navbar = ({ nombreUser }) => {
  const [mostrarDropdown, setMostrarDropdown] = useState(false);
  const [navExpanded, setNavExpanded] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setMostrarDropdown(!mostrarDropdown);
  };

  const toggleNav = () => {
    setNavExpanded(!navExpanded);
  };

  const logout = () => {
    localStorage.setItem('token', '');
    localStorage.setItem('name_user', '');
    navigate('/');
  };

  const handleProfileClick = (e) => {
    e.preventDefault();
    //  "Perfil"
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light ${navExpanded ? 'show' : ''}`}>
      <div className="navbar-brand">
        <img src={logo} width="150px" className="logo" alt="Logo" />
      </div>

      <button
        onClick={toggleNav}
        className="navbar-toggler toggle"
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded={navExpanded}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${navExpanded ? 'show' : ''}`} id="navbarSupportedContent">
        <div className="row w-100">
          <div className="col">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  onClick={toggleDropdown}
                  aria-haspopup="true"
                  aria-expanded={mostrarDropdown}
                >
                  Bienvenido: {nombreUser}
                </div>
                <div className={`dropdown-menu ${mostrarDropdown ? "show" : ""}`}
                  aria-labelledby="navbarDropdown"
                >
                  <div className="dropdown-item" id="pointer" onClick={handleProfileClick}>
                    Perfil
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="dropdown-item" id="pointer" onClick={logout}>
                    Cerrar Sesión
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col d-flex justify-content-end">
            <button type="button" className="btn btn-primary">
              Notificaciones <span className="badge badge-light">4</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
