import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export const NewTask = props => {
  const { data } = props;
  const [formData, setFormData] = useState(data);
  const [newTask, setNewTask] = useState({
    dateTime: "",
    dateTimeLimit: "",
    status: "asignada",
    assigned_user: "",
    assigned_form: formData,
    observation: "",
    priority: "",
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3200/users")
      .then(response => {
        console.log("Lista de usuarios:", response.data);
        setUsers(response.data);
      })
      .catch(error => {
        console.error("Error al obtener la lista de usuarios:", error);
      });
  }, []);

  const handleSubmit = async () => {
    let url = "http://localhost:3200/tasks";

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(url, newTask, config);
      const data = response.data;
      console.log(data);
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
        <Form.Group controlId="formOpcionesDesplegables">
          <Form.Label>
            <h4 className="mb-3">Ejecutor</h4>
          </Form.Label>
          <Dropdown className="users-select mb-3" onSelect={handleUserSelection}>
            <Dropdown.Toggle variant="secondary" id="users">
              {newTask.assigned_user ? newTask.assigned_user : "Seleccionar Usuario"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
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

          <Form.Label className="mb-3">
            <h4>Prioridad</h4>
          </Form.Label>
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

          <Form.Label className="mb-3">
            <h4>Fecha Límite</h4>
          </Form.Label>
          <Form.Control 
            type="date"
            onChange={handleDeadlineChange}
            className="mb-3"
          />

          <Form.Label className="mb-3">
            <h4>Observaciones</h4>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Escriba el texto aquí"
            onChange={handleObservationChange}
            as="textarea"
            rows={3}
            className="mb-3"
          />

          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};
