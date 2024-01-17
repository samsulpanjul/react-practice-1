import FormRegister from "../components/fragments/FormRegister";
import Auth from "../components/layouts/Auth";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <Auth title="Register" type="register">
      <FormRegister />
    </Auth>
  );
}
