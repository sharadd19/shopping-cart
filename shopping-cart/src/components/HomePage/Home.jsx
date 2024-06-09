import { Link } from "react-router-dom";
/* import HomeCarousel from "./HomeCarousel";
 */
export default function Home() {
  return (
    <>
      <h1 className="title">Welcome to fruits.</h1>
      <h3 className="summary">
        Discover our selection of fresh fruits, bursting with flavor and
        vitality. Delivered straight from the farm to your table.
      </h3>{
      <Link to="/store" >
        <button className="shop-now">Shop now</button>
      </Link>}
      {/* <HomeCarousel/> */}
    </>
  );
}
