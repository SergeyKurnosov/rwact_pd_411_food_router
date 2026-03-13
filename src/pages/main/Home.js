import './Home.css';
import { useState, useEffect } from 'react';
import { getAllCategories } from '../../api';
//import Preloader
//import CategoryList
// import CategoryList from '../../components/CategoryList';
import CategoryList from '../../components/categoryList/CategoryList';
import Preloader from '../../components/loader/Preloader';

function Home() {
    const [catalog, setCatalog] = useState([]);
    useEffect(
        () => {
            getAllCategories().then((data) => { setCatalog(data.categories); });
        }, []
    );
    return (
        <div className='wrap'>
            {
                catalog.length === 0 && catalog != null ? <Preloader /> : <CategoryList catalog={catalog} />
            }
{/* <CategoryList catalog={catalog} /> */}
        </div>
    )
}
export default Home;