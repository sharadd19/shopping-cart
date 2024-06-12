import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useReducer, useState } from "react";

function App() {
  const [bagItems, setBagItems] = useState([]);
  //const [bagItems, dispatch] = useReducer(bagItemsReducer, []);
  let numberOfBagItems;
  if (bagItems.length > 0) {
    numberOfBagItems = bagItems.reduce((acc, item) => acc + item.quantity, 0);
  } else {
    numberOfBagItems = 0;
  }

  return (
    <>
      <Navbar data-testid="navbar-test" bagItems={bagItems} numberOfBagItems={numberOfBagItems} />
      <Outlet
        context={{
          bagItemsKey: [bagItems, setBagItems],
          /* bagItemsReducerKey: [bagItems, dispatch], */
          numberOfBagItemsKey: [numberOfBagItems],
        }}
      />
    </>
  );
}

export default App;
