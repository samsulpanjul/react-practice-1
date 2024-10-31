import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../elements/button/Button";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";

const Navbar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const { total } = useTotalPrice();

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  function handleLogout() {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }

  return (
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
      <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
        Item: {totalCart} | Price: ${total}
      </div>
      <button
        className={`px-4 py-2 rounded-md font-semibold ${isDarkMode ? "bg-slate-800 text-white" : "bg-lime-300 text-black"}`}
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default Navbar;
