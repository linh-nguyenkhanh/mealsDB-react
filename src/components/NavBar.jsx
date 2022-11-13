import React, { useState } from "react";
import { useGlobalContext } from "../context";

export default function NavBar() {
  //passing down props  = useGlobalContext
  const { setSearchTerm, fetchRandomMeals } = useGlobalContext();
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
    }
  };

  const handleRandomMeal = () => {
    setSearchTerm("");
    setText("");
    fetchRandomMeals();
  };

  return (
    <nav className="bg-white ">
      <form
        onSubmit={handleSubmit}
        className="flex space-x-4 justify-center m-auto max-w-7xl p-6 sm:px-6 lg:px-8 "
      >
        <input
          type="text"
          placeholder="Type your fav meal..."
          className="relative flex justify-center rounded-md p-2 bg-gray-100 
       drop-shadow-md "
          onChange={handleChange}
          value={text}
        />

        <button
          type="submit"
          className="bg-sky-500 hover:bg-blue-400 text-white rounded-md p-2 border-none drop-shadow-md w-24 cursor-pointer"
        >
          Search
        </button>
        <button
          type="submit"
          className="bg-blue-200 text-blue-600/75 hover:bg-black hover:text-white p-2 rounded-md border-none drop-shadow-md cursor-pointer"
          onClick={handleRandomMeal}
        >
          Suprise Me !
        </button>
      </form>
    </nav>
  );
}
