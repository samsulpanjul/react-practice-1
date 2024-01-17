import InputForm from "../elements/input/InputForm";
import Button from "../elements/button/Button";

export default function FormRegister() {
  return (
    <form action="" className="flex flex-col gap-3">
      <InputForm type="text" nameId="fullname" placeholder="Full name" />
      <InputForm type="text" nameId="username" placeholder="Username" />
      <InputForm type="password" nameId="password" placeholder="Password" />
      <InputForm type="password" nameId="confirmPassword" placeholder="Confirm Password" />
      <Button classname="w-full bg-slate-500">Register</Button>
    </form>
  );
}
