function EachRecipe({label, image, cuisineType, ingredients, dietLabels,  totalTime}) {

    return(
        <div className="recipes">
            <div className="container2">
            <h2> {label} </h2>
            </div>

            <div className="container2">
            <h3> Cuisine type: {cuisineType} </h3>
            </div>

            <div className="container2">
            <img src={image} alt="food"/>
            </div>

            <ul className="container2 list">
                {ingredients.map((ingredient, index) => (
                  <li key={index}> 
                  {ingredient}</li>
                ))}
            </ul>

            <div className="container2">
                <p> Diet label: {dietLabels} </p>
            </div>

            <div className="container2">
               <p> Cooking time: { totalTime} min. </p>
            </div>
            

        </div>
    )
}

export default EachRecipe;