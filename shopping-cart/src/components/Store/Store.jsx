import ProductCard from "./ProductCard";
import styles from "./Store.module.css";
export default function Store() {
  // Have our api data come through here
  const products = [
    {
      id: 1,
      productName: "Tangerine",
      productPrice: "£1",
      image: "",
      description: "This is my beautiful product",
      itemQuantity: 4,
    },
    {
      id: 2,
      productName: "Apple",
      productPrice: "£2",
      image: "",
      description: "This is my beautiful product",
      itemQuantity: 2,
    },
  ];

  return (
    <>
      {/* <Sidebar /> */}
      {/* <NavbarSearch/> */}
      <h1>Welcome to the store</h1>
      <div className={styles.productCards}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
