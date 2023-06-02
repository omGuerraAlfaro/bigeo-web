import React, { useState } from "react";
import { Modal, Button, Tabs, Tab, Form, Dropdown } from "react-bootstrap";
import "./buttonG.css";

export function ButtonG(props) {

  //states
  const [estado, setEstado] = useState('No Leído');

  const marcarLeido = () => {
    setEstado('Leído');
  };

  const marcarEnProceso = () => {
    setEstado('Asignado y en Proceso');
  };

  const marcarFinalizado = () => {
    setEstado('Finalizado');
  };

  //tabs
  const [activeTab, setActiveTab] = useState('datos');
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  const [textoInput, setTextoInput] = useState('');

  const handleTabSelect = (tabName) => {
    setActiveTab(tabName);
  };
  const handleOpcionSeleccionada = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  const handleTextoInputChange = (event) => {
    setTextoInput(event.target.value);
  };

  //modals
  const [showModal, setShowModal] = useState(false);
  // console.log(showModal);
  const [showModal2, setShowModal2] = useState(false);
  // console.log(showModal2);


  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    console.log(showModal);
  };

  const openModal2 = () => {
    setShowModal2(true);
  };

  const closeModal2 = () => {
    setShowModal2(false);
  };


  const handleGuardarAsignar = () => {
    // Aquí puedes realizar la lógica para guardar y asignar la tarea
    console.log("Guardar y asignar tarea:", opcionSeleccionada, textoInput);
    closeModal();

  };

  return (
    <div>
      <p className={`estado ${estado.toLowerCase()}`}>Estado: {estado}</p>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => {
            marcarLeido();
            openModal();
          }}
          disabled={estado === 'Leído' | estado === 'Asignado y en Proceso'}
        >
          Ver
        </button>
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={() => {
            marcarEnProceso();
            openModal2();
          }}
          disabled={estado === 'No Leído' | estado === 'Asignado y en Proceso' | estado === 'Finalizado'}
        >
          Asignar
        </button>
        <button
          type="button"
          className="btn btn-outline-danger "
          onClick={marcarFinalizado}
          disabled={estado != 'Asignado y en Proceso' | estado === 'Leído' | estado === 'No Leído'}
        >
          Completar
        </button>
      </div>


      <Modal
        show={showModal}
        onHide={closeModal}
        centered
        size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Modal de ejemplo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs
            activeKey={activeTab}
            onSelect={handleTabSelect}
            className="mb-3"
          >
            <Tab eventKey="datos" title="Datos">
              <p>Contenido de la pestaña Datos</p>
            </Tab>
            <Tab eventKey="ubicacion" title="Ubicación">
              <p>Contenido de la pestaña Ubicación</p>
            </Tab>
            <Tab eventKey="imagen" title="Imagen">
              <p>Contenido de la pestaña Imagen</p>
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal2} onHide={closeModal2} centered>
        <Modal.Header closeButton>
          <Modal.Title>Asignar tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formOpcionesDesplegables">
              <Form.Label>Opciones desplegables</Form.Label>
              <Dropdown onSelect={handleOpcionSeleccionada}>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  {opcionSeleccionada ? opcionSeleccionada : "Seleccionar opción"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Opción 1">Opción 1</Dropdown.Item>
                  <Dropdown.Item eventKey="Opción 2">Opción 2</Dropdown.Item>
                  <Dropdown.Item eventKey="Opción 3">Opción 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>

            <Form.Group controlId="formTextoInput">
              <Form.Label>Texto de la tarea</Form.Label>
              <Form.Control type="text" placeholder="Ingrese el texto de la tarea" value={textoInput} onChange={handleTextoInputChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleGuardarAsignar}>
            Guardar y Asignar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
