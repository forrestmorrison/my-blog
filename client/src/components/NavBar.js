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
                    margin: "0 10px",
                    fontWeight: "bold",
                }}
            >
                <a href='/createpost'>new post</a>
            </Link>
            <Link to="/"
                style={{
                    margin: "0 10px",
                    fontWeight: "bold",
                }}
            >
                <a href='/'>log out</a>
            </Link>
        </div>
    </div>
  )
}

export default NavBar