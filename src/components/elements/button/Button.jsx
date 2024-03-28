function Button({ children, classname, onClick = () => {}, type = "button" }) {
  return (
    <button type={type} onClick={onClick} className={`rounded-lg py-2 px-4 text-white ${classname}`}>
      {children}
    </button>
  );
}

export default Button;
