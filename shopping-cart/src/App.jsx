import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [bagItems, setBagItems] = useState([]);

  let numberOfBagItems;
  if (bagItems.length > 0) {
    numberOfBagItems = bagItems.reduce((acc, item) => acc + item.quantity, 0);
  } else {
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
