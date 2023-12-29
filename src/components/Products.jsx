import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { asyncgetproducts } from "../store/actions/ProductActions";
const Products = () => {
    const { products } = useSelector((state) => state.ProductReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(asyncgetproducts());
    }, []);

    return (
        <div className="w-[80%] m-auto mt-5">
            <h1 className="text-3xl">Products</h1>
            <ul className="mt-5">
                {products ? (
                    products.map((p) => (
                        <li className="mb-3 p-3 bg-red-100" key={p.id}>
                            {p.title}
                        </li>
                    ))
                ) : (
                    <h1 className="text-3xl">Loading...</h1>
                )}
            </ul>
        </div>
    );
};

export default Products;
