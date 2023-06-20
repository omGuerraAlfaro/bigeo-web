import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/img/LogoBIGEO.png";
import "./navbar.css";
import axios from "axios";

const Navbar = ({ nombreUser }) => {
  const [contadorNotificaciones, setContadorNotificaciones] = useState(0);
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


  useEffect(() => {
    let url = "http://localhost:3400/tasks/count/sin leer";

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(url, config);
        const data = response.data;
        setContadorNotificaciones(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  });


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
          <div className="col d-flex justify-content-end">
            <button type="button" className="btn btn-primary">
              Notificaciones <span className="badge badge-light">{contadorNotificaciones}</span>
            </button>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle d-flex align-items-center" id="navbarDropdown" role="button" onClick={toggleDropdown} aria-haspopup="true" aria-expanded={mostrarDropdown}>
                  <h5 className="font-weight-bold">Bienvenido: {nombreUser}</h5>
                </div>
                <div className={`dropdown-menu ${mostrarDropdown ? "show" : ""}`}aria-labelledby="navbarDropdown">
                  <div className="dropdown-item pointer" onClick={handleProfileClick}>
                    Perfil
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="dropdown-item pointer" onClick={logout}>
                    Cerrar Sesión
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
