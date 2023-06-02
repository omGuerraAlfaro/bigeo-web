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
  const nombreUser = localStorage.getItem('name_user');
  console.log(nombreUser);
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div>
      <Navbar nombreUser={nombreUser}/>

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
                <tr>
                  <th scope="row">1</th>
                  <td>Humedad</td>
                  <td>José Pelayo</td>
                  <td>Norte</td>
                  <td>02/06/23</td>
                  <td class="text-center">
                    <ButtonG />
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Malezas</td>
                  <td>Matías Donoso</td>
                  <td>Noroeste</td>
                  <td>03/06/23</td>
                  <td class="text-center">
                    <ButtonG />
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Frutos</td>
                  <td>Mauricio Figueroa</td>
                  <td>Todo el Campo</td>
                  <td>01/01/23</td>
                  <td class="text-center">
                    <ButtonG />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomeViewAdmin;
