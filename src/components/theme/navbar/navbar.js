import './navbar.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/img/LogoBIGEO.png";


const Navbar = ({ nombreUser }) => {
  const [mostrarDropdown, setMostrarDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setMostrarDropdown(!mostrarDropdown);
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
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/home-admin">
        <img src={logo} width="150px" className="logo" alt="Logo" />
      </a>

      <button
        className="navbar-toggler toggle"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              onClick={toggleDropdown}
              aria-haspopup="true"
              aria-expanded={mostrarDropdown}
            >
              Hola, {nombreUser}
            </a>
            <div className={`dropdown-menu ${mostrarDropdown ? "show" : ""}`}
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item" href="/home-admin" onClick={handleProfileClick}>
                Perfil
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/home-admin" onClick={logout}>
                Cerrar Sesión
              </a>
            </div>
          </li>
        </ul>

        <button type="button" className="btn btn-primary">
          Notificaciones <span className="badge badge-light">4</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;