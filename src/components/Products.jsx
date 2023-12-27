import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ProductContext } from "../utils/Context";
const Products = () => {
    const [products, setproducts] = useContext(ProductContext);

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
