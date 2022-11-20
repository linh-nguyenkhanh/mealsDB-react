import React from "react";
import { useGlobalContext } from "../context";
export default function FavPanel() {
  const { favorites, selectMeal, removeFromFavorites } = useGlobalContext();

  return (
    <section>
      <div className="mx-auto my-auto bg-black w-full max-w-70 px-5 pt-2 ">
        <h5 className="font-bold text-white py-1">Favorites</h5>
        <div className="flex flex-wrap gap-1 text-center ">
          {favorites.map((item) => {
            const { idMeal, strMealThumb: image } = item;
            return (
              <div key={idMeal} className="">
                <img
                  onClick={() => selectMeal(idMeal, true)}
                  src={image}
                  className="w-20 rounded-full border-solid border-4 border-white"
                />
                <button
                  className="ease-in duration-300 cursor-pointer text-white text-sm mb-2 py-2 hover:text-red-800"
                  onClick={() => removeFromFavorites(idMeal)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
