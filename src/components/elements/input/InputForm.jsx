import Label from "./Label";
import Input from "./Input";
import { forwardRef } from "react";

const InputForm = forwardRef(({ type, nameId, placeholder }, ref) => {
  return (
    <div>
      <Label htmlFor={nameId}>Username</Label>
      <Input
        type={type}
        nameId={nameId}
        placeholder={placeholder}
        ref={ref}
      />
    </div>
  );
});

export default InputForm;
