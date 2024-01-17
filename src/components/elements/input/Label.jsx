export default function Label({ children, htmlFor }) {
  return (
    <label className="block font-bold text-sm" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
