import { useState } from 'react'
import { Button, TextField } from "@mui/material"

const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleNameChange = (e) => setName(e.target.value)
    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)

    return (
        <div className="sign-up">
            <form>
                <h4>name</h4>
                <TextField 
                    sx={{
                        width: "100%"
                    }}
                    onChange={handleNameChange}
                    required
                />
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
                    Sign Up
                </Button>
            </form>
        </div>
    )
}

export default SignUp