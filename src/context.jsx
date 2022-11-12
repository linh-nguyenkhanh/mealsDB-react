import React, {useContext, useEffect, useState} from 'react'
import Axios from 'axios'
const AppContext = React.createContext();


const searchMealUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a'
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({children}) => {
  const [meals, setMeals] = useState([]);


  const fetchMeal =  async (url) => {
    try{
        const {data} = await Axios(url)
        setMeals(data.meals)
    } catch(error){
        console.log(error.response)
    }
  }
useEffect(() =>{
      fetchMeal(searchMealUrl)
},[meals])

  return (
    <AppContext.Provider value={{meals}}>
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () =>{
  return useContext(AppContext)
}

export {AppContext, AppProvider}