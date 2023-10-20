import { useAuth } from "./CurrentUserContext"
import "../css/nav.css"
import {BiLogOut} from "react-icons/bi"

function Logout()  {
 const {user} = useAuth()
 const {logout} = useAuth()

if (user) {
 

 const handleClick = () => {
    logout()
}
return (
    <div className="nav_link" >
    <div className="icon-container">
      <div className="icon">
        <BiLogOut onClick={handleClick}/>
      </div>
        <p className="icon-text">Log Out </p>
        </div>
    </div>
)
}
}

export default Logout