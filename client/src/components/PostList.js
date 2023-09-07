import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPosts } from "../features/postSlice"
import { Grid } from "@mui/material"
import PostItem from "./PostItem"

const PostList = () => {
    const dispatch = useDispatch()

    const posts = useSelector(state => state.posts.posts)

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    if(posts.length === 0) {
        return <p>no posts yet</p>
    }

    return (
        <>
            <Grid container
                alignItems="center"
                justifyContent="center"
            >
                {posts.map((item) => (
                    <PostItem key={item.id} item={item} />
                ))}
            </Grid>
        </>
    )
}

export default PostList