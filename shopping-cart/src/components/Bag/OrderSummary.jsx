import { Link, useOutletContext } from "react-router-dom";
import styles from "./OrderSummary.module.css";

export default function OrderSummary({ subTotal }) {
  const { bagItemsKey } = useOutletContext();
  const [bagItems, setBagItems] = bagItemsKey;
  const VAT = Math.round(0.2 * subTotal * 10)/100;
  const orderTotal = subTotal + VAT
  function handleClick() {
    setBagItems([]);
    alert("Thank you for your purchase :D")
  }

  return (
    <div className={styles.container}>
      <h2>Order Summary</h2>

      {bagItems.map((bagItem) => (
        bagItem.quantity !== 0 &&
        <div key={bagItem.id} className={styles.row}>
          <div>{bagItem.name}</div>
          <div>£{bagItem.quantity * bagItem.price}</div>
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
