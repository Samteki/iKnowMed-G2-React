import React from "react";
import ReactDOM from "react-dom";
import Header from "./component/Header";

const Patient = React.lazy(() => import('one/Patient'));
// import Patient from "one/Patient"

import "./index.scss";
import SafeComponent from "./SafeComponent";

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

const App = () => (
  <div >
    <Header />
    <div className="w-1/3 text-s">
      <React.Suspense fallback={<div>loading...</div>}>
        <SafeComponent>
          <Patient />
        </SafeComponent>
      </React.Suspense>
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
