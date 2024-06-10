import BagItem from "./BagItem";
import OrderSummary from "./OrderSummary";
import styles from "./Bag.module.css";
import { useOutletContext } from "react-router";
export default function Bag() {


  const { bagItemsKey, numberOfBagItemsKey } = useOutletContext();
  const [bagItems, setBagItems] = bagItemsKey;
  const [numberOfBagItems] = numberOfBagItemsKey;
  debugger;
  let subTotal = 0;
  if (bagItems.length > 0) {
    subTotal = bagItems.reduce((acc, item) => acc + (item.productPrice * item.itemQuantity), 0)
  }
  
  return (
    <>
      <h1>Your bag ({numberOfBagItems})</h1>
      <div className={styles.bag}>
        <div className={styles.bagItems}>
          {bagItems.map((bagItem) => (
            <BagItem key={bagItem.id} bagItem={bagItem}/>
          ))}
        </div>

        {numberOfBagItems !== 0 && <OrderSummary subTotal={subTotal} />}
        {numberOfBagItems === 0 && <div><h2>Nothing in your bag!</h2></div>}
      </div>
    </>
  );
}
