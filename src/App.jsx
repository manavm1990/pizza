import "./App.css";
import useEntities from "hooks/useEntities";
import Pizzas from "layout/Pizzas/Pizzas";

function App() {
  const pizzas = useEntities("pizzas");
  const toppings = useEntities("toppings");

  return (
    <>
      <h1 className="text-center text-3xl font-bold">Pizza Time! :)</h1>

      <main>
        <h2 className="text-center text-2xl font-bold">Order a pizza</h2>
        <Pizzas pizzas={pizzas} />
      </main>
    </>
  );
}

export default App;
