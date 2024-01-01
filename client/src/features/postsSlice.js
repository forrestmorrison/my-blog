import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialStateValue = []

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        value: initialStateValue
    },
    reducers: {
        addNewPost: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { addNewPost } = postsSlice.actions

export default postsSlice.reducer