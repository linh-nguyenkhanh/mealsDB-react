import { useGlobalContext } from '../context'
import {BsHandThumbsUp} from 'react-icons/bs'
export default function MealsCard(){
  const {meals} = useGlobalContext();
  return(
    <section className='grid   lg:grid-cols-3 gap-10 p-4  max-w-[90%] 
    md:grid-cols-1 ' >
      {meals.map(meal => {
        const {idMeal, strMeal: title, strMealThumb : image} = meal
            return <article  
            key={idMeal}
            className="w-45 bg-white rounded-md drop-shadow-md cursor-pointer
            hover:drop-shadow-2xl duration-300">
              <img src={image} alt="meals" 
              className="  rounded-t-md"
              />
              <footer className='p-4 flex items-center justify-between flex-wrap '>
                <h5 className='text-base'>{title}</h5>
                <button className='bg-transparent text-lg p-2 hover:text-blue-500 border-none cursor-pointer transition hover:ease-in duration-100 hover:font-bold'>
                <BsHandThumbsUp/>
                </button>
              </footer>
            </article>
}
  
)}
    </section>
  )
}