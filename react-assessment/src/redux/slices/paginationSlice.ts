import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export interface PaginationState {
  page: number;
}

const initialState:PaginationState = {
    page: 1
}

const paginationSlice = createSlice({
    name:'pagination',
    initialState,
    reducers:{
        next:(state)=>{
            if(state.page<3) {
                state.page +=1
            }
        },
        back:(state)=>{
            if(state.page>1) {
                state.page -=1
            }
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
    }
})

export const { next, back,setPage } = paginationSlice.actions;
export default paginationSlice.reducer;
