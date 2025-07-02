import Cart from "./components/Cart";
import ProductLists from "./components/ProductLists";

function App() {
  return (
    <article className="bg-rose-50 h-screen p-6 font-Red-Hat">
      <h1 className="text-[2.5rem] text-rose-900 font-bold leading-[120%] mb-8">
        Desserts
      </h1>
      <ProductLists />
      <Cart />
    </article>
  );
}

export default App;
