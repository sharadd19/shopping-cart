import BagItem from "./BagItem";
import OrderSummary from "./OrderSummary";
import styles from "./Bag.module.css";
import { useOutletContext } from "react-router";
import { useMemo } from "react";

export default function Bag() {
  const { bagItemsKey, numberOfBagItemsKey } = useOutletContext();
  const [bagItems, setBagItems] = bagItemsKey;
  const [numberOfBagItems] = numberOfBagItemsKey;
  
  // This is how a reducer function would be used to change the bag items state 
  // We cant do it here because our store also depends on bag items and it would get complicated to do so.
  /* function bagItemsReducer(bagItems, action) {
    switch (action.type) {
      case "incrementQuantity": {
        return bagItems.find((item) => item.id === action.id).quantity > 0 ? itemToChange.quantity -= 1 : bagItems;
      }
      case "decrementQuantity": {
        return bagItems.find((item) => item.id === action.id).quantity += 1;
      }
      case "delete": {
        return bagItems.filter((item) => item.id !== action.id)
      }
    }
  } */

  function handleDecreaseClick(id) {
    const itemToChange = bagItems.find((item) => item.id === id);

    if (itemToChange.quantity > 0) {
      itemToChange.quantity -= 1;
      setBagItems((bagItems) => [...bagItems]);
      /* dispatch({
        type: "incrementQuantity",
        id: id
      }) */
    }
  }
  function handleIncreaseClick(id) {
    const itemToChange = bagItems.find((item) => item.id === id);
    itemToChange.quantity += 1;
    setBagItems((bagItems) => [...bagItems]);
    /* dispatch({
      type: "decrementQuantity",
      id: id
    }) */
  }

  function handleDelete(id) {
    setBagItems((bagItems) => bagItems.filter((item) => item.id !== id));
    /* dispatch({
      type: "delete",
      id: id
    }) */
  }


 /*
  We use a useMemo hook here because we don't want this calculation to occur everytime this comopnent renders since it will reduce performance
  If a user were to add thousands of items or open the bag all the time, this would lead to a clunky user experience.
  The useMemo hook allows us to perform the calculation and store it for when we need it. We'll only need to update the result of that calculation
  every time a product is added to the bag i.e. bagItems changes.
 */
  let subTotal = 0;
  if (bagItems.length > 0) {
    subTotal = useMemo(() => {
      return bagItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    }, [bagItems]) 
  }

  if (numberOfBagItems !== 0) {
    return (
      <>
        <h1>Your bag ({numberOfBagItems})</h1>
        <div className={styles.bag}>
          <div className={styles.bagItems}>
            {bagItems.map(
              (bagItem) =>
                bagItem.quantity !== 0 && (
                  <BagItem
                    key={bagItem.id}
                    bagItem={bagItem}
                    handleDecreaseClick={() => handleDecreaseClick(bagItem.id)}
                    handleIncreaseClick={() => handleIncreaseClick(bagItem.id)}
                    handleDelete={() => handleDelete(bagItem.id)}
                  />
                )
            )}
          </div>
          <OrderSummary subTotal={subTotal} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>Your bag ({numberOfBagItems})</h1>
        <div className={styles.bag}>
          <h2>Nothing in your bag!</h2>
        </div>
      </>
    );
  }
}
