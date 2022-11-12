import { useGlobalContext } from '../context'

export default function MealsCard(){
  const {meals} = useGlobalContext();
  return(
    <section >
      {meals.map(meal => {
        const {idMeal, strMeal: title, strMealThumb : image} = meal
            return <article className='  ' key={idMeal}>
              <img src={image} alt="meals" 
              className="rounded w-40"
              />
              <footer>
                <h5>{title}</h5>
                <button className='bg-blue-500 p-2 rounded-md drop-shadow-md hover:bg-blue-100 border-none'>Click me</button>
              </footer>
            </article>
}
  
)}
    </section>
  )
}