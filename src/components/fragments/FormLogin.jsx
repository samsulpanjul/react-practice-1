import InputForm from "../elements/input/InputForm";
import Button from "../elements/button/Button";
import { useEffect, useRef } from "react";

export default function FormLogin() {
  function handleLogin(e) {
    e.preventDefault();
    localStorage.setItem("username", e.target.username.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/products";
  }

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col gap-3"
    >
      <InputForm
        type="text"
        nameId="username"
        placeholder="Username"
        ref={emailRef}
      />
      <InputForm
        type="password"
        nameId="password"
        placeholder="Password"
      />
      <Button
        classname="w-full bg-slate-500"
        type="submit"
      >
        Login
      </Button>
    </form>
  );
}
