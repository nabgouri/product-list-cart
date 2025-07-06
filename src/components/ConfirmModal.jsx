import { Icon } from "@iconify/react/dist/iconify.js";
import CtaButton from "./CtaButton";
import OrderTotal from "./OrderTotal";
import { useContext } from "react";
import { productCartcontext } from "../App";
import ProductCart from "./ProductCart";

export default function ConfirmModal({ ref }) {
  const { products } = useContext(productCartcontext);
  return (
    <dialog ref={ref} className="pt-10 px-6">
      <Icon
        icon="carbon:checkmark-outline"
        width="32"
        height="32"
        className="text-green"
      />
      <h1 className="text-[2.5rem] mt-6">Order Confirmed</h1>
      <p className="text-rose-500 mt-2">We hope you enjoy your food!</p>
      <ul>
        {products.map((product) => (
          <ProductCart product={product} />
        ))}
      </ul>
      <OrderTotal products={products}></OrderTotal>
      <CtaButton>Start New Order</CtaButton>
    </dialog>
  );
}
