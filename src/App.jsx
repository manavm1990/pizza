import useMenu from "hooks/useMenu";
import Pizzas from "layout/Pizzas/Pizzas";
import Toppings from "layout/Toppings/Toppings";
import "./App.css";

function App() {
  const [menu, dispatch] = useMenu();

  const { pizzas, toppings } = menu;

  return (
    <>
      <h1 className="text-center text-3xl font-bold">Pizza Time! :)</h1>

      <main>
        {pizzas?.length ? (
          <Pizzas pizzas={pizzas} select={() => {}} />
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
