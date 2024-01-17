export default function Input({ type, nameId, placeholder }) {
  return <input type={type} name={nameId} id={nameId} placeholder={placeholder} className="border border-slate-600 rounded-lg p-2 w-full py-2 px-4" />;
}
