import ProductCard from "./ProductCard";
import styles from "./Store.module.css";
import { useLoaderData, useOutletContext, useSubmit } from "react-router-dom";
import NavbarSearch from "../Navbar/NavbarSearch";
import { matchSorter } from "match-sorter";
import { useEffect } from "react";

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

function getProducts(query) {
  let items = products;
  if (query) {
    items = matchSorter(items, query, { keys: ["productName"] });
  }
  return items;
}

// Loads our data into a function thats accessible throughout this file
export function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const items = getProducts(q);
  return { items, q };
}

export default function Store() {
  const { bagItemsKey, quantityKey } = useOutletContext();
  const [bagItems, setBagItems] = bagItemsKey;
  const submit = useSubmit();
  // const [quantity, setQuantity] = quantityKey;

  // Have our api data come through here

  /* Our data comes from the loader now instead of the hard coded array. 
  If we were using an API we would put that into the loaderData so its accessible throughout this component. */
  const { items, q } = useLoaderData();
  const numberOfProducts = items.length;

  // This solves the problem of our search query disappearing when we refresh the page.
  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);
  /* 
  When we click on a product, get the id, if the product is new to the bag, create a map that has the id<->quantity  and add to the bag.
  When you add the same item to the bag, you look for the item in the map and increase that quantity and display that quantity
  The quantity will be state which will be an array of objects const [quantity, setQuantity] = useState([{id: 1, quantity: 2}. {id: 2, quantity: 3}]) 
  const quantityMap = api.map((item) => {id: item.id, quantity: 1} // setQuantity(quantityMap)
  const itemQuantity = quantity.find((item) => item.id === id).quantity 
  */
  function handleClick(cardId) {
    const productToAdd = items.find((product) => product.id === cardId);
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
      <h1>Products ({numberOfProducts})</h1>
      <NavbarSearch items={items} q={q} submit={submit} />
      <div className={styles.productCards}>
        {items.map((product) => (
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
