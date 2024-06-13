import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { ShopContext } from "./Context";
import { useCallback, useEffect, useState } from "react";

/* async function apiCall() {
  try {
    const url = "https://fakestoreapi.com/products";
    const response = await fetch(url, { mode: "cors" });
    let data = await response.json();
    data = data.filter((item) => item.category === "electronics");
    const cleanedData = data.map((item) => {
      const cleanedItemDescription = item.description.split(";")[0];
      return { ...item, description: cleanedItemDescription };
    });
    return cleanedData;
  } catch (error) {
    alert(error);
  }
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
/* 
  const products = useEffect(() => {
    const apiCall = async () => {
      try {
        const url = "https://fakestoreapi.com/products";
        const response = await fetch(url, { mode: "cors" });
        let data = await response.json();
        data = data.filter((item) => item.category === "electronics");
        const cleanedData = data.map((item) => {
          const cleanedItemDescription = item.description.split(";")[0];
          return { ...item, description: cleanedItemDescription };
        });
        return cleanedData;
      } catch (error) {
        alert(error);
      }
    };
    apiCall();
  }, []);

  console.log(products) */
  // const products = useCallback(apiCall, [])

  return (
    <><ShopContext.Provider value={ bagItems }>
      
        <Navbar
          data-testid="navbar-test"
          /* bagItems={bagItems}
          numberOfBagItems={numberOfBagItems} */
        />
        <Outlet 
          /* context={{
            bagItemsKey: [bagItems, setBagItems],
            bagItemsReducerKey: [bagItems, dispatch],
            numberOfBagItemsKey: [numberOfBagItems],
          }} */
        />
    </ShopContext.Provider>
    </>
  );
}

export default App;
