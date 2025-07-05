import AddButton from "./AddButton";

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
        <AddButton product={product} />
      </div>
      <span className="mt-4 text-rose-500 text-sm inline-block ">
        {category}
      </span>
      <h2 className="text-base text-rose-900 font-semibold my-1">{name}</h2>
      <p className="text-base text-red font-semibold">${price}</p>
    </li>
  );
}
