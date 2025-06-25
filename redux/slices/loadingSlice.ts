import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loadingScreenOpen:true
}

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    closedLoadingScreen: (state) => {
        state.loadingScreenOpen = false
    }
  }
});

export const {closedLoadingScreen} = loadingSlice.actions

export default loadingSlice.reducer