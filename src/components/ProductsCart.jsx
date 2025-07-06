import { useContext, useRef } from "react";
import { productCartcontext } from "../App";
import ProductCart from "./ProductCart";
import { Icon } from "@iconify/react/dist/iconify.js";
import CtaButton from "./CtaButton";
import OrderTotal from "./OrderTotal";
import ConfirmModal from "./ConfirmModal";
export default function ProductsCart() {
  const { products } = useContext(productCartcontext);
  const modalRef = useRef();
  return (
    <>
      <ul className="my-6 grid gap-4">
        {products.map((product) => (
          <ProductCart key={product.name} product={product} />
        ))}
      </ul>
      <OrderTotal products={products} />
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
      <CtaButton onClick={() => modalRef.current.showModal()}>
        Confirm Order
      </CtaButton>
      <ConfirmModal ref={modalRef} />
    </>
  );
}
