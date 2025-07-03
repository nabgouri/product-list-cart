import Cart from "./components/Cart";
import ProductLists from "./components/ProductLists";

function App() {
  return (
    <article className="bg-rose-50 min-h-screen p-6 font-Red-Hat md:p-10  xl:px-28 xl:py-[5.5rem]">
      <h1 className="text-[2.5rem] text-rose-900 font-bold leading-[120%] mb-8">
        Desserts
      </h1>
      <main className="grid gap-8 xl:grid-cols-2  ">
        <ProductLists />
        <Cart />
      </main>
    </article>
  );
}

export default App;
