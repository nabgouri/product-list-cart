export default function OrderTotal({ products }) {
  const totalPrice = products.reduce((acc, currentProduct) => {
    return acc + currentProduct.price * currentProduct.quantity;
  }, 0);
  return (
    <div className="flex items-center justify-between">
      <h3 className=" text-sm">Order Total</h3>
      <p className=" font-bold text-2xl">${totalPrice}</p>
    </div>
  );
}
