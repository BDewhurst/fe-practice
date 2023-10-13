import { Link } from 'react-router-dom'
import "../css/nav.css"


const Nav = () => {
    return(
        <>
         
            <nav className='nav_bar'>
            <img src="./src/assets/deliveroo.png" id="deliveroo_logo"/>
            <header>
                <h1 id="main_title">Take that!</h1>
            </header>
                <Link to="/" className="nav_link">
                    Home
                </Link>
                <Link to="/Restaurants" className="nav_link">
                     Restaurants
                </Link>
                <Link to="/Cuisine" className="nav_link">
                    Cuisine
                </Link>
            </nav>

        </>
    )
}

export default Nav