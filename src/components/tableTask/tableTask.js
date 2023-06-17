import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./tableTask.css";
import ButtonFilter from "../buttonFilter/buttonFilter";

function Task(props) {
    const [currentPage, setCurrentPage] = useState(0);
    const elementsPerPage = 5;
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const [tableData, setTableData] = useState([]);
    const [error, setError] = useState(null);


    const [filterType, setFilterType] = useState(null);
    const [filterUser, setFilterUser] = useState(null);
    const [filterDate, setFilterDate] = useState(null);

    useEffect(() => {
        let url = "http://localhost:3400/tasks";

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
                                                <th scope="col" className="text-center">Acciones</th>
                                                <th scope="col" className="text-center">Usuario Responsable</th>
                                                <th scope="col" className="text-center">Fecha y Hora</th>
                                                <th scope="col" className="text-center">Datos Formularios</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {displayedData.map((task, index) => (
                                                <tr key={index}>
                                                    <td className="text-center">{task.status}</td>
                                                    <td className="text-center">{task.assigned_user}</td>
                                                    <td className="text-center">{new Date(task.dateTime).toLocaleString()}</td>
                                                    <td className="text-center">{JSON.stringify(task.assigned_form)}</td>
                                                </tr>
                                            ))}
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
