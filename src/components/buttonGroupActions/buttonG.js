import React from "react";

import "./buttonG.css";

export function ButtonG(props) {
  return (
    <div>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-outline-secondary">
          Ver
        </button>
        <button type="button" class="btn btn-outline-secondary">
          Asignar
        </button>
        <button type="button" class="btn btn-outline-secondary">
          Completar
        </button>
      </div>
    </div>
  );
}
