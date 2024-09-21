import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/productSlice";
import registerSlice from "../slices/registerSlice";
import categorySlice from "../slices/categorySlice";

const store = configureStore({
    reducer: {
        product: productSlice,
        category:categorySlice,
        register:registerSlice

    }
});

export default store;