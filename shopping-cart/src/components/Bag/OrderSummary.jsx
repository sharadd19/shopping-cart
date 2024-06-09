import { Link } from "react-router-dom";
import styles from "./OrderSummary.module.css";

export default function OrderSummary({ bagItems }) {
  const VAT = 1.2;
  const subTotal = bagItems.reduce(
    (acc, product) => acc + product.totalPrice,
    0
  );
  const orderTotal = (subTotal * VAT).toFixed(2)

  return (
    <div className={styles.container}>
      <h2>Order Summary</h2>

      {bagItems.map((bagItem) => (
        <div className={styles.row}>
          <div>{bagItem.name}</div>
          <div>£{bagItem.totalPrice}</div>
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
      <hr />
      <div className={styles.row}>
        <p>TOTAL</p>
        <p>£{orderTotal}</p>
      </div>
      <Link to="/"><button className={styles.checkout}>Checkout</button></Link>
    </div>
  );
}
