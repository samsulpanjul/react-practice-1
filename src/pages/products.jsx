import { Fragment, useContext, useEffect, useRef } from "react";
import CardProduct from "../components/fragments/CardProduct";
import { useState } from "react";
import { getProducts } from "../sevices/products.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/fragments/TableCart";
import Navbar from "../components/layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

function Products() {
  // const [cart, setCart] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  useLogin();
  const { isDarkMode } = useContext(DarkMode);

  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  // useRef
  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  function handleAddToCartRef(id) {
    cartRef.current = [...cartRef.current, { id, qty: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  }

  return (
    <Fragment>
      <Navbar />
      <div className={`flex justify-center gap-5 p-5 ${isDarkMode && "bg-slate-800"}`}>
        <div className="w-8/12 flex flex-wrap gap-5">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} />
                <CardProduct.Body name={product.title}>{product.description}</CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                />
              </CardProduct>
            ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </Fragment>
  );
}

export default Products;
