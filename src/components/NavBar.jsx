import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '../firebaseConfig'
import { signOut } from 'firebase/auth'

const NavBar = () => {

    const [user] = useAuthState(auth)

    const navigate = useNavigate()

    const onAddArticle = () => {
        navigate("/add-article")
    }

    const onLogIn = () => {
        navigate("/login")
    }

    const onRegister = () => {
        navigate("/register")
    }

    const onSignOut = () => {
        signOut(auth)
        navigate("/")
    }

    return (
        <div className="fixed-top" style={{ backgroundColor: "white" }}>
            <nav className="navbar d-flex justify-content-between align-items-center">
                <div>
                    <Link className="nav-link" to="/">
                        <img 
                            src="my-blog-logo.png" 
                            height={60} 
                            alt="logo"
                            style={{
                                marginLeft: "10px"
                            }}
                        />
                    </Link>   
                </div>
                <div>
                    {
                        user ? (
                            <>
                                <span className="pe-4">
                                    signed in as { user.displayName || user.email }
                                </span>
                                <button 
                                    className="btn btn-primary btn-sm me-3"
                                    onClick={() => {onAddArticle()}}
                                >
                                    Add Article
                                </button>
                                <button 
                                    className="btn btn-danger btn-sm me-3"
                                    onClick={() => {onSignOut()}}
                                >
                                    Log Out
                                </button>
                            </>
                        ) : (
                            <>
                                <button 
                                    className="btn btn-primary btn-sm me-3"
                                    onClick={() => {onLogIn()}}
                                >
                                    Log In
                                </button>
                                <button 
                                    className="btn btn-primary btn-sm me-3"
                                    onClick={() => {onRegister()}}
                                >
                                    Register
                                </button>
                            </>
                        )
                    }
                </div>
            </nav>
        </div>
    )
}

export default NavBar