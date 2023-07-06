import React, { useState } from "react";
import { Modal, Button, Tabs, Tab, } from "react-bootstrap";
import axios from 'axios';
import Swal from 'sweetalert2'

import "./buttonStateTask.css";
import { CompactionForm } from "../filterTableModal/formCompaction";
import { CountForm } from "../filterTableModal/formCount";
import { DamageForm } from "../filterTableModal/formDamage";
import { DiseasesForm } from "../filterTableModal/formDiseases";
import { FaunaForm } from "../filterTableModal/formFauna";
import { GirdlingForm } from "../filterTableModal/formGirdling";
import { HumidityForm } from "../filterTableModal/formHumidity";
import { PlagueForm } from "../filterTableModal/formPlague";
import { SprinklerForm } from "../filterTableModal/formSprinkler";
import MapComponent from "../geolocation/geolocation";

//images
import sprinkler from '../../assets/icon/sprinkler.png';
import tractor from '../../assets/icon/tractor.png';
import tree from '../../assets/icon/tree.png';
import patch from '../../assets/icon/patch.png';
import heart from '../../assets/icon/heart.png';
import rabbit from '../../assets/icon/rabbit.png';
import pruningshears from '../../assets/icon/pruning-shears.png';
import humidity from '../../assets/icon/humidity.png';
import plague from '../../assets/icon/plague.png';



export function ButtonStateTask({ data }) {
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
  let estadoTask;

  if (data && data.task !== undefined && data.task !== null) {
    estadoTask = data.task.status;
  }
  if (estadoTask === undefined || estadoTask === null) {
    estadoTask = 'Sin Asignar';
  }

  const [estado, /* setEstado */] = useState(estadoTask);

  //tabs
  const [activeTab, setActiveTab] = useState('datos');

  //Modal
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleTabSelect = (tabName) => {
    setActiveTab(tabName);
  };

  //Modificador de estado de la tarea
  const updateData = async (id, status) => {
    const url = `https://bigeo-api.onrender.com/tasks/${id}/status`;
    const body = { "status": status };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.put(url, body, config);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };


  //for desktop ******************** 
  const marcarFinalizado = (data) => {
    updateData(data.task.task_id, "Finalizado");
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Tarea Finalizada Exitosamente',
      showConfirmButton: false,
      timer: 2000
    })
    setTimeout(() => {
      window.location.reload();
    }, 2005);
  };
  //for desktop ********************

  //for mobile ********************
  const marcarLeido = (data) => {
    if (data.task !== null) {
      updateData(data.task.task_id, "Leído");
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tarea Leida Exitosamente',
        showConfirmButton: false,
        timer: 2000
      })
      setTimeout(() => {
        window.location.reload();
      }, 2005);

    } else {
      Swal.fire({
        title: 'Error!',
        text: 'No se puede marcar como leído una tarea sin asignar',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  };

  const marcarEfectuado = (data) => {
    if (data.task !== null | data.task.status === "Leido" | data.task.status === "Sin Asignar") {
      updateData(data.task.task_id, "Efectuado");
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tarea Efectuada Exitosamente, se espera Aprobación...',
        showConfirmButton: false,
        timer: 2000
      })
      setTimeout(() => {
        window.location.reload();
      }, 2005);

    } else {
      Swal.fire({
        title: 'Error!',
        text: 'No se puede marcar como leído una tarea sin asignar',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  };
  //for mobile ********************


  //translate form name
  const getFormName = (properties) => {
    const translations = {
      "formSprinkler": "Formulario de Riego",
      "formDamage": "Formulario de Daños",
      "formHumidity": "Formulario de Humedad",
      "formPlague": "Formulario de Plagas",
      "formDiseases": "Formulario de Enfermedades",
      "formFauna": "Formulario de Fauna",
      "formGirdling": "Formulario de Anillado",
      "formCount": "Formulario de Conteo",
      "formCompaction": "Formulario de Compactación",
    };

    for (let key in properties) {
      if (properties[key] !== null && key in translations) {
        return translations[key];
      }
    }

    return "Unknown Form";
  };

  return (
    <div>
      <p className={`estado-${estado.toLowerCase().replace(' ', '-')}`}>Estado: {estado}</p>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => {
            openModal();
          }}
        >
          Ver
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => {
            marcarLeido(data); //FOR MOBILE
          }}
          disabled={estado === 'Sin Asignar' | estado === 'Finalizado' | estado === 'Leído' | estado === 'Efectuado'}
        >
          Leer
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => {
            marcarEfectuado(data); //FOR MOBILE
          }}
          disabled={estado === 'Sin Asignar' | estado === 'Tarea Asignada' | estado === 'Finalizado' | estado === 'Efectuado'}
        >
          Efectuar
        </button>
        <button
          type="button"
          className="btn btn-outline-danger "
          onClick={() => {
            marcarFinalizado(data); //FOR DESKTOP
          }}
          disabled={estado === 'Tarea Asignada' | estado === 'Leído' | estado === 'Sin Asignar' | estado === 'Finalizado'}
        >
          Finalizar
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
                          <th scope="col" className="text-center">Fecha y Hora</th>
                          <th scope="col" className="text-center">Sector</th>
                          <th scope="col" className="text-center">Tipo Sector</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center">{new Date(formData.__properties__.dateTime).toLocaleDateString()}</td>
                          <td className="text-center">{formData.geometry.gid}</td>
                          <td className="text-center">{formData.geometry.type}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>


                  <div className="container border rounded table-separate my-2">
                    <table className="table table-striped table-responsive">
                      <thead>
                        <tr>
                          <th scope="col" className="text-center">Geolocalización</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center">{formData.geometry.coordinates.join(", ")}</td>
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
                formData && [
                  ...(formData.__properties__ ? Object.entries(formData.__properties__) : []),
                  ...(formData.task ? Object.entries(formData.task) : []),
                ].map(([key, value]) => {
                  if (value === null || !(key in formImageMap)) return null;

                  let formName = getFormName(formData.__properties__);

                  let status = formData.task && formData.task.status ? formData.task.status : "Sin Asignar";
                  let assign = formData.task && formData.task.assigned_user ? formData.task.assigned_user : "";
                  let limit = formData.task && formData.task.dateTimeLimit ? formData.task.dateTimeLimit : "";
                  let obs = formData.task && formData.task.observation ? formData.task.observation : "";

                  return (
                    <div key={key} className="row">
                      <div className="col-6 text-center border">
                        <img style={{ width: "250px" }} src={formImageMap[key]} alt="Imagen del formulario" />
                        <div><small><i>Imagen Referencial</i></small></div>
                      </div>
                      <div className="col-6">
                        <p className="text-capitalize"><strong>Tipo formulario:</strong> {formName}</p>
                        <p className="text-capitalize"><strong>Estado:</strong> {status}</p>
                        <p className="text-capitalize"><strong>Asignado a:</strong> {assign}</p>
                        <p className="text-capitalize"><strong>Fecha limite:</strong> {limit ? new Date(limit).toLocaleDateString() : ''}</p>
                        <p className="text-capitalize"><strong>Descripción:</strong> {obs}</p>
                      </div>
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
    </div>
  );
}