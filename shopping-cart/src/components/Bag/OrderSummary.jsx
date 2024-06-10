import { Link, useOutletContext } from "react-router-dom";
import styles from "./OrderSummary.module.css";

export default function OrderSummary({ subTotal }) {
  const { bagItemsKey, quantityKey } = useOutletContext();
  const [bagItems, setBagItems] = bagItemsKey;
  const [quantity, setQuantity] = quantityKey;
  const VAT = 1.2;
  const orderTotal = (subTotal * VAT).toFixed(2);
  function handleClick() {
    setBagItems([]);
  }

  return (
    <div className={styles.container}>
      <h2>Order Summary</h2>

      {bagItems.map((bagItem) => (
        <div key={bagItem.id} className={styles.row}>
          <div>{bagItem.productName}</div>
          <div>£{bagItem.itemQuantity * bagItem.productPrice}</div>
        </div>
      ))}
      <div className={styles.row}>
        <p>Subtotal</p>
        <p>£{subTotal}</p>
      </div>
      <div className={styles.row}>
        <p>VAT (20%) </p>
        <p>£{VAT}</p>
      </div>
      <hr></hr>
      <div className={styles.row}>
        <p>TOTAL</p>
        <p>£{orderTotal}</p>
      </div>
      <Link to="/">
        <button onClick={handleClick} className={styles.checkout}>
          Checkout
        </button>
      </Link>
    </div>
  );
}
