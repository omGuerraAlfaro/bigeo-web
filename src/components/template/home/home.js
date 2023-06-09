import React, { } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "bootstrap/dist/css/bootstrap.css";
import "react-tabs/style/react-tabs.css";
import "./home.css";
import fondo from "../../../assets/img/2.jpg";
import Navbar from "../../theme/navbar/navbar";
import Footer from "../../theme/footer/footer";
import Forms from "../../tableHome/tableHome";
import Task from "../../tableTask/tableTask";


function HomeViewAdmin(props) {

  const nombreUser = localStorage.getItem("name_user");

  return (
    <>
      <Navbar nombreUser={nombreUser} />
      <img src={fondo} className="fondo" alt="background" />

      <Tabs className="background container-fluid">
        <TabList className="mb-3 zindex">
          <Tab>
            <div><strong>Formularios</strong></div>
          </Tab>
          <Tab >
            <div><strong>Tareas Asignadas</strong></div>
          </Tab>
        </TabList>

        <TabPanel>          
            <Forms />          
        </TabPanel>

        <TabPanel>          
            <Task />          
        </TabPanel>
      </Tabs>

      <Footer className="footer" />
    </>
  );
}

export default HomeViewAdmin;
