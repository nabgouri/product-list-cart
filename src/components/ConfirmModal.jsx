import { Icon } from "@iconify/react/dist/iconify.js";
import CtaButton from "./CtaButton";
import OrderTotal from "./OrderTotal";
import { useContext, useEffect } from "react";
import { productCartcontext } from "../App";
import ProductCart from "./ProductCart";

export default function ConfirmModal({ ref }) {
  const { products, setProducts } = useContext(productCartcontext);
  useEffect(() => {
    const dialog = ref.current;

    const handleBackdropClick = (event) => {
      if (event.target === dialog) {
        dialog.close();
      }
    };

    if (dialog) {
      dialog.addEventListener("click", handleBackdropClick);
    }

    return () => {
      if (dialog) {
        dialog.removeEventListener("click", handleBackdropClick);
      }
    };
  }, [ref]);

  return (
    <dialog
      ref={ref}
      className="  pt-10 pb-6 px-6 md:p-10 backdrop:bg-[rgba(0,0,0,0.5)] "
    >
      <Icon
        icon="carbon:checkmark-outline"
        width="32"
        height="32"
        className="text-green"
      />
      <h1 className="text-[2.5rem] mt-6">Order Confirmed</h1>
      <p className="text-rose-500 mt-2">We hope you enjoy your food!</p>
      <div className="my-8 bg-rose-50 p-6 rounded-lg">
        <ul className=" mb-6 grid gap-4">
          {products.map((product) => (
            <ProductCart
              key={product.name}
              product={product}
              isModalProduct={true}
            />
          ))}
        </ul>
        <OrderTotal products={products}></OrderTotal>
      </div>
      <CtaButton onClick={() => setProducts([])} type="submit">
        Start New Order
      </CtaButton>
    </dialog>
  );
}
