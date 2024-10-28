import { Fragment, useEffect, useRef } from "react";
import CardProduct from "../components/fragments/CardProduct";
import Button from "../components/elements/button/Button";
import { useState } from "react";
import { getProducts } from "../sevices/products.service";
import { getUsername } from "../sevices/auth.service";
import { useLogin } from "../hooks/useLogin";

function handleLogout() {
  localStorage.removeItem("token");
  window.location.href = "/login";
}

function Products() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const total = cart.reduce((acc, curr) => {
        const product = products.find((product) => product.id === curr.id);
        return acc + product.price * curr.qty;
      }, 0);
      setTotalPrice(total);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  function handleAddToCart(id) {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  }

  // useRef
  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  function handleAddToCartRef(id) {
    cartRef.current = [...cartRef.current, { id, qty: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  }

  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <Fragment>
      <div className="flex gap-5 justify-end py-2 bg-blue-600 text-white items-center pr-10">
        {username && (
          <>
            <p>Hello {username}</p>
          </>
        )}
        <Button
          onClick={handleLogout}
          classname={"bg-black font-bold"}
        >
          {username ? "Logout" : "Login"}
        </Button>
      </div>
      <div className="flex justify-center gap-5 p-5">
        <div className="w-8/12 flex flex-wrap gap-5">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} />
                <CardProduct.Body name={product.title}>{product.description}</CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  handleAddToCart={handleAddToCart}
                  id={product.id}
                />
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
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find((product) => product.id === item.id);

                  return (
                    <tr key={item.id}>
                      <td>{product.title}</td>
                      <td>${product.price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</td>
                      <td>{item.qty}</td>
                      <td>${(item.qty * product.price).toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total</b>
                </td>
                <td>
                  <b>${totalPrice.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}

export default Products;
