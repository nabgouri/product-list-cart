import emptyIllustration from "../assets/images/illustration-empty-cart.svg";

export default function Cart() {
  return (
    <section className="bg-white  rounded-xl p-6 mb-6 self-start ">
      <h2 className="text-red text-2xl font-bold">Your Cart (0)</h2>
      <div className="flex flex-col p-4 items-center gap-6">
        <img src={emptyIllustration} alt="empty illustration" />
        <p className="text-rose-500 text-sm font-semibold ">
          Your added items will appear here
        </p>
      </div>
    </section>
  );
}
