import axios from "axios";
import { getproducts } from "../reducers/ProductReducer";

export const asyncgetproducts = () => async (dispatch, getState) => {
    console.log(getState());
    try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        console.log(data);
        dispatch(getproducts(data));
    } catch (error) {
        console.log(error);
    }
};
