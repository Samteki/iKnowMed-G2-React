import React from "react";
import ReactDOM from "react-dom";
import SafeComponent from "../SafeComponent";
import PatientList from "./components/PatientList";


import "./index.css";

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
        <PatientList />
      </SafeComponent>
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
