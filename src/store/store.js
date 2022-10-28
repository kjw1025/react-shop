import { configureStore } from "@reduxjs/toolkit";

import cartList from "./state/cartList";
import cartUser from "./state/cartUser";

export default configureStore({
  reducer: {
    cartList: cartList.reducer,
    cartUser: cartUser.reducer,
  },
});
