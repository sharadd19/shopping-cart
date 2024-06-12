import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useCallback, useState } from "react";

/* async function apiCall() {
  const url = "https://fakestoreapi.com/products";
  const response = await fetch(url, { mode: "cors" });
  let data = await response.json();
  data = data.filter((item) => item.category === "electronics");
  const cleanedData = data.map((item) => {
    const cleanedItemDescription = item.description.split(";")[0];
    return { ...item, description: cleanedItemDescription };
  });
  return cleanedData;
} */

function App() {
  const [bagItems, setBagItems] = useState([]);
  //const [bagItems, dispatch] = useReducer(bagItemsReducer, []);
  let numberOfBagItems;
  if (bagItems.length > 0) {
    numberOfBagItems = bagItems.reduce((acc, item) => acc + item.quantity, 0);
  } else {
    numberOfBagItems = 0;
  }
  // const products = useCallback(apiCall, []);
  // console.log(products);

  return (
    <>
      <Navbar
        data-testid="navbar-test"
        bagItems={bagItems}
        numberOfBagItems={numberOfBagItems}
      />
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
