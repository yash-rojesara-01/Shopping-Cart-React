import { combineReducers, createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

const filterSlice = createSlice({
  name: "filterData",
  initialState,
  reducers:{
    filterVal(state, action) {
      return action.payload;
    }
  },
});

const reducer = combineReducers({
  cart: cartSlice.reducer,
  filterVal: filterSlice.reducer,
})


export const { add, remove } = cartSlice.actions;
export const { filterVal } = filterSlice.actions;
export default reducer;
