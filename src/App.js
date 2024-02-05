import React, { useState } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/boxicons/css/boxicons.min.css";
import "./App.css";
import Home from "./pages/Home.js";
import ToDoList from "./pages/ToDoList.js";

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/#todolist" element={<ToDoList />} />
      </Routes>
    </Router>
  )
}

export default App;