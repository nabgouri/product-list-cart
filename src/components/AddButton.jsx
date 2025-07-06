import { Icon } from "@iconify/react/dist/iconify.js";
import { productCartcontext } from "../App";
import { useContext } from "react";
export default function AddButton({ product }) {
  const { products, setProducts } = useContext(productCartcontext);
  function addToCart() {
    product.quantity = 1;
    const nextProducts = [...products];
    nextProducts.push(product);
    setProducts(nextProducts);
  }
  const diseredProduct = products.find(
    (searchedProduct) => searchedProduct.name === product.name
  );
  const diseredProductIndex = products.findIndex(
    (searchedProduct) => searchedProduct.name === product.name
  );
  function incrementQuantity() {
    const nextProduct = { ...diseredProduct };
    nextProduct.quantity += 1;
    const nextProducts = [...products];
    nextProducts[diseredProductIndex] = nextProduct;
    setProducts(nextProducts);
  }
  function decrementQuantity() {
    const nextProduct = { ...diseredProduct };
    nextProduct.quantity -= 1;
    const nextProducts = [...products];
    nextProducts[diseredProductIndex] = nextProduct;
    setProducts(nextProducts);
  }
  const isProductInCart = products.find(
    (searchedProduct) => searchedProduct.name === product.name
  );
  return isProductInCart === undefined ? (
    <button
      onClick={addToCart}
      className={`flex border-2 self-center rounded-[999px] gap- font-semibold text-sm items-center py-3 -mt-4  cursor-pointer text-rose-900  gap-2 border-rose-400 hover:border-red hover:text-red bg-white px-7`}
    >
      <Icon
        icon="carbon:shopping-cart-plus"
        className="text-red"
        height="20px"
        width="20px"
      />
      Add to cart
    </button>
  ) : (
    <div className="flex border-2 self-center rounded-[999px] gap- font-semibold text-sm items-center py-3 -mt-4   text-white bg-red gap-[2.75rem] px-3 border-none ">
      <button className="cursor-pointer" onClick={decrementQuantity}>
        <Icon icon="carbon:subtract-alt" width="20" height="20" />
      </button>
      {product.quantity}
      <button className="cursor-pointer " onClick={incrementQuantity}>
        <Icon
          icon="gridicons:add-outline"
          width="20"
          height="20"
          className="hover:fill-white"
        />
      </button>
    </div>
  );
}
