function Button({ children, classname }) {
  return <button className={`rounded-lg py-2 px-4 text-white ${classname}`}>{children}</button>;
}

export default Button;
