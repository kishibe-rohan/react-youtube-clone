import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import HomeScreen from "./screens/HomeScreen/HomeScreen";

import "./_app.scss";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => setShowSidebar((value) => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app_container ">
        <Sidebar show={showSidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app_main border border-warning">
          <HomeScreen />
        </Container>
      </div>
    </>
  );
}

export default App;
