import { productsData } from "../utils/data";
import Product from "./Product";

export default function ProductLists() {
  return (
    <ul>
      {productsData.map((product) => (
        <Product product={product} />
      ))}
    </ul>
  );
}
