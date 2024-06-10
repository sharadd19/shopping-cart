import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Home from "./components/HomePage/Home";
import { useState } from "react";
import { number } from "prop-types";

function App() {
  const [bagItems, setBagItems] = useState([]);
  let numberOfBagItems;
  if (bagItems.length > 0) {
    numberOfBagItems = bagItems.reduce(
        (acc, item) => acc + item.itemQuantity,
        0
      );
  }
  else {
    numberOfBagItems = 0;
  }
  

  return (
    <>
      <Navbar bagItems={bagItems} numberOfBagItems={numberOfBagItems} />
      <Outlet
        context={{
          bagItemsKey: [bagItems, setBagItems],
          numberOfBagItemsKey: [numberOfBagItems],
        }}
      />
    </>
  );
}

export default App;
