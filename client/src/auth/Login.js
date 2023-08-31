import { useState } from 'react'
import { Button, TextField } from "@mui/material"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)

    return (
        <div className="log-in">
            <form>
                <h4>email</h4>
                <TextField 
                    sx={{
                        width: "100%"
                    }}
                    onChange={handleEmailChange}
                    required
                />
                <h4>password</h4>
                <TextField 
                    sx={{
                        width: "100%"
                    }}
                    onChange={handlePasswordChange}
                    required
                />
                <Button
                    sx={{
                        marginTop: "10px",
                        fontWeight: "bold",
                        backgroundColor: "#0275d8",
                        color: "white",
                        "&:hover": {
                        backgroundColor: "#8CD2D2"
                        }
                    }}
                    type="submit"
                >
                    Log In
                </Button>
            </form>
        </div>
    )
}

export default Login