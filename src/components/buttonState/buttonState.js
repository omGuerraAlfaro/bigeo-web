import React, { useState, useEffect } from "react";
import { Modal, Button, Tabs, Tab, } from "react-bootstrap";
import "./buttonState.css";
import MapComponent from "../geolocation/geolocation";

//filter forms
import { FaunaForm } from "../filterTableModal/formFauna";
import { GirdlingForm } from "../filterTableModal/formGirdling";
import { HumidityForm } from "../filterTableModal/formHumidity";
import { PlagueForm } from "../filterTableModal/formPlague";
import { SprinklerForm } from "../filterTableModal/formSprinkler";
import { CompactionForm } from "../filterTableModal/formCompaction";
import { DiseasesForm } from "../filterTableModal/formDiseases";
import { CountForm } from "../filterTableModal/formCount";
import { DamageForm } from "../filterTableModal/formDamage";
import { NewTask } from "../newTask/newTask";

//icons
// import sprinkler from '../../assets/icon/sprinkler.png';
// import tractor from '../../assets/icon/tractor.png';
// import tree from '../../assets/icon/tree.png';
// import patch from '../../assets/icon/patch.png';
// import heart from '../../assets/icon/heart.png';
// import rabbit from '../../assets/icon/rabbit.png';
// import pruningshears from '../../assets/icon/pruning-shears.png';
// import humidity from '../../assets/icon/humidity.png';
// import plague from '../../assets/icon/plague.png';



export function ButtonState({ data, onButtonClick }) {
  //states

  const [estado, setEstado] = useState('No Leído');
  const formData = data;

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

  const [/* users */, setUsers] = useState([]);

  /* ***************************************************** */
  useEffect(() => {
    fetch("http://localhost:3200/users")
      .then(response => response.json())
      .then(data => {
        console.log("Lista de usuarios:", data);
        setUsers(data);
      })
      .catch(error => {
        console.error("Error al obtener la lista de usuarios:", error);
      });
  }, []);
  /* ***************************************************** */


  const handleTabSelect = (tabName) => {
    setActiveTab(tabName);
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
  };

  const openModal2 = () => {
    setShowModal2(true);
  };

  const closeModal2 = () => {
    setShowModal2(false);
  };



  const handleGuardarAsignar = () => {
    // Aquí puedes realizar la lógica para guardar y asignar la tarea
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
            onButtonClick(data);
          }}
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
        centered-top="true"
        size="lg">

        <Modal.Header closeButton>
          <Modal.Title>Formulario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs
            activeKey={activeTab}
            onSelect={handleTabSelect}
            className="mb-3"
          >
            <Tab eventKey="datos" title="Datos">
              {formData && (
                <>
                  <div className="container border rounded table-separate">
                    <table className="table table-striped table-responsive">
                      <thead>
                        <tr>
                          <th scope="col">ID Formulario</th>
                          <th scope="col">Tipo</th>
                          <th scope="col">Fecha y Hora</th>
                          <th scope="col">Sector</th>
                          <th scope="col">Tipo Sector</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">{formData.form_id}</th>
                          <td>{formData.type}</td>
                          <td>{formData.__properties__.dateTime}</td>
                          <td>{formData.geometry.gid}</td>
                          <td>{formData.geometry.type}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {
                    formData.__properties__.formCompaction && <CompactionForm formData={formData} nameForm={"Compactación"} />
                  }
                  {
                    formData.__properties__.formCount && <CountForm formData={formData} nameForm={"Conteo"} />
                  }
                  {
                    formData.__properties__.formDamage && <DamageForm formData={formData} nameForm={"Daño"} />
                  }
                  {
                    formData.__properties__.formDiseases && <DiseasesForm formData={formData} nameForm={"Enfermedades"} />
                  }
                  {
                    formData.__properties__.formFauna && <FaunaForm formData={formData} nameForm={"Fauna"} />
                  }
                  {
                    formData.__properties__.formGirdling && <GirdlingForm formData={formData} nameForm={"Anillado"} />
                  }
                  {
                    formData.__properties__.formHumidity && <HumidityForm formData={formData} nameForm={"Humedad"} />
                  }
                  {
                    formData.__properties__.formPlague && <PlagueForm formData={formData} nameForm={"Plaga"} />
                  }
                  {
                    formData.__properties__.formSprinkler && <SprinklerForm formData={formData} nameForm={"Aspersor"} />
                  }

                  <div className="container border rounded table-separate">
                    <table className="table table-striped table-responsive">
                      <thead>
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">Coordenadas</th>
                          <th scope="col">Tipo Ubicacion</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">{formData.__properties__.userId}</th>
                          <td>{formData.geometry.gid}</td>
                          <td>{formData.geometry.coordinates.join(", ")}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </Tab>


            <Tab eventKey="ubicacion" title="Ubicación">
              {
                formData && (
                  <>
                    {
                      (() => {
                        let [lat, lon] = formData.geometry.coordinates;
                        return (
                          <div className="mapbox-container container-fluid">
                            <div className="row">
                              <div className="col-12">
                                <h3>Ubicación</h3>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <MapComponent lat={lon} lon={lat} />
                              </div>
                            </div>
                          </div>
                        );
                      })()
                    }
                  </>
                )
              }
            </Tab>

            <Tab eventKey="imagen" title="Imagen">
              {/* {
                formData && formData.properties && Object.entries(formData.properties).map(([key, value]) => {
                  if (value === null) return null; // Si el valor es nulo, no hagas nada
                  let imagen;

                  switch (key) {
                    case 'formSprinkler':
                      imagen = <img style={{ width: "650px" }} src={sprinkler} alt="Imagen del formulario" />;
                      break;
                    case 'formCompaction':
                      imagen = <img style={{ width: "650px" }} src={tractor} alt="Imagen del formulario" />;
                      break;
                    case 'formCount':
                      imagen = <img style={{ width: "650px" }} src={tree} alt="Imagen del formulario" />;
                      break;
                    case 'formDamage':
                      imagen = <img style={{ width: "650px" }} src={patch} alt="Imagen del formulario" />;
                      break;
                    case 'formDiseases':
                      imagen = <img style={{ width: "650px" }} src={heart} alt="Imagen del formulario" />;
                      break;
                    case 'formFauna':
                      imagen = <img style={{ width: "650px" }} src={rabbit} alt="Imagen del formulario" />;
                      break;
                    case 'formGirdling':
                      imagen = <img style={{ width: "650px" }} src={pruningshears} alt="Imagen del formulario" />;
                      break;
                    case 'formHumidity':
                      imagen = <img style={{ width: "650px" }} src={humidity} alt="Imagen del formulario" />;
                      break;
                    case 'formPlague':
                      imagen = <img style={{ width: "650px" }} src={plague} alt="Imagen del formulario" />;
                      break;
                    default:
                      return null; // Si la clave no coincide con ninguna de las esperadas, no hagas nada
                  }

                  return (
                    <div>
                      {imagen}
                      <p>Nombre del formulario:</p>
                      <p>Estado:</p>
                    </div>
                  )
                })
              } */}
            </Tab>

          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal2}
        onHide={closeModal2}
        centered-top="true">
        <Modal.Header closeButton>
          <Modal.Title>Asignar Tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* INGRESO DE ASIGNACION TAREA. */}
          <NewTask data={formData} />
          {/* INGRESO DE ASIGNACION TAREA. */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal2}>
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