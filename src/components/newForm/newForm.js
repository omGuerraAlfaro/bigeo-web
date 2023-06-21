import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

const NewForm = props => {
  const { formData } = props;
  const [formState, setFormState] = useState({
    dateTime: "",
    status: "",
    assignedUser: "",
    assignedForm: formData, // almacenamos formData en assignedForm
    observation: "",
    priority: "",
  });
  const [users, setUsers] = useState([]);

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

  const handleUserSelection = (user) => {
    setFormState(prevState => ({...prevState, assignedUser: user}));
  };

  const handlePrioritySelection = (priority) => {
    setFormState(prevState => ({...prevState, priority}));
  };

  const handleObservationChange = (event) => {
    setFormState(prevState => ({...prevState, observation: event.target.value}));
  };

  console.log(formState);
  return (
    <>
      <Form>
        <Form.Group controlId="formOpcionesDesplegables">

          <Form.Label>
            <h4>Ejecutor</h4>
          </Form.Label>
          <Dropdown className="users-select" onSelect={handleUserSelection}>
            <Dropdown.Toggle variant="secondary" id="users">
              {formState.assignedUser ? formState.assignedUser : "Seleccionar Usuario"}
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

          <Form.Label><h4>Prioridad</h4></Form.Label>
          <Dropdown onSelect={handlePrioritySelection}>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">              
              {formState.priority ? formState.priority : "Seleccionar Prioridad"}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="Alta">Alta</Dropdown.Item>
              <Dropdown.Item eventKey="Media">Media</Dropdown.Item>
              <Dropdown.Item eventKey="Baja">Baja</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Form.Label><h4>Observaciones</h4></Form.Label>
          <Form.Control
            type="text"
            placeholder="Escriba el texto aquí"
            onChange={handleObservationChange}
            as="textarea"
            rows={3}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default NewForm;
