import useMenu from "hooks/useMenu/useMenu";
import Pizzas from "layout/Pizzas/Pizzas";
import Toppings from "layout/Toppings/Toppings";
import "./App.css";

function App() {
  const [menu, dispatch] = useMenu();

  const { pizzas, toppings } = menu;

  const handlePizzaSelect = (e) => {
    const pizzaId = e.target.value;

    dispatch({ type: "toggleActiveToppings", payload: { pizzaId } });
  };

  return (
    <>
      <h1 className="my-4 text-center text-3xl font-bold">Pizza Time! :)</h1>

      <main className="container mx-auto flex items-center gap-x-4">
        {pizzas?.length ? (
          <Pizzas pizzas={pizzas} select={handlePizzaSelect} />
        ) : (
          <p>Loading Pizzas...</p>
        )}

        {toppings?.length ? (
          <Toppings toppings={toppings} />
        ) : (
          <p>Loading Toppings...</p>
        )}
      </main>
    </>
  );
}

export default App;
