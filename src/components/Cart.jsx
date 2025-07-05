import emptyIllustration from "../assets/images/illustration-empty-cart.svg";
import { productCartcontext } from "../App";
import { useContext } from "react";
import ProductCart from "./ProductCart";
import ProductsCart from "./ProductsCart";
export default function Cart() {
  const { products } = useContext(productCartcontext);
  console.log(products.length);
  return (
    <section className="bg-white  rounded-xl p-6 mb-6 self-start ">
      <h2 className="text-red text-2xl font-bold">Your Cart (0)</h2>
      {products.length < 1 ? (
        <div className="flex flex-col p-4 items-center gap-6">
          <img src={emptyIllustration} alt="empty illustration" />
          <p className="text-rose-500 text-sm font-semibold ">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <ProductsCart />
      )}
    </section>
  );
}
