import React from 'react'
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

// only works for one button atm... just making multiple functions for now... dont HAVE to fix this
function handleClick(){

  navigate("/recipes")

}
function handleClick1(){

  navigate("/dietpage")
  
}
// click 2 takes me to a blank page cuz nothing for this is done yet
function handleClick2(){

  navigate("/blog")
  
}
function handleClick3(){

  navigate("/favorites")
  
}

  return (
    <div>
      <h1> 
        Chef's Kiss
      </h1>
      <body>
        <button onClick={handleClick}>
          Recipes
        </button> 
      <hr />
        <button onClick={handleClick1}>
          Diet/Goal Page
        </button>
      <hr />
        <button onClick={handleClick2}>
          Blog 
        </button>
      <hr />
        <button onClick={handleClick3}>
          Favorites
        </button>
      <hr />
      </body>
    </div>
  )
}

export default Home