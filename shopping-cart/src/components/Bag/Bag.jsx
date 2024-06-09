import BagItem from "./BagItem";
import OrderSummary from "./OrderSummary";
import styles from "./Bag.module.css";
export default function Bag() {
  const bagItems = [
    {
      id: 1,
      name: "Product A",
      productPrice: 1.5,
      itemQuantity: 2,
      totalPrice: 3,
    },
    {
      id: 2,
      name: "Product B",
      productPrice: 3,
      itemQuantity: 2,
      totalPrice: 6,
    },
  ];

  return (
    <>
      <h1>Your bag</h1>
      <div className={styles.bag}>
        <div className={styles.bagItems}>
          {bagItems.map((bagItem) => (
            <BagItem key={bagItem.id} bagItem={bagItem} />
          ))}
        </div>

        <OrderSummary bagItems={bagItems} />
      </div>
    </>
  );
}
