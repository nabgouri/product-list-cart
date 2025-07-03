import { productsData } from "../utils/data";
import Product from "./Product";

export default function ProductLists() {
  return (
    <ul className="grid  gap-6 md:gap-y-8  md:grid-cols-3">
      {productsData.map((product) => (
        <Product product={product} key={Math.random()} />
      ))}
    </ul>
  );
}
