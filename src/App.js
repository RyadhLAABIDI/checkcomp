import React from "react";
import './App.css';
import Photo from "./Profil/Photo";
import FullName from "./Profil/FullName";
import Address from "./Profil/Address";

const App = ()=> (
      <div className="App">
      <Photo/>
      <Address/>
      <FullName/>
    </div>
  );
  export default App;
