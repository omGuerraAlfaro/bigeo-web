import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { ButtonState } from "../../buttonState/buttonState";
import ButtonFilter from "../../buttonFilter/buttonFilter";
import fondo from "../../../assets/img/fondoPalta.jpg";
import Navbar from "../../theme/navbar/navbar";
import "./home.css";
import Footer from "../../theme/footer/footer";

//Formularios
import { HomeSprinklerForm } from "../../filterTableHome/HomeformSprinkler";
import { HomeFaunaForm } from "../../filterTableHome/HomeformFauna";
import { HomeCountForm } from "../../filterTableHome/HomeformCount";
import { HomeHumidityForm } from "../../filterTableHome/HomeformHumidity";
import { HomePlagueForm } from "../../filterTableHome/HomeformPlague";
import { HomeGirdlingForm } from "../../filterTableHome/HomeformGirdling";
import { HomeDiseasesForm } from "../../filterTableHome/HomeformDiseases";
import { HomeDamageForm } from "../../filterTableHome/HomeformDamage";
import { HomeCompactionForm } from "../../filterTableHome/HomeformCompaction";



function HomeViewAdmin(props) {
  const [currentPage, setCurrentPage] = useState(0);
  const elementsPerPage = 5;
  const nombreUser = localStorage.getItem("name_user");

  const [filterType, setFilterType] = useState(null);
  const [filterUser, setFilterUser] = useState(null);
  const [filterDate, setFilterDate] = useState(null);


  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let url = "http://localhost:3400/forms";

    if (filterType) {
      url += `/type/${filterType}`;
    } else if (filterUser) {
      url += `/user/${filterUser}`;
    } else if (filterDate) {
      url += `/date/${filterDate}`;
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(url, config);
        const data = response.data;
        setTableData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    };

    fetchData();
  }, [filterType, filterUser, filterDate]);

  const displayedData = (tableData || []).slice(
    currentPage * elementsPerPage,
    currentPage * elementsPerPage + elementsPerPage
  );
  console.log(displayedData);

  return (
    <div>
      <Navbar nombreUser={nombreUser} />

      <img src={fondo} className="fondo" alt="background" />
      <div className="container-flow mx-5 data-table">
        <div className="container-rounded">
          <div className="row">
            <div className="col-10">
              <h1 className="titulo">Lista Tareas</h1>
              <div className="table-responsive">
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
                      {displayedData.map((item) => {
                        let formComponent;

                        if (item.__properties__.formSprinkler) {
                          formComponent = <HomeSprinklerForm formData={item} nameForm={"Aspersor"} />;
                        } else if (item.__properties__.formCompaction) {
                          formComponent = <HomeCompactionForm formData={item} nameForm={"Compactación"} />;
                        } else if (item.__properties__.formCount) {
                          formComponent = <HomeCountForm formData={item} nameForm={"Conteo"} />;
                        } else if (item.__properties__.formDamage) {
                          formComponent = <HomeDamageForm formData={item} nameForm={"Daño"} />;
                        } else if (item.__properties__.formDiseases) {
                          formComponent = <HomeDiseasesForm formData={item} nameForm={"Enfermedades"} />;
                        } else if (item.__properties__.formFauna) {
                          formComponent = <HomeFaunaForm formData={item} nameForm={"Fauna"} />;
                        } else if (item.__properties__.formGirdling) {
                          formComponent = <HomeGirdlingForm formData={item} nameForm={"Anillado"} />;
                        } else if (item.__properties__.formHumidity) {
                          formComponent = <HomeHumidityForm formData={item} nameForm={"Humedad"} />;
                        } else if (item.__properties__.formPlague) {
                          formComponent = <HomePlagueForm formData={item} nameForm={"Plaga"} />;
                        }

                        return (
                          <tr key={item.form_id}>
                            <th scope="row" className="text-center align-middle">
                              <ButtonState data={item} onButtonClick={(item) => console.log(item)} />
                            </th>
                            <th scope="row" className="text-center align-middle">{item.__properties__.userId}</th>
                            <td className="text-center align-middle">{new Date(item.__properties__.dateTime).toLocaleDateString()}</td>
                            <td>
                              {formComponent}
                            </td>
                          </tr>
                        )
                      })}
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
            <div className="col-2">
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
          </div>
        </div>
      </div>

      <Footer className="footer" />
    </div>
  );
}

export default HomeViewAdmin;
