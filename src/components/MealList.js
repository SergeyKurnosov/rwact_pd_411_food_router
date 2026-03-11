import './MealList.css'
import Meal from './Meal';

function MealList({ meals }) {

    return (
        <div className='list'>
            {
                meals.map(
                    meal =>(
                        <Meal key={meal.idMeal} {...meal}></Meal>
                    )
                )
            }
        </div>
    )
}

export default MealList;