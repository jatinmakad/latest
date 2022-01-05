import React from "react";
import "./App.css";
import Header from "./components/Header";
import Order from "./components/Order";
import NewOrder from "./components/NewOrder";
import Booking from "./components/Booking";

function App() {
  return (
    <div className="App">
      <Header/>
      <NewOrder/>
      {/* <Booking/> */}
    </div>
    
  );
}

export default App;
