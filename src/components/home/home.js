import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "bootstrap/dist/css/bootstrap.css";
import { ButtonG } from "../buttonGroupActions/buttonG";
import { Table } from "../table/table";
import ButtonFilter from "../buttonFilter/buttonFilter";
import logo from "../../assets/img/LogoBIGEO.png";
import fondo from "../../assets/img/fondoPalta.jpg";
import Navbar from "../navbar/navbar";
import "./home.css";
import Footer from "../footer/footer";

function HomeViewAdmin(props) {
  const [currentPage, setCurrentPage] = useState(0);
  const elementsPerPage = 15;

  const handleClick = () => {
    console.log("click");
  };
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const data = [
    {
        "form_id": 2,
        "type": "Feature",
        "image": null,
        "properties": {
            "propid": 2,
            "userId": "Iparra",
            "dateTime": "2023-01-17T16:26:11.574Z",
            "formSprinkler": {
                "spid": 1,
                "spcode": "sp-1",
                "defect": "tapado",
                "repaired": "no",
                "observation": null
            },
            "formDamage": null,
            "formHumidity": null,
            "formCompaction": null,
            "formFauna": null,
            "formCount": null,
            "formDiseases": null,
            "formGirdling": null,
            "formPlague": null
        },
        "geometry": {
            "gid": 31,
            "type": "Point",
            "coordinates": [
                -71.0509466,
                -32.8408526
            ]
        }
    }
]
;

  const startIndex = currentPage * elementsPerPage;
  const endIndex = startIndex + elementsPerPage;
  const displayedData = data.slice(startIndex, endIndex);
  const [tableData, setTableData] = useState([]);

  const fetchTableData = async () => {
    try {
      const url = 'http://localhost:3000/auth/login';
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
  
      const response = await axios.post(url, credentials, config);
      console.log(response);
      const data = response;
      return data;
      console.log(data);
    } catch (error) {
      console.log("Error al obtener los datos de la tabla:", error);
    }
  };
  useEffect(() => {
    fetchTableData();
  }, []);

  return (
    <div>
      <Navbar />

      <img src={fondo} className="fondo"></img>
      <div className="container data-table">
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
                  <th scope="col">Nombre</th>
                  <th scope="col">Sector</th>
                  <th scope="col">Fecha</th>
                  <th scope="col" class="text-center">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                <tbody>
                  {tableData.map((item) => (
                    <tr key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td>{item.tipo}</td>
                      <td>{item.nombre}</td>
                      <td>{item.sector}</td>
                      <td>{item.fecha}</td>
                      <td className="text-center">
                        <ButtonG />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </tbody>
            </table>
          </div>
        </div>
        <ReactPaginate
          previousLabel={"Anterior"}
          nextLabel={"Siguiente"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(data.length / elementsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>

      <Footer />
    </div>
  );
}

export default HomeViewAdmin;