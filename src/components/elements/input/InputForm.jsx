import Label from "./Label";
import Input from "./Input";

export default function InputForm({ type, nameId, placeholder }) {
  return (
    <div>
      <Label htmlFor={nameId}>Username</Label>
      <Input type={type} nameId={nameId} placeholder={placeholder} />
    </div>
  );
}
