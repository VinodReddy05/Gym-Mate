import "./NavbarStyle.css"
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav>
      <Link to="/">GYM MATE</Link>
    
  
    <div className="auth">
        <Link to="/signup" >Signup</Link>
        <Link to="/login">Login</Link>
    </div>
    </nav>
  )
}

export default Navbar