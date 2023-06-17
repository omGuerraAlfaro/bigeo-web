import React, { } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "bootstrap/dist/css/bootstrap.css";
import "react-tabs/style/react-tabs.css";
import "./home.css";
import fondo from "../../../assets/img/fondoPalta.jpg";
import Navbar from "../../theme/navbar/navbar";
import Footer from "../../theme/footer/footer";
import Home from "../../tableHome/tableHome";
import Task from "../../tableTask/tableTask";


function HomeViewAdmin(props) {

  const nombreUser = localStorage.getItem("name_user");

  return (
    <>
      <Navbar nombreUser={nombreUser} />

      <img src={fondo} className="fondo" alt="background" />

      <Tabs>
        <TabList className="mb-3 zindex">
          <Tab>
            <div>Inicio</div>
          </Tab>
          <Tab >
            <div>Tareas</div>
          </Tab>
        </TabList>

        <TabPanel>
          <div>
            <Home />
          </div>
        </TabPanel>

        <TabPanel>
          <div>
            <Task />
          </div>
        </TabPanel>
      </Tabs>

      <Footer className="footer" />
    </>
  );
}

export default HomeViewAdmin;
