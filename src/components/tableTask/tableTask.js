import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./tableTask.css";
import ButtonFilter from "../buttonFilter/buttonFilter";

//Formularios
import { TaskFormSprinkler } from "../filterTableTask/TaskformSprinkler";
import { TaskFormFauna } from "../filterTableTask/TaskformFauna";
import { TaskFormCount } from "../filterTableTask/TaskformCount";
import { TaskFormHumidity } from "../filterTableTask/TaskformHumidity";
import { TaskFormPlague } from "../filterTableTask/TaskformPlague";
import { TaskFormGirdling } from "../filterTableTask/TaskformGirdling";
import { TaskFormDiseases } from "../filterTableTask/TaskformDiseases";
import { TaskFormDamage } from "../filterTableTask/TaskformDamage";
import { TaskFormCompaction } from "../filterTableTask/TaskformCompaction";

function Task(props) {
    const [currentPage, setCurrentPage] = useState(0);
    const elementsPerPage = 5;
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const [tableData, setTableData] = useState([]);

    const [/* filterType */, setFilterType] = useState(null);
    const [/* filterUser */, setFilterUser] = useState(null);
    const [/* filterDate */, setFilterDate] = useState(null);

    //get tasks
    useEffect(() => {
        let url = "http://localhost:3200/tasks";

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const fetchData = async () => {
            try {
                const response = await axios.get(url, config);
                const data = response.data;
                console.log(data);
                setTableData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error.message);
            }
        };

        fetchData();
    }, []);




    const displayedData = (tableData || []).slice(
        currentPage * elementsPerPage,
        currentPage * elementsPerPage + elementsPerPage
    );

    return (
        <div>
            <div className="container-flow mx-5 data-table zindex">
                <div className="container-rounded">
                    <div className="row">
                        <div className="col-md-2 col-12">
                            <div className="container d-flex justify-content-center py-5">
                                <div className="border rounded p-1">
                                    <h4 className="text-center">Filtros</h4>
                                    <ButtonFilter
                                        clase="mx-1 my-2 px-5"
                                        nombre="Tipo Formulario"
                                        color="secondary"
                                        tamaño="sm"
                                        filtro="tipo"
                                        onFilterChange={setFilterType}
                                    />
                                    <ButtonFilter
                                        clase="mx-1 my-2 px-5"
                                        nombre="Usuario"
                                        color="secondary"
                                        tamaño="sm"
                                        filtro="user"
                                        onFilterChange={setFilterUser}
                                    />
                                    <ButtonFilter
                                        clase="mx-1 my-2 px-5"
                                        nombre="Fecha"
                                        color="secondary"
                                        tamaño="sm"
                                        filtro="fecha"
                                        onFilterChange={setFilterDate}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10 col-12">
                            <h1 className="titulo">Lista de Tareas Asignadas</h1>
                            <div className="table-responsive overflow-x-auto">
                                <div className="scroll">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="text-center">Usuario Asignado</th>
                                                <th scope="col" className="text-center">Fecha Asignación</th>
                                                <th scope="col" className="text-center">Fecha Limite</th>
                                                <th scope="col" className="text-center">Observaciones</th>
                                                <th scope="col" className="text-center">Prioridad</th>
                                                <th scope="col" className="text-center">Datos Formularios</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {displayedData.map((task) => {
                                                let formComponent;

                                                if (task.assigned_form.__properties__.formSprinkler) {
                                                    formComponent = <TaskFormSprinkler formData={task} nameForm={"Aspersor"} />;
                                                } else if (task.assigned_form.__properties__.formCompaction) {
                                                    formComponent = <TaskFormCompaction formData={task} nameForm={"Compactación"} />;
                                                } else if (task.assigned_form.__properties__.formCount) {
                                                    formComponent = <TaskFormCount formData={task} nameForm={"Conteo"} />;
                                                } else if (task.assigned_form.__properties__.formDamage) {
                                                    formComponent = <TaskFormDamage formData={task} nameForm={"Daño"} />;
                                                } else if (task.assigned_form.__properties__.formDiseases) {
                                                    formComponent = <TaskFormDiseases formData={task} nameForm={"Enfermedades"} />;
                                                } else if (task.assigned_form.__properties__.formFauna) {
                                                    formComponent = <TaskFormFauna formData={task} nameForm={"Fauna"} />;
                                                } else if (task.assigned_form.__properties__.formGirdling) {
                                                    formComponent = <TaskFormGirdling formData={task} nameForm={"Anillado"} />;
                                                } else if (task.assigned_form.__properties__.formHumidity) {
                                                    formComponent = <TaskFormHumidity formData={task} nameForm={"Humedad"} />;
                                                } else if (task.assigned_form.__properties__.formPlague) {
                                                    formComponent = <TaskFormPlague formData={task} nameForm={"Plaga"} />;
                                                }

                                                return (
                                                    <tr key={task.task_id}>
                                                        <td className="text-center  align-middle">{task.assigned_user}</td>
                                                        <td className="text-center  align-middle">{new Date(task.dateTime).toLocaleDateString()}</td>
                                                        <td className="text-center  align-middle">{new Date(task.dateTimeLimit).toLocaleDateString()}</td>
                                                        <td className="text-center breakTxt align-middle">{task.observation}</td>
                                                        <td className="text-center  align-middle">{task.priority}</td>
                                                        <td>
                                                            {formComponent}
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <ReactPaginate
                                previousLabel={"Anterior"}
                                nextLabel={"Siguiente"}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={Math.ceil((tableData?.length || 0) / elementsPerPage)}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={3}
                                onPageChange={handlePageChange}
                                containerClassName={"pagination"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Task;
