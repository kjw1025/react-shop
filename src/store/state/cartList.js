import { createSlice } from "@reduxjs/toolkit";

let cartList = createSlice({
  name: "cartList",
  initialState: [
    { id: 0, title: "White and Black", count: 2 },
    { id: 2, title: "Grey Yordan", count: 1 },
  ],
  reducers: {
    countUp(state, action) {
      let x = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[x].count++;
    },
    upDateList(state, action) {
      let temp = action.payload;
      let x = state.findIndex((a) => {
        return a.id === temp.id;
      });
      if (x === -1) {
        state.push(temp);
        temp.count = 1;
      } else if (state[x].id === temp.id) {
        state[x].count++;
      }
    },
    deleteList(state, action) {
      let x = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state.splice(x, 1);
    },
  },
});

export let { countUp, upDateList, deleteList } = cartList.actions;

export default cartList;
