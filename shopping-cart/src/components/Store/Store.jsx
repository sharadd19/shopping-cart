import ProductCard from "./ProductCard";
import styles from "./Store.module.css";
import { useLoaderData, useOutletContext, useSubmit } from "react-router-dom";
import NavbarSearch from "../Navbar/NavbarSearch";
import { matchSorter } from "match-sorter";
import { useEffect } from "react";

async function apiCall() {
  const url = "https://fakestoreapi.com/products";
  const response = await fetch(url, { mode: "cors" });
  let data = await response.json();
  data = data.filter((item) => item.category === "electronics");
  console.log(data);
  return data;
}
const products = await apiCall();

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
  const { bagItemsKey } = useOutletContext();
  const [bagItems, setBagItems] = bagItemsKey;
  const submit = useSubmit();

  /* Our data comes from the loader now instead of the hard coded array. 
  If we were using an API we would put that into the loaderData so its accessible throughout this component. */
  const { items, q } = useLoaderData();
  const numberOfProducts = items.length;

  // This solves the problem of our search query disappearing when we refresh the page.
  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  function getProduct(id) {
    return items.find((item) => item.id === id);
  }

  function addToBag(id) {
    const product = getProduct(id);
    const isProductInBag = bagItems.find((item) => item.id === id);
    if (isProductInBag) {
      isProductInBag.quantity += 1;
      setBagItems((bagItems) => [...bagItems]);
      
    } else {
      setBagItems((bagItems) => [
        ...bagItems,
        {
          id: id,
          quantity: 1,
          price: product.price,
          name: product.title,
          image: product.image,
        },
      ]);
    }
  }

  return (
    <>
      <h1>Products ({numberOfProducts})</h1>
      <NavbarSearch items={items} q={q} submit={submit} />
      <div className={styles.productCards}>
        {items.map((product) => (
          <ProductCard
            handleClick={() => addToBag(product.id)}
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
}
