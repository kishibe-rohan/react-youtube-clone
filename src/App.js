import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import WatchScreen from "./screens/WatchScreen/WatchScreen";
import SearchScreen from "./screens/SearchScreen/SearchScreen";

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
  const history = useHistory();
  const { accessToken, isLoading } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!isLoading && !accessToken) history.push("/login");
  }, [accessToken, isLoading, history]);

  return (
    <Switch>
      <Route path="/" exact>
        <Layout>
          <HomeScreen />
        </Layout>
      </Route>
      <Route path="/login">
        <LoginScreen />
      </Route>
      <Route path="/search/:query">
        <Layout>
          <SearchScreen />
        </Layout>
      </Route>
      <Route path="/watch/:id">
        <Layout>
          <WatchScreen />
        </Layout>
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;
