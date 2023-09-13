import { useState } from "react"
import { useDispatch } from "react-redux"
import { Button, TextField } from "@mui/material"
import { addNewPost } from "../features/postSlice"

const CreatePost = (props) => {

  const dispatch = useDispatch()

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const [addRequestStatus, setAddRequestStatus] = useState("idle")

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleContentChange = (e) => {
    setContent(e.target.value)
  }

  const canSave = [title, content].every(Boolean) && addRequestStatus === "idle"

  const onAddPost = (e) => {
    e.preventDefault()
    try {
      setAddRequestStatus("pending")
      dispatch(addNewPost({ title, content }))
      setTitle("")
      setContent("")
    } catch (err) {
      console.error("Failed to tave post", err)
    } finally {
      setAddRequestStatus("idle")
    }
  }

  return (
    <div className="create-post">
      <h4>title</h4>
      <form noValidate autoComplete="off" className="form" onSubmit={onAddPost}>
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
          disabled={!canSave}
        >
          Submit
        </Button>
      </form>
    </div>
  )
}

export default CreatePost