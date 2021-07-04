import React from "react";
import { Container } from "react-bootstrap";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import HomeScreen from "./screens/HomeScreen/HomeScreen";

import "./_app.scss";

function App() {
  return (
    <>
      <Header />
      <div className="app_container border border-info">
        <Sidebar />
        <Container fluid className="app_main border border-warning">
          <HomeScreen />
        </Container>
      </div>
    </>
  );
}

export default App;
