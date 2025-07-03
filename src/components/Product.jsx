import { Icon } from "@iconify/react/dist/iconify.js";
export default function Product({ product }) {
  const { image, name, category, price } = product;
  return (
    <li>
      <div className="flex flex-col">
        <picture className="">
          <source srcSet={image.mobile} media="(max-width: 798px)" />
          <source srcSet={image.tablet} media="(max-width: 1440px)" />
          <img src={image.desktop} alt="" className="rounded-lg " />
        </picture>
        <button className="flex border-2 self-center rounded-[999px] text-rose-900 font-semibold text-sm items-center border-rose-400 py-3 px-7 gap-2 -mt-4 bg-white hover:border-red hover:text-red cursor-pointer">
          <Icon
            icon="carbon:shopping-cart-plus"
            className="text-red"
            height="20px"
            width="20px"
          />
          Add to Cart
        </button>
      </div>
      <span className="mt-4 text-rose-500 text-sm inline-block ">
        {category}
      </span>
      <h2 className="text-base text-rose-900 font-semibold my-1">{name}</h2>
      <p className="text-base text-red font-semibold">${price}</p>
    </li>
  );
}
