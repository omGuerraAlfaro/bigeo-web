import React, { useState } from "react";
import "./buttonFilter.css";
import { FormType } from "./formFindFilter/formType";
import { FormUser } from "./formFindFilter/formUser";
import { FormDate } from "./formFindFilter/formDate";

const ButtonFilter = (props) => {
  const { clase, nombre, color, tamaño, filtro, onFilterChange } = props;

  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (filtro) => {
    if (activeButton === filtro) {
      setActiveButton(null); // desactivar si ya está activo
    } else {
      setActiveButton(filtro); // activar si no está activo
    }
  };

  const renderForm = () => {
    if (activeButton === filtro) {
      switch (filtro) {
        case 'tipo':
          return <FormType onFormSubmit={onFilterChange} />;
        case 'user':
          return <FormUser onFormSubmit={onFilterChange} />;
        case 'fecha':
          return <FormDate onFormSubmit={onFilterChange} />;
        default:
          return null;
      }
    }
    return null;
  };

  return (
    <div className="row mx-3">
      <button onClick={() => handleClick(filtro)}className={`btn btn-${color} btn-${tamaño} ${clase} ${activeButton === filtro ? 'active' : ''}`}>{nombre}</button>
      {renderForm()}
    </div>
  );
};

export default ButtonFilter;
