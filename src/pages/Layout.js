import './Layout.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout(){
//<Outlet></Outlet>  нужен чтобы отоброжать дочерние элементы в родительских компонентах
    return(
        <div>
            <Header/>
            <main className='content'>
                <Outlet></Outlet> 
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;