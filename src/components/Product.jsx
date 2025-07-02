export default function Product({ product }) {
  const { image, name, category, price } = product;
  return (
    <li>
      <picture>
        <source srcSet={image.mobile} media="(max-width: 798px)" />
        <source srcSet={image.tablet} media="(max-width: 1440px)" />
        <img src={image.desktop} alt="" />
      </picture>

      <button>Add to Cart</button>
      <span>{category}</span>
      <h2>{name}</h2>
      <p>{price}</p>
    </li>
  );
}
