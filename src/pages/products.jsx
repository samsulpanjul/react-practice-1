import CardProduct from "../components/fragments/CardProduct";

function Products() {
  return (
    <div className="flex justify-center">
      <CardProduct>
        <CardProduct.Header image="https://via.placeholder.com/300" />
        <CardProduct.Body title="Product">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, accusantium.</CardProduct.Body>
        <CardProduct.Footer price="Rp. 500,000"></CardProduct.Footer>
      </CardProduct>
    </div>
  );
}

export default Products;
