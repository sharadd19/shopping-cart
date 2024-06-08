
export default function Navbar() {
  return (<>


  <div className="navbar-left">
      <h1 className="title">fruits.</h1>
      <h3 className="store">Store</h3>
  </div>

  <div className="navbar-right">
      <NavbarSearch/>
      <NavbarFavourite numberOfFavouriteItems={numberOfFavouriteItems}/>
      <NavbarBag numberOfItemsInBag={numberOfItemsInBag}/>
  </div>
  </>)
}
