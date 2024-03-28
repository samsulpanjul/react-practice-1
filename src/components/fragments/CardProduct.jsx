import Button from "../elements/button/Button";

export default function CardProduct({ children }) {
  return <div className="w-full max-w-xs p-3 shadow border border-slate-400 rounded bg-white flex flex-col justify-between gap-3">{children}</div>;
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

function Body({ name, children }) {
  return (
    <div className="h-full">
      <a href="#">
        <h5 className="text-gray-900 text-lg font-semibold">{name}</h5>
        <p>{children}</p>
      </a>
    </div>
  );
}

function Footer({ price, handleAddToCart, id }) {
  return (
    <div className="flex justify-between items-center">
      <p className="text-gray-900 text-lg font-semibold">Rp. {price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</p>
      <Button classname={"bg-gray-900"} onClick={() => handleAddToCart(id)}>
        Add to cart
      </Button>
    </div>
  );
}
