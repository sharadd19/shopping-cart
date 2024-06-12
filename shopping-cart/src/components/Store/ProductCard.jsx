import styles from "./ProductCard.module.css";
export default function ProductCard({ product, handleClick }) {
  return (
    <>
      <div id={product.id} className={styles.card}>
        <h3 className={styles.productName}>{product.title}</h3>
        <div className={styles.topCard}>
          <img className={styles.favouriteIcon} src={product.image} alt="" />
        </div>
        <div className={styles.productImage}>Image</div>
        <p className={styles.price}>
          <strong>£{product.price}</strong>
        </p>
        <div className={styles.productInformation}>
          <p className={styles.productDescription}>{product.description}</p>
          <button
            onClick={() => handleClick(product.id)}
            id={product.id}
            name="button"
            value={product.id}
            type="submit"
            className={styles.bagIcon}
          >
            Bag
          </button>
        </div>
      </div>
    </>
  );
}
