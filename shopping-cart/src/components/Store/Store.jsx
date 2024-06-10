import ProductCard from "./ProductCard";
import styles from "./Store.module.css";
import { useOutletContext } from "react-router-dom";

export default function Store() {

const{bagItemsKey} = useOutletContext();
const [bagItems, setBagItems] = bagItemsKey;
  
  // Have our api data come through here
  const products = [
    {
      id: 1,
      productName: "Tangerine",
      productPrice: 1,
      image: "",
      description: "This is my beautiful product",
      itemQuantity: 4,
    },
    {
      id: 2,
      productName: "Apple",
      productPrice: 2,
      image: "",
      description: "This is my beautiful product",
      itemQuantity: 2,
    },
  ];

  const numberOfProducts = products.length;

  function handleClick(cardId) {
    const productToAdd = products.find((product) => product.id === cardId);
    setBagItems((bagItems) => [...bagItems, productToAdd] );

  }
  return (
    <>
      {/* <Sidebar /> */}
      {/* <NavbarSearch/> */}
      <h1>Products ({numberOfProducts})</h1>
      <div className={styles.productCards}>
        {products.map((product) => (
          <ProductCard handleClick={() => handleClick(product.id)} key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
