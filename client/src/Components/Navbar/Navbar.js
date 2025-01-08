import "./NavbarStyle.css"
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav>
    <h1>GYM MATE</h1>
    <div className="auth">
        <Link to="/" >Signup</Link>
        <Link to="/">Login</Link>
    </div>
    </nav>
  )
}

export default Navbar