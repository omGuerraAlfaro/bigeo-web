import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/img/LogoBIGEO.png";
import "./navbar.css";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Navbar = ({ nombreUser }) => {
  const [notificaciones, setNotificaciones] = useState([]);
  const [contadorNotificaciones, setContadorNotificaciones] = useState(0);
  const [mostrarDropdown, setMostrarDropdown] = useState(false);
  const [navExpanded, setNavExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setMostrarDropdown(!mostrarDropdown);
  };

  const toggleNav = () => {
    setNavExpanded(!navExpanded);
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const logout = () => {
    localStorage.setItem('token', '');
    localStorage.setItem('name_user', '');
    navigate('/');
  };

  /* const handleProfileClick = (e) => {
    e.preventDefault();
    "Perfil"
  }; */

  useEffect(() => {
    let url1 = "https://bigeo-api.onrender.com/tasks/count/Leído";
    let url2 = "https://bigeo-api.onrender.com/tasks/count/Efectuado";

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const fetchData = async () => {
      try {
        const response1 = axios.get(url1, config);
        const response2 = axios.get(url2, config);

        const responses = await Promise.all([response1, response2]);

        const total = responses[0].data + responses[1].data;
        const data = [responses[0].data, responses[1].data];
        setNotificaciones(data);
        setContadorNotificaciones(total);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
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

              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  <div
                    className="nav-link dropdown-toggle d-flex align-items-center" id="navbarDropdown" role="button" onClick={toggleDropdown} aria-haspopup="true" aria-expanded={mostrarDropdown}>
                    <h5 className="font-weight-bold">Bienvenido: {nombreUser}</h5>
                  </div>
                  <div className={`dropdown-menu ${mostrarDropdown ? "show" : ""}`} aria-labelledby="navbarDropdown">
                    <div className="dropdown-item" onClick={logout}>
                      Cerrar Sesión
                    </div>
                  </div>
                </li>
              </ul>
              <button type="button" className="btn btn-secondary" onClick={handleShowModal}>
                Notificaciones <span className="badge">{contadorNotificaciones}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Modal show={showModal} onHide={handleShowModal}>
        <Modal.Header closeButton>
          <Modal.Title>Notificaciones</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Estado del Formulario</th>
        <th className="text-center">Cantidad</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Formularios leídos</td>
        <th className="text-center">{notificaciones[0]}</th>
      </tr>
      <tr>
        <td>Formularios efectuados</td>
        <th className="text-center">{notificaciones[1]}</th>
      </tr>
    </tbody>
  </Table>
</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleShowModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navbar;
