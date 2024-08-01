import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterOptions } from "../../utils/constant";

export interface FiltersState {
    categories: FilterOptions[];
    authors: FilterOptions[];
    sortBy: FilterOptions[];
    noOfFilteredEle:number|null
}

const initialState: FiltersState = {
    categories: [],
    authors: [],
    sortBy: [],
    noOfFilteredEle:null
};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        toggleCategoryFilter(state, action: PayloadAction<FilterOptions>) {
            const index = state.categories.indexOf(action.payload);
            if (index >= 0) {
                state.categories.splice(index, 1);
            } else {
                state.categories.push(action.payload);
            }
        },
        toggleAuthorFilter(state, action: PayloadAction<FilterOptions>) {
            const index = state.authors.indexOf(action.payload);
            if (index >= 0) {
                state.authors.splice(index, 1);
            } else {
                state.authors.push(action.payload);
            }
        },
        toggleSortBy(state, action: PayloadAction<FilterOptions>) {
            const index = state.sortBy.indexOf(action.payload);
            if (index >= 0) {
                state.sortBy.splice(index, 1);
            } else {
                state.sortBy.push(action.payload);
            }
        },
          removeFilter(state, action: PayloadAction<FilterOptions>) {
            state.categories = state.categories.filter(item => item.id !== action.payload.id);
            state.authors = state.authors.filter(item => item.id !== action.payload.id);
            state.sortBy = state.sortBy.filter(item => item.id !== action.payload.id);
        },
        resetFilters(state) {
            state.categories = [];
            state.authors = [];
            state.sortBy = [];
        },
        getFilterEleCount:(state,action:PayloadAction<number>)=>{
            state.noOfFilteredEle = action.payload
        }
    }
});

export const { toggleCategoryFilter, toggleAuthorFilter, toggleSortBy,resetFilters,removeFilter,getFilterEleCount } = filterSlice.actions;

export default filterSlice.reducer;
