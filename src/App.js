import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Home />
    </Fragment>
  );
};

export default App;
