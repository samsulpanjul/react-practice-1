import { Fragment } from "react";
import CardProduct from "../components/fragments/CardProduct";
import Button from "../components/elements/button/Button";

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

function handleLogout() {
  localStorage.removeItem("username");
  localStorage.removeItem("password");
  window.location.href = "/login";
}

const username = localStorage.getItem("username");

function Products() {
  return (
    <Fragment>
      <div className="flex gap-5 justify-end py-2 bg-blue-600 text-white items-center pr-10">
        {username && (
          <>
            <p>Hello {username}</p>
          </>
        )}
        <Button onClick={handleLogout} classname={"bg-black font-bold"}>
          {username ? "Logout" : "Login"}
        </Button>
      </div>
      <div className="flex justify-center gap-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
}

export default Products;
