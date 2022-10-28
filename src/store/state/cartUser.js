import { createSlice } from "@reduxjs/toolkit";

let cartUser = createSlice({
  name: "cartUser",
  initialState: { name: "kim", age: 20 },
});

export default cartUser;
