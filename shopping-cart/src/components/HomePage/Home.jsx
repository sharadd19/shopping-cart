import { Link } from "react-router-dom";
import styles from "./Home.module.css"
/* import HomeCarousel from "./HomeCarousel";
 */
export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Welcome to SATO.</h1>
      <h3 className={styles.summary}>
        Discover our selection of electronics
      </h3>{
      <Link to="/store">
        <button className={styles.shopButton}>Shop now</button>
      </Link>}
      {/* <HomeCarousel/> */}
    </>
  );
}
