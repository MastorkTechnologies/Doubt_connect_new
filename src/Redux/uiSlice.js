import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currPage: "home",
    hide : false,
}


const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    changePage(state,{payload}){
        state.currPage = payload
    },

    hideEverything(state,{payload}){
        state.hide = payload
    }

  },
});

export const {hideEverything, changePage} = uiSlice.actions
export default uiSlice.reducer;