import React from "react";
import ReactDOM from "react-dom";
import Header from "./component/Header";

//const Patient = React.lazy(() => import('one/Patient'));
const Search = React.lazy(() => import('one/Search'));
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
    <div className="w-screen" style={{display:'flex'}}>

    
      <React.Suspense fallback={<div>loading...</div>}>
    
     {/* <Complete /> */}
     <div className="w-1/5">

     </div>
    <div className="w-4/5">
    
        <SafeComponent>
        
          {/* <Patient hello={{data:data}}/> */}
          <Search/>
        </SafeComponent>
     
    </div>
    </React.Suspense>
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
