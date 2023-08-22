import { Link } from 'react-router-dom';
import Logo from "../images/my-blog-logo.png"

const NavBar = () => {
  return (
    <div className="navbar">
        <Link to="/"
            style={{
                height: "100%",
                display: "flex",
                alignItems: "center"
            }}
        >
            <img src={Logo} alt="logo" className="logo" />
        </Link>
        <div className="links">
            <Link to="/createpost"
                style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    color: "#0275d8",
                    margin: "0 10px",
                    fontWeight: "bold",
                    textDecoration: "none"
                }}
            >
                new post
            </Link>
            <Link to="/"
                style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    color: "#0275d8",
                    margin: "0 10px",
                    fontWeight: "bold",
                    textDecoration: "none"
                }}
            >
                log out
            </Link>
        </div>
    </div>
  )
}

export default NavBar