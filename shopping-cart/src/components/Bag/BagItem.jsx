import styles from "./BagItem.module.css";
export default function BagItem({
  bagItem,
  handleDecreaseClick,
  handleIncreaseClick,
  handleDelete,
}) {

  const totalPrice = bagItem.price * bagItem.quantity;
  return (
    <>
      <div className={styles.container}>
        <img className={styles.image} src={bagItem.image} alt="" />
        <p>{bagItem.name}</p>
        <p>£{bagItem.price}</p>
        <div className={styles.editItemCount}>
          <button
            onClick={() => handleDecreaseClick(bagItem.id)}
            className={styles.decreaseItemCount}
          >
            -
          </button>
          <p className={styles.quantity}>{bagItem.quantity}</p>
          <button
            onClick={() => handleIncreaseClick(bagItem.id)}
            className={styles.increaseItemCount}
          >
            +
          </button>
        </div>
        <p>£{totalPrice}</p>
        <button onClick={() => handleDelete(bagItem.id)}>Delete</button>
      </div>
    </>
  );
}
