import FormLogin from "../components/fragments/FormLogin";
import Auth from "../components/layouts/Auth";

export default function Login() {
  return (
    <Auth title="Login" type="login">
      <FormLogin />
    </Auth>
  );
}
