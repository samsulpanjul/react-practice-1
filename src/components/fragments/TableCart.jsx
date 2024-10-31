import { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice, useTotalPriceDispatch } from "../../context/TotalPriceContext";

const TableCart = ({ products }) => {
  const cart = useSelector((state) => state.cart.data);
  // const [totalPrice, setTotalPrice] = useState(0);
  const { isDarkMode } = useContext(DarkMode);
  const dispatch = useTotalPriceDispatch();
  const { total } = useTotalPrice();
  const totalPrice = total;

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const total = cart.reduce((acc, curr) => {
        const product = products.find((product) => product.id === curr.id);
        return acc + product.price * curr.qty;
      }, 0);
      dispatch({
        type: "UPDATE",
        payload: {
          total: total,
        },
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <table className={`text-left table-auto border-separate border-spacing-x-5 ${isDarkMode && "text-white"}`}>
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
  );
};

export default TableCart;
