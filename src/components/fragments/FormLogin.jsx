import InputForm from "../elements/input/InputForm";
import Button from "../elements/button/Button";

export default function FormLogin() {
  return (
    <form action="" className="flex flex-col gap-3">
      <InputForm type="text" nameId="username" placeholder="Username" />
      <InputForm type="password" nameId="password" placeholder="Password" />
      <Button classname="w-full bg-slate-500">Login</Button>
    </form>
  );
}
