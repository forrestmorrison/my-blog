import { createSlice } from "@reduxjs/toolkit"

export const postSlice = createSlice({
    name: "post",
    initialState: {
        value: { title: "", body: "" }
    },
    reducers: {
        submitPost: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { submitPost } = postSlice.actions

export default postSlice.reducer