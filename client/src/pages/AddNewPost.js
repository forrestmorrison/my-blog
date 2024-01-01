import { useState } from "react"
import { useDispatch } from "react-redux"
import { Button, TextField } from "@mui/material"

const AddNewPost = () => {
    const [post, setPost] = useState({ title: "", body: "" })

    const dispatch = useDispatch()

    return (
        <div className="create-post">
            <form noValidate autoComplete="off" className="form">
                <h4>title</h4>
                <TextField 
                    sx={{
                        width: "100%"
                    }}
                    onChange={e => setPost({ ...post, title: e.target.value })}
                    required
                />
                <h4>body</h4>
                <TextField 
                    sx={{
                        width: "100%"
                    }}
                    multiline
                    rows={12}
                    onChange={e => setPost({ ...post, body: e.target.value})}
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
                    disabled={!canSave}
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default AddNewPost