import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

export default function Auth({ children, title, type }) {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <div className={`flex justify-center h-screen items-center bg-slate-900 ${isDarkMode && "bg-neutral-700"}`}>
      <button
        className="px-4 py-2 rounded-md absolute right-2 top-2 bg-lime-300 font-semibold"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        Toggle Dark Mode
      </button>
      <div className="bg-white text-black p-5 w-full max-w-xs rounded-md">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mb-3">Please enter your details</p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
}

function Navigation({ type }) {
  return (
    <p className="text-center mt-5">
      {type === "login" ? (
        <>
          Dont have an account?{" "}
          <Link
            to="/register"
            className="text-blue-500 font-semibold"
          >
            Register
          </Link>
        </>
      ) : (
        <>
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-500 font-semibold"
          >
            Login
          </Link>
        </>
      )}
    </p>
  );
}
