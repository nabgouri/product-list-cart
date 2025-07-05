import { useContext } from "react";
import { productCartcontext } from "../App";
import ProductCart from "./ProductCart";
import { Icon } from "@iconify/react/dist/iconify.js";
export default function ProductsCart() {
  const { products } = useContext(productCartcontext);
  const totalPrice = products.reduce((acc, currentProduct) => {
    return acc + currentProduct.price;
  }, 0);

  return (
    <>
      <ul className="my-6 grid gap-4">
        {products.map((product) => (
          <ProductCart product={product} />
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <h3 className="text-rose-900 text-sm">Order Total</h3>
        <p className="text-rose-900 font-bold text-2xl">${totalPrice}</p>
      </div>
      <div className="flex items-center gap-2 py-4 px-[3.25rem] bg-rose-50 rounded-lg my-6 justify-center ">
        <Icon
          icon="carbon:tree"
          width="20"
          height="20"
          className="text-green"
        />
        <p className="text-rose-900 text-sm">
          This is a <span className="font-semibold">carbon-neutral</span>{" "}
          delivery
        </p>
      </div>
    </>
  );
}
