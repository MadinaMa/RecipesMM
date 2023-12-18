import { useEffect, useState } from 'react';
import './App.css';
import EachRecipe from './EachRecipe';

function App() {


  const MY_ID = "18e16315";
  const MY_KEY = "0956e36ba8bb4b9716d24f9384306aea";

  
const [mySearch, setMySearch] = useState ("");
const [myRecipes, setMyRecipes] = useState([]);
const [requestSubmitted, setRequestSubmitted] = useState("");


useEffect(() => {
  const getRecipe = async () => {
    if (requestSubmitted !== '') {
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${requestSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
  const data = await response.json();
  setMyRecipes(data.hits);
  //console.log(data.hits);//
  showAlert();
  
    }

  }
  getRecipe()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestSubmitted])


  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
 }
 
 function finalSearch(e) {
   e.preventDefault()
   setRequestSubmitted(mySearch)
   }

   function showAlert() {
    alert ( `Now, scroll down to see the best recipes with ${requestSubmitted}!`)
  }


  return (<div className='find'>
    <div className='container1'>
      <h1> Hi! I am a master chief. </h1>
      <h2> And I know more than 2 million recipes. </h2>
      <h2> What do you want to try today? </h2>
      <p> Type in any ingredient </p>
   
 
     <form onSubmit={finalSearch}>
         <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}/>
         <button className='btn'> Find recipe </button>
    </form>
  
    </div>

    {myRecipes.map((element, index) => (
     <EachRecipe key={index}
     label = {element.recipe.label} 
     image = {element.recipe.image}
     cuisineType = {element.recipe.cuisineType}
     ingredients={element.recipe.ingredientLines}
     dietLabels = {element.recipe.dietLabels}
     totalTime = {element.recipe.totalTime}/>
   ))}

    </div>
  );
}

export default App;
