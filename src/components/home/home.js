import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { ButtonG } from "../buttonGroupActions/buttonG";
import ButtonFilter from "../buttonFilter/buttonFilter";
import fondo from "../../assets/img/fondoPalta.jpg";
import Navbar from "../navbar/navbar";
import "./home.css";
import Footer from "../footer/footer";

function HomeViewAdmin(props) {
  const [currentPage, setCurrentPage] = useState(0);
  const elementsPerPage = 5;
  const nombreUser = localStorage.getItem('name_user');

  const handleClick = () => {
    console.log("click");
  };
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(null);

  const fetchTableData = async () => {
    try {
      const url = 'http://localhost:3400/forms';
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.get(url, config);
      setTableData(response.data);
      console.log(response.data);
    } catch (error) {
      setError("Error al obtener los datos de la tabla: " + error);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTableData();
  }, []);

  const displayedData = (tableData || []).slice(currentPage * elementsPerPage, (currentPage * elementsPerPage) + elementsPerPage);

  return (
    <div>
      <Navbar nombreUser={nombreUser} />

      <img src={fondo} className="fondo"></img>
      <div className="container data-table">
        <div className="container-rounded">
          <div className="container d-flex g-3 justify-content-end">
            <div className="border rounded p-1">
              <h6 className="text-center">Filtrar por:</h6>
              <ButtonFilter
                clase="mx-1"
                nombre="Tipo"
                color="danger"
                tamaño="sm"
                onClick={handleClick}
              />
              <ButtonFilter
                clase="mx-1"
                nombre="Encargado"
                color="secondary"
                tamaño="sm"
                onClick={handleClick}
              />
              <ButtonFilter
                clase="mx-1"
                nombre="Fecha"
                color="secondary"
                tamaño="sm"
                onClick={handleClick}
              />
            </div>
          </div>
          <h1 className="titulo">Lista Tareas</h1>
          <div class="table-responsive">
            <div className="scroll">
              <table className="table table-striped table-responsive">
                <thead>
                  <tr>
                    <th scope="col">ID Formulario</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Fecha y Hora</th>
                    <th scope="col">Sector</th>
                    <th scope="col">Tipo Sector</th>
                    <th scope="col" class="text-center">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {displayedData.map((item) => (
                    <tr key={item.id}>
                      <th scope="row">{item.form_id}</th>
                      <td>{item.type}</td>
                      <td>{item.properties.dateTime}</td>
                      <td>{item.geometry.gid}</td>
                      <td>{item.geometry.type}</td>
                      <td className="text-center">
                        <ButtonG data={item} onButtonClick={(selectedItem) => console.log(selectedItem)} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {error && <p>Error: {error}</p>}
            </div>
          </div>
          <ReactPaginate
            previousLabel={"Anterior"}
            nextLabel={"Siguiente"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={Math.ceil((tableData?.length || 0) / elementsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />

        </div>
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default HomeViewAdmin;
