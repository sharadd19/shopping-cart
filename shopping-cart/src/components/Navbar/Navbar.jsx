/* import NavbarFavourite from "./NavbarFavourite";
import NavbarBag from "./NavbarBag"; */
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"

export default function Navbar({numberOfBagItems}) {

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <Link to="/">
            <h1 className={styles.title}>fruits.</h1>
          </Link>
          <Link to="/store">
            <h3 className={styles.store}>Store</h3>
          </Link>
        </div>
        <div className={styles.navbarRight}>
          <h3>Favourite</h3>
          <Link to="/bag">
            <h3>Bag ({numberOfBagItems})</h3>
          </Link>
          {/* <NavbarFavourite numberOfFavouriteItems={numberOfFavouriteItems} />
          <NavbarBag numberOfItemsInBag={numberOfItemsInBag} /> */}
        </div>
      </div>
    </>
  );
}
