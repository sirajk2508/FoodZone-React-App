import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";


const store = configureStore({
    reducer: {
        cart: cartSlice,
    }
});
// console.log(store);
export default store;