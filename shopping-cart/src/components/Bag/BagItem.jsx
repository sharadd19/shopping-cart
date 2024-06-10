import styles from "./BagItems.module.css"
export default function BagItem({bagItem}) {
  const totalPrice = bagItem.productPrice * bagItem.itemQuantity;
  return (
    <>
      <div className={styles.container}>
        <img className={styles.image} src="" alt="" />
        <p>{bagItem.productName}</p>
        <p>£{bagItem.productPrice}</p>
        <div className={styles.editItemCount}>
          <button className={styles.decreaseItemCount}>-</button>
          <p className={styles.numberOfItems}>{bagItem.itemQuantity}</p>
          <button className={styles.increaseItemCount}>+</button>
        </div>
        <p>£{totalPrice}</p>
        <button>Delete</button>
      </div>
    </>
  );
}
