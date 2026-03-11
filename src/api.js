import { API_URL } from "./config";

const getAllCategories = async () =>
{
    const responce = await fetch(API_URL + '/categories.php');
    return await responce.json();
}
const getMealById = async (idMeal) =>
{
    const responce = await fetch(API_URL + '/lookup.php?i='+idMeal);
    return await responce.json();
}
const getFilteredCategory = async (catName) =>
{
    const responce = await fetch(API_URL + '/filter.php?c=' + catName);
    return await responce.json();
}

export{getMealById, getAllCategories, getFilteredCategory}