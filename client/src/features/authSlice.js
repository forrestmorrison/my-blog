import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = { user: undefined }

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearAuthState: () => {
            return initialState
        }
    }
})

export default authSlice.reducer