import { Link } from "react-router-dom";
import styles from "./Home.module.css"
/* import HomeCarousel from "./HomeCarousel";
 */
export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <div>
          <h1 className={styles.title}>Welcome to SATO.</h1>
          <h3 className={styles.summary}>
            Discover our selection of electronics
          </h3>{
          <Link to="/store">
            <button className={styles.shopButton}>Shop now</button>
          </Link>}
        </div>
        <img src="./images/sankdisk.png" alt="" />  
      </div>
      
      {/* <HomeCarousel/> */}
    </>
  );
}
