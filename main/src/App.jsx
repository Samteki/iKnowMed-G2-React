import React from "react";
import ReactDOM from "react-dom";
import Header from "./component/Header";
import Patient from "one/App"

import "./index.scss";

const App = () => (
  <div >
    <Header/>
    <div className="w-1/3 text-s">

    {/* <Patient hello="hellllllll" /> */}
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
