import React from "react";

// @ts-ignore
import portrait from "../src/assets/images/dnd.jpg";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <SideBar />
      <img className="photo" src={portrait} alt="" />
    </div>
  );
}

export default App;
