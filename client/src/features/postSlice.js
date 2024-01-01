import axios from "axios"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const POSTS_URL = "/posts"

const initialState = []

export const getPosts = createAsyncThunk("posts/getPosts", async (posts) => {
    const response = await axios.get(`${POSTS_URL}`, posts)
    return response.data
})

export const showPost = createAsyncThunk("/posts/showPost", async (postId) => {
    const response = await axios.get(`${POSTS_URL}/${postId}`)
    return response.data
})

export const addNewPost = createAsyncThunk("/posts/addNewPost", async (newPost) => {
    const response = await axios.post(`${POSTS_URL}`, newPost)
    return response.data
})

export const deletePost = createAsyncThunk("posts/deletePost", async (postId) => {
    await axios.delete(`${POSTS_URL}/${postId}`)
    return postId
})

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(addNewPost.fulfilled, (state, action) => {
                state.posts.push(action.payload)
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.posts = action.payload
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.posts = state.posts.filter(post => post.id !== action.payload)
            })
    }
})

export default postSlice.reducer