import BagItem from "./BagItem";
import OrderSummary from "./OrderSummary";
import styles from "./Bag.module.css";
import { useOutletContext } from "react-router";
export default function Bag() {
  const { bagItemsKey, numberOfBagItemsKey, quantityKey } = useOutletContext();
  const [bagItems, setBagItems] = bagItemsKey;
  const [numberOfBagItems] = numberOfBagItemsKey;

  function handleDecreaseClick(id) {
    const itemToChange = bagItems.find((item) => item.id === id);

    if (itemToChange.itemQuantity > 0) {
      itemToChange.itemQuantity -= 1;
      setBagItems((bagItems) => [...bagItems]);
    }
  }
  function handleIncreaseClick(id) {
    const itemToChange = bagItems.find((item) => item.id === id);
    itemToChange.itemQuantity += 1;
    setBagItems((bagItems) => [...bagItems]);
  }
  let subTotal = 0;
  if (bagItems.length > 0) {
    subTotal = bagItems.reduce(
      (acc, item) => acc + item.productPrice * item.itemQuantity,
      0
    );
  }

  if (numberOfBagItems !== 0) {
    return (
      <>
        <h1>Your bag ({numberOfBagItems})</h1>
        <div className={styles.bag}>
          <div className={styles.bagItems}>
            {bagItems.map((bagItem) => (
              <BagItem
                key={bagItem.id}
                bagItem={bagItem}
                handleDecreaseClick={() => handleDecreaseClick(bagItem.id)}
                handleIncreaseClick={() => handleIncreaseClick(bagItem.id)}
              />
            ))}
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
