import { useNavigate, useParams } from 'react-router-dom';
import './Category.css';
import { useEffect, useState } from 'react';
import { getFilteredCategory } from '../api';
import MealList from './MealList';
import Preloader from './loader/Preloader';

function Category(){

    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate();
    let goBack = () => navigate(-1);
    useEffect(
        ()=>
        {
            getFilteredCategory(name).then(data => setMeals(data.meals));
        },[name]
    );

    return(
        <div className='wrap'>
                        {
                meals.length === 0 && meals != null ? <Preloader /> : <MealList meals={meals} />
            }
            {/* <MealList meals={meals} /> */}
            <button className='btn' onClick={goBack}>Go back</button>
        </div>
    )
}

export default Category;