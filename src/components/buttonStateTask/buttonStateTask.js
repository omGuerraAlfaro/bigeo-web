import React, { useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2'

import "./buttonStateTask.css";


export function ButtonStateTask({ data }) {
  //states
  let estadoTask;

  if (data && data.task !== undefined && data.task !== null) {
    estadoTask = data.task.status;
  }
  if (estadoTask === undefined || estadoTask === null) {
    estadoTask = 'Sin Asignar';
  }

  const [estado, /* setEstado */] = useState(estadoTask);


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


  return (
    <div>
      <p className={`estado-${estado.toLowerCase().replace(' ', '-')}`}>Estado: {estado}</p>
      <div className="btn-group" role="group" aria-label="Basic example">
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
    </div>
  );
}