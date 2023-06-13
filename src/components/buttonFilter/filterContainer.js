import React, { useState } from 'react';
import ButtonFilter from './buttonFilter';

function FilterContainer() {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (nombre) => {
    setActiveButton(nombre);
  };

  const renderForm = () => {
    switch (activeButton) {
      case 'Tipo':
        return <TipoForm />;
      case 'Encargado':
        return <EncargadoForm />;
      case 'Fecha':
        return <FechaForm />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="container d-flex justify-content-center py-5">
        <div className="border rounded p-1">
          <h4 className="text-center">Filtros</h4>
          <ButtonFilter
            clase="mx-1"
            nombre="Tipo"
            color="danger"
            tamaño="sm"
            onClick={() => handleClick('Tipo')}
          />
          <ButtonFilter
            clase="mx-1"
            nombre="Encargado"
            color="secondary"
            tamaño="sm"
            onClick={() => handleClick('Encargado')}
          />
          <ButtonFilter
            clase="mx-1"
            nombre="Fecha"
            color="secondary"
            tamaño="sm"
            onClick={() => handleClick('Fecha')}
          />
        </div>
        {renderForm()}
      </div>
    </div>
  );
}

export default FilterContainer;
