export default function Auth({ children, title }) {
  return (
    <div className="bg-white text-black p-5 w-full max-w-xs rounded-md">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mb-3">Please enter your details</p>
      {children}
    </div>
  );
}
