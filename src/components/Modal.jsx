import React from "react";
import { useGlobalContext } from "../context";

export default function Modal() {
  const { selectedMeal, closeModal } = useGlobalContext();

  const {
    strMealThumb: image,
    strMeal: title,
    strInstructions: text,
    strSource: source,
  } = selectedMeal;
  return (
    <aside className="fixed top-0 left-0 w-[100%] h-[100%] bg-black/60 grid place-items-center transition-all z-50 ">
      <div className="rounded-xl w-[80vw] h-5/6 bg-white max-w-4xl overflow-scroll ">
        <div className="flex justify-center pt-2">
          <img
            src={image}
            alt={title}
            className="bg-cover bg-center h-60  rounded-md"
          />
        </div>
        <div className="px-4 py-4 ">
          <h2 className="text-xl font-bold p-2">{title}</h2>
          <p className="p-2 font-semibold text-gray-600">Cooking Instruction</p>
          <p className="p-2">{text}</p>
          <a
            href={source}
            target="_blank"
            className="p-2 font-semibold text-blue-600 hover:text-blue-800
            transition ease-in duration-300"
          >
            Original Source
          </a>
        </div>
        <button
          onClick={closeModal}
          className=" transition ease-in duration-300 bg-red-600 hover:bg-red-700 mx-5 text-white px-5 py-2 rounded-md "
        >
          Close
        </button>
      </div>
    </aside>
  );
}
