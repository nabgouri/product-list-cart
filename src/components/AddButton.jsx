import { Icon } from "@iconify/react/dist/iconify.js";
import { productCartcontext } from "../App";
import { useContext } from "react";
export default function AddButton({ product }) {
  const { products, setProducts } = useContext(productCartcontext);
  function addToCart() {
    product.quantity = 1;
    const nextProducts = [...products];

    setProducts([...nextProducts, product]);
  }
  const dynamicStyles =
    product.quantity === undefined
      ? "text-rose-900 bg-white gap-2 border-rose-400 hover:border-red hover:text-red bg-white px-7 "
      : "text-white bg-red gap-[2.75rem] px-3 border-none";
  return (
    <button
      onClick={addToCart}
      className={`flex border-2 self-center rounded-[999px] gap- font-semibold text-sm items-center py-3 -mt-4  cursor-pointer ${dynamicStyles}`}
    >
      {product.quantity === undefined ? (
        <>
          <Icon
            icon="carbon:shopping-cart-plus"
            className="text-red"
            height="20px"
            width="20px"
          />
          Add to cart
        </>
      ) : (
        <>
          <button>
            <Icon icon="carbon:subtract-alt" width="20" height="20" />
          </button>
          {product.quantity}
          <button>
            <Icon icon="gridicons:add-outline" width="20" height="20" />
          </button>
        </>
      )}
    </button>
  );
}
