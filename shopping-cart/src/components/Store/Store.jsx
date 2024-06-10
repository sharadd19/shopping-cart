import ProductCard from "./ProductCard";
import styles from "./Store.module.css";
import { useOutletContext } from "react-router-dom";

export default function Store() {
  const { bagItemsKey, quantityKey } = useOutletContext();
  const [bagItems, setBagItems] = bagItemsKey;
  // const [quantity, setQuantity] = quantityKey;

  // Have our api data come through here
  const products = [
    {
      id: 1,
      productName: "Tangerine",
      productPrice: 1,
      image: "",
      description: "This is my beautiful product",
      itemQuantity: 1,
    },
    {
      id: 2,
      productName: "Apple",
      productPrice: 2,
      image: "",
      description: "This is my beautiful product",
      itemQuantity: 1,
    },
  ];

  const numberOfProducts = products.length;
  /* 
  When we click on a product, get the id, if the product is new to the bag, create a map that has the id<->quantity  and add to the bag.
  When you add the same item to the bag, you look for the item in the map and increase that quantity and display that quantity
  The quantity will be state which will be an array of objects const [quantity, setQuantity] = useState([{id: 1, quantity: 2}. {id: 2, quantity: 3}]) 
  const quantityMap = api.map((item) => {id: item.id, quantity: 1} // setQuantity(quantityMap)
  const itemQuantity = quantity.find((item) => item.id === id).quantity 
  */
  function handleClick(cardId) {
    const productToAdd = products.find((product) => product.id === cardId);
    const productInBag = bagItems.find((item) => item.id === productToAdd.id);
    if (productInBag) {
      productInBag.itemQuantity += 1;
      setBagItems((bagItems) => [...bagItems]);
    } else {
      setBagItems((bagItems) => [...bagItems, productToAdd]);
    }
  }
  return (
    <>
      {/* <Sidebar /> */}
      {/* <NavbarSearch/> */}
      <h1>Products ({numberOfProducts})</h1>
      <div className={styles.productCards}>
        {products.map((product) => (
          <ProductCard
            handleClick={() => handleClick(product.id)}
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
}
