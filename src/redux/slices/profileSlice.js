import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    user: null,
    loading: false,
    error: null
}


export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setImageUpdate: (state, action) => {
            state.user.imageUrl = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }
})

export const { setUser, setLoading, setError , setImageUpdate } = profileSlice.actions;
export default profileSlice.reducer;