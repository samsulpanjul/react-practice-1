import InputForm from "../elements/input/InputForm";
import Button from "../elements/button/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../sevices/auth.service";

export default function FormLogin() {
  const [loginFailed, setLoginFailed] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
    // localStorage.setItem("username", e.target.username.value);
    // localStorage.setItem("password", e.target.password.value);
  }

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
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
        ref={usernameRef}
      />
      <InputForm
        type="password"
        nameId="password"
        placeholder="Password"
      />
      {loginFailed && <p className="text-sm text-red-500">{loginFailed}</p>}
      <Button
        classname="w-full bg-slate-500"
        type="submit"
      >
        Login
      </Button>
    </form>
  );
}
