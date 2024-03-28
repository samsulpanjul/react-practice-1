import { Fragment } from "react";
import CardProduct from "../components/fragments/CardProduct";
import Button from "../components/elements/button/Button";
import { useState } from "react";

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
  const [cart, setCart] = useState([]);

  function handleAddToCart(id) {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  }

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
      <div className="flex justify-center gap-5 p-5">
        <div className="w-3/4 flex flex-wrap gap-5">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
              <CardProduct.Footer price={product.price} handleAddToCart={handleAddToCart} id={product.id} />
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find((product) => product.id === item.id);

                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>Rp. {product.price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</td>
                    <td>{item.qty}</td>
                    <td>Rp. {(item.qty * product.price).toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}

export default Products;
