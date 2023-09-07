import { Link } from "react-router-dom"
import { Grid } from "@mui/material"

const PostItem = ({item}) => {
  return (
    <Grid item
        className="grid-item"
        xs={8} md={10}
        sx={{
            margin: 1,
            padding: 1
        }}
    >
        <Link to={`/posts/${item.id}`} className="post-link">
            <div className="post-title-display">{item.title}</div>
            <div className="post-content-display">{item.content}</div>
        </Link>
    </Grid>
  )
}

export default PostItem