import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Swal from 'sweetalert2'

import "./newTask.css";

export const NewTask = props => {
  const { data } = props;
  const [formData, /* setFormData */] = useState(data);
  const [newTask, setNewTask] = useState({
    dateTime: "",
    dateTimeLimit: "",
    status: "Tarea Asignada",
    assigned_user: "",
    assigned_form: formData.form_id,
    observation: "",
    priority: "",
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://bigeo-api.onrender.com/users")
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error("Error al obtener la lista de usuarios:", error);
      });
  }, []);

  const handleSubmit = async () => {
    let url = "https://bigeo-api.onrender.com/tasks";

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(url, newTask, config);
      const data = response.data;
      console.log(data);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tarea Asignada Exitosamente',
        showConfirmButton: false,
        timer: 2000
      })
      setTimeout(() => {
        window.location.reload();
      }, 2005);
      props.closeModal();
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const handleUserSelection = (user) => {
    setNewTask(prevState => ({ ...prevState, assigned_user: user }));
  };

  const handlePrioritySelection = (priority) => {
    setNewTask(prevState => ({ ...prevState, priority }));
  };

  const handleDeadlineChange = (event) => {
    setNewTask(prevState => ({ ...prevState, dateTimeLimit: event.target.value }));
  };

  const handleObservationChange = (event) => {
    setNewTask(prevState => ({ ...prevState, observation: event.target.value }));
  };

  console.log(newTask);

  return (
    <>
      <Form>
        <Form.Group controlId="formOpcionesDesplegables" >
          <h4 className="mb-3">Ejecutor</h4>
          <Dropdown className="users-select mb-3" onSelect={handleUserSelection}>
            <Dropdown.Toggle variant="secondary" id="users">
              {newTask.assigned_user ? newTask.assigned_user : "Seleccionar Usuario"}
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ maxHeight: '200px', overflowY: 'scroll' }}>
              {users.map((user, index) => (
                <Dropdown.Item
                  key={index}
                  eventKey={user.username}
                >
                  {user.username}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>


          <h4>Prioridad</h4>
          <Dropdown className="mb-3" onSelect={handlePrioritySelection}>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              {newTask.priority ? newTask.priority : "Seleccionar Prioridad"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="Alta">Alta</Dropdown.Item>
              <Dropdown.Item eventKey="Media">Media</Dropdown.Item>
              <Dropdown.Item eventKey="Baja">Baja</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>


          <h4>Fecha Límite</h4>
          <Form.Control
            type="date"
            onChange={handleDeadlineChange}
            className="mb-3"
          />


          <h4>Observaciones</h4>
          <Form.Control
            type="text"
            placeholder="Escriba el texto aquí"
            onChange={handleObservationChange}
            as="textarea"
            rows={3}
            className="mb-3"
          />

          <div className="d-flex justify-content-end">
            <Button variant="primary" onClick={handleSubmit} >
              Asignar Tarea
            </Button>
          </div>
        </Form.Group>
      </Form>
    </>
  );
};
