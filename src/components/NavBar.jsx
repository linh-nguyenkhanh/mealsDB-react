import React from 'react';


export default function NavBar() {
  return(
    <nav class="bg-gray-200">
      <div class="flex space-x-8  mx-auto max-w-7xl p-8 sm:px-6 lg:px-8 ">
<div>
<input type="text" placeholder='Type your fav meal...'
       class="relative flex justify-center rounded-md p-2 bg-gray-40 text-gray-300"      
       />
</div>
      <div> <button class="bg-sky-500 hover:bg-blue-400 text-white rounded-md p-2 border-none">Search</button></div>
      <div><button class="bg-blue-200 text-blue-600/75 hover:bg-black hover:text-white p-2 rounded-md border-none">Suprise Me !</button></div>
       
      </div>
      
    </nav>
  )
}