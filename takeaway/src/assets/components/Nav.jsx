import { Link } from 'react-router-dom'



const Nav = () => {
    return(
        <>
            <nav>
                <Link to="/" className="nav_link">
                    Home
                </Link>
                <Link to="/Restaurants" className="nav_link">
                     Restaurants
                </Link>
            </nav>
            <header>
                <h1>Take that!</h1>
            </header>
        </>
    )
}

export default Nav