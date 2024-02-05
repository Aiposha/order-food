import { useContext, useState } from "react";
import { Cart } from "./components/cart/Cart";
import { Header } from "./components/header/Header";

import { modalContext } from "./context/modal-context";
import { Meals } from "./components/Meals/Meals";
import { MealsSummary } from "./components/Meals/MealsSummary";
import Login from "./components/login/Login";
import { authContext } from "./context/auth-context";
import AddMeals from "./components/login/AddMeals";

const DUMMY_MEALS = [
  {
    id: "m1",
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    title: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    title: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function App() {
  const { isModalOpen, isAddMealOpen } = useContext(modalContext);
  const { isLogin } = useContext(authContext);
  const [meals, setMeals] = useState(DUMMY_MEALS);

  const onAddNewMeal = (newMeal) => {
    setMeals([...meals, newMeal]);
  };

  return (
    <>
      {isLogin ? (
        <>
          <Header />
          {isAddMealOpen && <AddMeals onAddNewMeal={onAddNewMeal} />}
          <MealsSummary />
          <Meals onAddNewMeal={onAddNewMeal} meals={meals} />
          {isModalOpen && <Cart />}
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
