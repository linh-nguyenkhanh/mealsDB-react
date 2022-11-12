import React , {useState}from 'react';


export default function NavBar() {
  const [text, setText] = useState('')


const handleSubmit = (e) =>{
  e.preventDefault();
  
}

  return( 
    <nav className="bg-gray-100">
      <form 
      onSubmit={handleSubmit}
      className="flex space-x-4  mx-auto max-w-7xl p-6 sm:px-6 lg:px-8 ">
 
<input type="text" 
        placeholder='Type your fav meal...'
        className="relative flex justify-center rounded-md p-2 bg-gray-40 
       drop-shadow-md" 
      onChange={(e) => setText(e.target.value)}
       />

        <button 
        type="submit"
        className="bg-sky-500 hover:bg-blue-400 text-white rounded-md p-2 border-none drop-shadow-md w-24">Search</button>
      <button 
      type="submit"
      className="bg-blue-200 text-blue-600/75 hover:bg-black hover:text-white p-2 rounded-md border-none drop-shadow-md">Suprise Me !</button>
       
    
      </form>
    </nav>
  )
}