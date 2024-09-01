import React, { useEffect, useState } from "react";
import Meal from "./Meal";

const Meals = ({searchValue}) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
    );
    const data = await response.json();
    // setMeals(data);
    console.log(meals);
    setMeals(data.drinks);
    setLoading(false);
  };
  useEffect(() => {
    // fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    // .then(res =>res.json())
    // .then(data => console.log(data))
    fetchData();
  }, []);
  const  filterPokemon = meals.filter( meal => meal.strDrink.toLowerCase().includes(searchValue.toLowerCase()))
  return (
    <div>
      <div className="grid md:grid-cols-3 mx-2  gap-3">
        {filterPokemon.map((meal, idx) => (
          <Meal key={idx} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Meals;
