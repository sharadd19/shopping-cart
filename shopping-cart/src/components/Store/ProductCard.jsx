import styles from "./ProductCard.module.css"
export default function ProductCard({product}) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.topCard}>
          <img className={styles.favouriteIcon} src="" alt="" />
        </div>
        <div className={styles.productImage}>
          <img src={product.image} alt="" className={styles.productImage} />
        </div>
        <div className={styles.productInformation}>
          <p className={styles.productName}>{product.productName}</p>
          <p className="price">{product.productPrice}</p>
          <p className={styles.productDescription}>{product.description}</p>
          <div className={styles.editItemCount}>
            <button className={styles.decreaseItemCount}>-</button>
            <p className={styles.numberOfItems}>{product.itemQuantity}</p>
            <button className={styles.increaseItemCount}>+</button>
          </div>
        </div>
        <div className={styles.bagIcon}>
          <img src="" alt="" className={styles.bagIcon} />
        </div>
      </div>
    </>
  );
}
