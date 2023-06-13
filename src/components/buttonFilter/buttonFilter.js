import React, { useState } from "react";
import "./buttonFilter.css";
import { FormType } from "./formFindFilter/formType";
import { FormUser } from "./formFindFilter/formUser";
import { FormDate } from "./formFindFilter/formDate";

const ButtonFilter = (props) => {
  const { clase, nombre, color, tamaño, onClick } = props;

  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (nombre) => {
    setActiveButton(nombre);
  };

  const renderForm = () => {
    switch (activeButton) {
      case 'Tipo':
        return <FormType />;
      case 'Encargado':
        return <FormUser />;
      case 'Fecha':
        return <FormDate />;
      default:
        return null;
    }
  };

  return (
    <div>
      <button
        className={`btn btn-${color} btn-${tamaño} ${clase}`}
        onClick={handleClick}>{nombre}
      </button>
      {renderForm()}
    </div>
  );
};

export default ButtonFilter;

