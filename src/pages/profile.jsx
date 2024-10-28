import { useLogin } from "../hooks/useLogin";

const Profile = () => {
  const username = useLogin();

  return (
    <div>
      <p>Profile</p>
      <p>Hello {username}</p>
    </div>
  );
};

export default Profile;
