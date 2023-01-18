import React from "react";
import ReactDOM from "react-dom";
import PatientList from "./components/PatientList";


import "./index.css";

export default  function App(){
  return (
  <div className="container">
  <PatientList />
  </div>
)};
ReactDOM.render(<App />, document.getElementById("app"));
