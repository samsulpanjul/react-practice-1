import Button from "../elements/button/Button";

export default function CardProduct({ children }) {
  return <div className="w-full max-w-xs p-3 shadow border border-slate-400 rounded bg-white flex flex-col justify-center gap-3">{children}</div>;
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

function Header({ image }) {
  return (
    <a href="#" className="inline-block p-2">
      <img src={image} alt="Product" />
    </a>
  );
}

function Body({ title, children }) {
  return (
    <div>
      <a href="#">
        <h5 className="text-gray-900 text-lg font-semibold">{title}</h5>
        <p>{children}</p>
      </a>
    </div>
  );
}

function Footer({ price }) {
  return (
    <div className="flex justify-between items-center">
      <p className="text-gray-900 text-lg font-semibold">{price}</p>
      <Button classname={"bg-gray-900"}>Add to cart</Button>
    </div>
  );
}
