import { Link } from 'react-router-dom'
import "../css/nav.css"
import {BiHome, BiFoodMenu} from "react-icons/bi"
import {IoFastFood} from "react-icons/io5"
import {GiKangaroo} from "react-icons/gi"
import { BiLogIn } from 'react-icons/bi'

const Nav = () => {
    return(
        <>
         
            <nav className='nav_bar'>
            <GiKangaroo id="deliveroo_logo"/>
            <header>
                <h1 id="main_title">Take that!</h1>
            </header>
                <Link to="/" className="nav_link">
                    <div className="icon-container">
                    <BiHome className="icon"/>
                   <p className="icon-text">Home</p>
                    </div>
                </Link>
                <Link to="/Restaurants" className="nav_link">
                <div className="icon-container">
                    <BiFoodMenu className='icon' />
                     <p className='icon-text'>Restaurants</p>
                     </div>
                </Link>
                <Link to="/Cuisine" className="nav_link">
                    <div className='icon-container'>
                    <IoFastFood className='icon' /> 
                    <p className='icon-text'>Cuisine</p>
                    </div>
                </Link>
                <Link to="/login" className="nav_link">
                    <div className='icon-container'>
                    <BiLogIn className='icon' /> 
                    <p className='icon-text'>Login</p>
                    </div>
                </Link>
            </nav>

        </>
    )
}

export default Nav