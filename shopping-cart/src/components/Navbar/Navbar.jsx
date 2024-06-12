import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"

export default function Navbar({numberOfBagItems}) {

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <Link to="/">
            <h1 className={styles.title}>SATO.</h1>
          </Link>
          <Link to="/store">
            <h3 className={styles.store}>Store</h3>
          </Link>
        </div>
        <div className={styles.navbarRight}>
          <Link to="/bag">
            <h3 data-testid="number-bag-items">Bag ({numberOfBagItems})</h3>
          </Link>
        </div>
      </div>
    </>
  );
}
