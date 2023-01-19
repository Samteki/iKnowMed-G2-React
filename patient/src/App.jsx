import React from "react";
import ReactDOM from "react-dom";
import SafeComponent from "../SafeComponent";
import PatientList from "./components/PatientList";


import "./index.css";
import SearchPatient from "./pages/SearchPatient";

const data = [{
  name: "ss",
  age: 21
},
{
  name: "na",
  age: 22
},
{
  name: "pd",
  age: 23
},
{
  name: "br",
  age: 24
}]

export default function App() {
  return (
    <div className="container">
      <SafeComponent>
        <PatientList hello={{data:data}}/>
        <SearchPatient props={data}/>
      </SafeComponent>
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
