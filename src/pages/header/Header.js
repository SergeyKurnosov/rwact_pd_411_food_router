import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <div className='wrap'>
                
                <div className='logo'><Link to="/"><button class="button">Food</button></Link></div>
                <div className='right'>
                    <ul>
                        <li><Link to="/about"><button class="button">About</button></Link></li>
                        <li><Link to="/contacts"><button class="button">Contacts</button></Link></li>
                    </ul>
                    
                </div>
            </div>

        </div>
    )
}

export default Header;