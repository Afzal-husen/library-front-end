import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import AddBook from "./pages/AddBook";

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/add" element={<AddBook />} />
          </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
