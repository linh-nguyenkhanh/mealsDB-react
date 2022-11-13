import { useGlobalContext } from "../context";
import { BsHandThumbsUp } from "react-icons/bs";

export default function MealsCard() {
  const { meals, loading } = useGlobalContext();

  if (loading) {
    return (
      <section className="p-5">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (meals.length < 1) {
    return (
      <section>
        <h4>No meals matched your search term. Please try again.</h4>
      </section>
    );
  }

  return (
    <section
      className="grid  m-auto lg:grid-cols-3 sm:grid-cols-1 sm:w-[60%] gap-y-7
      gap-x-40 py-10  w-screen 
    md:grid-cols-2 "
    >
      {meals.map((meal) => {
        const { idMeal, strMeal: title, strMealThumb: image } = meal;
        return (
          <article
            key={idMeal}
            className="w-60  bg-white rounded-md drop-shadow-md cursor-pointer
            hover:drop-shadow-2xl duration-300"
          >
            <img
              src={image}
              alt="meals"
              className=" rounded-t-md object-cover h-50 w-50"
            />
            <footer className="p-3 flex items-center justify-between flex-wrap ">
              <h5 className="text-base">{title}</h5>
              <button className="bg-transparent text-lg p-2 hover:text-blue-500 border-none cursor-pointer transition hover:ease-in duration-100 hover:font-bold">
                <BsHandThumbsUp />
              </button>
            </footer>
          </article>
        );
      })}
    </section>
  );
}
