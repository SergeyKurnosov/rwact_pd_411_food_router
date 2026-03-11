import { useNavigate, useParams } from 'react-router-dom';
import './Recipe.css';
import { useEffect, useState } from 'react';
import { getMealById } from '../api';

function Recipe(){

    const {id} = useParams();
    const [recipe,setRecipe] = useState({});
    const navigate = useNavigate();
    let goback = navigate(-1);

useEffect(
    () => {getMealById(id).then((date)=> setRecipe(date.meals[0]))},[id]
);

    return (
        <div className='wrap'>
            <div className='recipe'>
                <img src={recipe.strMealTumb} alt={recipe.strMeal} />
                <h2>{recipe.strMeal}</h2>
                <div>Category: <h3>{recipe.strCategory}</h3></div>
                {recipe.strArea ? <div>Area: <h4>{recipe.strArea}</h4></div> : null}
                <p>{recipe.strInstructions}</p>
            </div>
            <button className='btn' onClick={goback}>Go Back</button>
        </div>
    )
}

export default Recipe;