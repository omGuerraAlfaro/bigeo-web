import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DatePicker from 'react-datepicker';

// La estructura inicial del estado del formulario
const initialFormState = {
  dateTime: "",
  status: "",
  assignedUser: "",
  assignedForm: {
    info_form1: "",
    info_form2: "",
    info_form3: "",
    info_form4: ""
  },
  observation: "",
}

const NewForm = () => {
  const [formState, setFormState] = useState(initialFormState);
  const [fechaInicio, setFechaInicio] = useState(null);
  const [fechaFin, setFechaFin] = useState(null);
  const [diasEntreFechas, setDiasEntreFechas] = useState(0);
  const [users, setUsers] = useState([]); // Supongo que debes obtener los usuarios de alguna manera

  const handleOpcionSeleccionada1 = (username) => {
    setFormState({ ...formState, assignedUser: username });
  };

  const handleOpcionSeleccionada2 = (priority) => {
    setFormState({
      ...formState,
      assignedForm: {
        ...formState.assignedForm,
        info_form1: priority,
      },
    });
  };

  const handleFechaInicioChange = (date) => {
    setFechaInicio(date);
    setFormState({ ...formState, dateTime: new Date().toISOString() });
  };

  const handleFechaFinChange = (date) => {
    setFechaFin(date);
    // Aquí puedes calcular los días entre las fechas y establecer diasEntreFechas
  };

  const handleTextoInputChange = (event) => {
    setFormState({ ...formState, observation: event.target.value });
  };

  return (
    <>
      <Form>
        <Form.Group controlId="formOpcionesDesplegables">
          <Form.Label>
            <h4>Ejecutor</h4>
          </Form.Label>
          <Dropdown className="users-select" onSelect={handleOpcionSeleccionada1}>
            <Dropdown.Toggle variant="secondary" id="users">
              {formState.assignedUser ? formState.assignedUser : "Seleccionar Usuario"}
            </Dropdown.Toggle>
            <Dropdown.Menu type="submit" value="Submit">
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
          <Form.Label><h4>Plazo</h4></Form.Label>
          <div className="date-pickers-container">
            <div>
              <span>Desde:</span>
              <DatePicker
                selected={fechaInicio}
                onChange={handleFechaInicioChange}
                dateFormat="dd/MM/yyyy"
                className="form-control datepicker-sm"
              />
            </div>
            <div>
              <span>Hasta:</span>
              <DatePicker
                selected={fechaFin}
                onChange={handleFechaFinChange}
                dateFormat="dd/MM/yyyy"
                className="form-control datepicker-sm ml-2"
              />
            </div>
            <div className="total-days">
              <span>Total de Días: {diasEntreFechas}</span>
            </div>
          </div>
          <Form.Label><h4>Prioridad</h4></Form.Label>
          <Dropdown onSelect={handleOpcionSeleccionada2}>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              {formState.assignedForm.info_form1 ? formState.assignedForm.info_form1 : "Seleccionar nivel"}
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
            placeholder="Escriba el texto aqui"
            value={formState.observation}
            onChange={handleTextoInputChange}
            as="textarea"
            rows={3}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default NewForm;
