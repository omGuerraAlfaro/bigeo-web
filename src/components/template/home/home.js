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

  const handleClick = () => {
    console.log("click");
  };
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "http://localhost:3400/forms";
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
        // Hacer algo con los datos
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
      <Navbar nombreUser={nombreUser} />

      <img src={fondo} className="fondo" alt="background" />
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
          <div className="table-responsive">
            <div className="scroll">
              <table className="table table-striped table-responsive">
                <thead>
                  <tr>
                    <th scope="col" className="text-center">Acciones</th>
                    <th scope="col">Usuario Responsable</th>
                    <th scope="col">Fecha y Hora</th>
                    <th scope="col" className="text-center">Datos Formularios</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedData.map((item) => {
                    let formComponent;

                    if (item.properties.formSprinkler) {
                      formComponent = <HomeSprinklerForm formData={item} nameForm={"Aspersor"} />;
                    } else if (item.properties.formCompaction) {
                      formComponent = <HomeCompactionForm formData={item} nameForm={"Compactación"} />;
                    } else if (item.properties.formCount) {
                      formComponent = <HomeCountForm formData={item} nameForm={"Conteo"} />;
                    } else if (item.properties.formDamage) {
                      formComponent = <HomeDamageForm formData={item} nameForm={"Daño"} />;
                    } else if (item.properties.formDiseases) {
                      formComponent = <HomeDiseasesForm formData={item} nameForm={"Enfermedades"} />;
                    } else if (item.properties.formFauna) {
                      formComponent = <HomeFaunaForm formData={item} nameForm={"Fauna"} />;
                    } else if (item.properties.formGirdling) {
                      formComponent = <HomeGirdlingForm formData={item} nameForm={"Anillado"} />;
                    } else if (item.properties.formHumidity) {
                      formComponent = <HomeHumidityForm formData={item} nameForm={"Humedad"} />;
                    } else if (item.properties.formPlague) {
                      formComponent = <HomePlagueForm formData={item} nameForm={"Plaga"} />;
                    }

                    return (
                      <tr key={item.id}>
                        <th scope="row" className="text-center">
                          <ButtonState data={item} onButtonClick={(item) => console.log(item)} />
                        </th>
                        <th scope="row">{item.properties.userId}</th>
                        <td>{item.properties.dateTime}</td>
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
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default HomeViewAdmin;
