import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Container } from "react-bootstrap";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";

import "./_app.scss";

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => setShowSidebar((value) => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app_container ">
        <Sidebar show={showSidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app_main">
          {children}
        </Container>
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>
        <Route path="/login">
          <LoginScreen />
        </Route>
        <Route path="/search">
          <Layout>
            <h1>Search Screen</h1>
          </Layout>
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
