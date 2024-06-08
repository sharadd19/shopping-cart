export default function Store() {
  // Have our api data come through here
  const products = [
    { productName: "Tangerine", productPrice: "£1", image: "" },
    { productName: "Apple", productPrice: "£2", image: "" },
  ];

  return (
    <>
      {/* <Sidebar /> */}
      {products.map((product) => (
        <Link to="/product/:id/information">
          <ProductCard key={product.id} product={product} />
        </Link>
      ))}
    </>
  );
}
