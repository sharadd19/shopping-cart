import { useState } from "react";
import styles from "./BagItems.module.css";
import { number } from "prop-types";
import { useOutletContext } from "react-router";
export default function BagItem({ bagItem, handleDecreaseClick, handleIncreaseClick }) {
  let itemQuantity = bagItem.itemQuantity;
  const { quantityKey } = useOutletContext();
  const [quantity, setQuantity] = quantityKey;

  const totalPrice = bagItem.productPrice * itemQuantity;
  return (
    <>
      <div className={styles.container}>
        <img className={styles.image} src="" alt="" />
        <p>{bagItem.productName}</p>
        <p>£{bagItem.productPrice}</p>
        <div className={styles.editItemCount}>
          <button
            onClick={() => handleDecreaseClick(bagItem.id)}
            className={styles.decreaseItemCount}
          >
            -
          </button>
          <p className={styles.quantity}>{itemQuantity}</p>
          <button
            onClick={() => handleIncreaseClick(bagItem.id)}
            className={styles.increaseItemCount}
          >
            +
          </button>
        </div>
        <p>£{totalPrice}</p>
        <button>Delete</button>
      </div>
    </>
  );
}
