import { useState } from "react"
import { useDispatch } from "react-redux"
import { submitPost } from "../features/postSlice"
import { Button, TextField } from "@mui/material"

const CreatePost = (props) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const dispatch = useDispatch()

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleContentChange = (e) => {
    setContent(e.target.value)
  }

  return (
    <div className="create-post">
      <h4>title</h4>
      <form>
        <TextField 
          sx={{
            width: "100%"
          }}
          onChange={handleTitleChange}
          required
        />
        <h4>content</h4>
        <TextField 
          sx={{
            width: "100%"
          }}
          multiline
          rows={12}
          onChange={handleContentChange}
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
          onClick={() => {
            dispatch(submitPost({ title: title, content: content }))
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  )
}

export default CreatePost