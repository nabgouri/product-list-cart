import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext } from "react";
import { productCartcontext } from "../App";

export default function ProductCart({ product, isModalProduct }) {
  const { name, quantity, price } = product;
  const { products, setProducts } = useContext(productCartcontext);
  function removeItem() {
    const nextProducts = products.filter(
      (selectedProduct) => selectedProduct.name !== product.name
    );
    setProducts(nextProducts);
  }
  return (
    <li
      className={`border-b-2 border-rose-100 flex items-center justify-between pb-4 ${
        isModalProduct && "bg-rose-50"
      }`}
    >
      <div>
        <h3 className="font-semibold text-sm  mb-2">{name}</h3>

        <div className="flex items-center gap-2">
          <p className="text-red font-semibold text-sm">{quantity}</p>
          <p className="text-sm text-rose-500">{price}</p>
          <p className="font-semibold text-sm text-rose-500">
            {price * quantity}
          </p>
        </div>
      </div>
      <button className="cursor-pointer" onClick={removeItem}>
        <Icon
          icon="iconoir:delete-circle"
          width="20"
          height="20h"
          className="text-rose-400 hover:text-rose-900"
        />
      </button>
    </li>
  );
}
