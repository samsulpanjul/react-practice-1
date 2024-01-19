import CardProduct from "../components/fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 500000,
    image: "https://via.placeholder.com/300",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, accusantium.",
  },
  {
    id: 2,
    name: "Product 2",
    price: 750000,
    image: "https://via.placeholder.com/300",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, accusantium.",
  },
];

function Products() {
  return (
    <div className="flex justify-center gap-5">
      {products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
}

export default Products;
