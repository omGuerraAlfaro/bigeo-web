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
import sprinkler from '../../assets/icon/sprinkler.png';
import tractor from '../../assets/icon/tractor.png';
import tree from '../../assets/icon/tree.png';
import patch from '../../assets/icon/patch.png';
import heart from '../../assets/icon/heart.png';
import rabbit from '../../assets/icon/rabbit.png';
import pruningshears from '../../assets/icon/pruning-shears.png';
import humidity from '../../assets/icon/humidity.png';
import plague from '../../assets/icon/plague.png';


export function ButtonState({ data, onButtonClick }) {
  const formData = data;
  
  const formImageMap = {
    'formSprinkler': sprinkler,
    'formCompaction': tractor,
    'formCount': tree,
    'formDamage': patch,
    'formDiseases': heart,
    'formFauna': rabbit,
    'formGirdling': pruningshears,
    'formHumidity': humidity,
    'formPlague': plague,
  };
  

  
  //states
  let estadoTask = data.task;
  if (estadoTask === null) {
    estadoTask = 'Sin Asignar';
  }else{
    estadoTask = data.task.status;
  }
  const [estado, setEstado] = useState(estadoTask);

  // const marcarLeido = () => {
  //   let estadoTask = data.task;
  //   if (estadoTask === null) {
  //     estadoTask = 'Sin Asignar';
  //   }
  //   setEstado(estadoTask);
  // };
  
  // const marcarEnProceso = () => {
  //   let estadoTask = data.task;
  //   if (estadoTask === null) {
  //     estadoTask = 'Sin Asignar';
  //   }
  //   setEstado(estadoTask);
  // };
  
  // const marcarEfectuado = () => {
  //   let estadoTask = data.task;
  //   if (estadoTask === null) {
  //     estadoTask = 'Sin Asignar';
  //   }
  //   setEstado(estadoTask);
  // };

  // const marcarFinalizado = () => {
  //   let estadoTask = data.task;
  //   setEstado(estadoTask);
  // };



  //tabs
  const [activeTab, setActiveTab] = useState('datos');

  const [/* users */, setUsers] = useState([]);

  /* ***************************************************** */
  useEffect(() => {
    fetch("http://localhost:3200/users")
      .then(response => response.json())
      .then(data => {
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
  const [showModal2, setShowModal2] = useState(false);

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


  return (
    <div>
      <p className="estado">Estado: {estado}</p>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => {
            // marcarLeido();
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
            // marcarEnProceso();
            openModal2();

          }}
          disabled={estado === 'No Leído' | estado === 'Asignado y en Proceso' | estado === 'Finalizado'}
        >
          Asignar
        </button>
        <button
          type="button"
          className="btn btn-outline-danger "
          // onClick={marcarFinalizado}
          disabled={estado !== 'Asignado y en Proceso' | estado === 'Leído' | estado === 'No Leído'}
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


                  <div className="container border rounded table-separate my-2">
                    <table className="table table-striped table-responsive">
                      <thead>
                        <tr>
                          <th scope="col">Tipo</th>
                          <th scope="col">Fecha y Hora</th>
                          <th scope="col">Sector</th>
                          <th scope="col">Tipo Sector</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{formData.type}</td>
                          <td>{formData.__properties__.dateTime}</td>
                          <td>{formData.geometry.gid}</td>
                          <td>{formData.geometry.type}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>


                  <div className="container border rounded table-separate my-2">
                    <table className="table table-striped table-responsive">
                      <thead>
                        <tr>
                          <th scope="col">Geolocalización</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
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
            {
        formData?.__properties__ && Object.entries(formData.__properties__).map(([key, value]) => {
          if (value === null || !(key in formImageMap)) return null;

          return (
            <div key={key} className="text-center">
              <img style={{ width: "350px" }} src={formImageMap[key]} alt="Imagen del formulario" />
              <p>Nombre del formulario: {key}</p>
              <p>Estado: {/* Aquí debes poner el estado del formulario basado en el value */}</p>
            </div>
          );
        })
      }
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
          <NewTask data={formData} closeModal={closeModal2} />
          {/* INGRESO DE ASIGNACION TAREA. */}
        </Modal.Body>
      </Modal>
    </div>
  );
}