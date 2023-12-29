import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: null,
};

export const ProductReducer = createSlice({
    name: "products",
    initialState,
    reducers: {
        getproducts: (state, action) => {
            // console.log(action);
            state.products = action.payload;
        },
    },
});

export const { getproducts } = ProductReducer.actions;
export default ProductReducer.reducer;
