import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
const AppContext = React.createContext();

const searchMealUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  //fetch all meals
  const fetchMeal = async (url) => {
    setLoading(true);
    try {
      const { data } = await Axios.get(url);
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.log(error.response);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMeal(searchMealUrl);
  }, []);

  useEffect(() => {
    if (!searchTerm) return;
    fetchMeal(`${searchMealUrl}${searchTerm}`);
  }, [searchTerm]);

  //fetch random meals
  const fetchRandomMeals = () => {
    fetchMeal(randomMealUrl);
  };
  return (
    //providing initial context values
    <AppContext.Provider
      value={{ meals, loading, setSearchTerm, fetchRandomMeals, showModal }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
//export AppProvider to main and wrap App
export { AppContext, AppProvider };
