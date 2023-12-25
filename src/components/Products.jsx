import React, { useEffect, useState } from "react";
import axios from "axios";
const Products = () => {
    const [products, setproducts] = useState(null);

    const getproducts = async () => {
        try {
            const { data } = await axios.get(
                "https://fakestoreapi.com/products"
            );
            setproducts(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log("Products Fetched!");
        if (!products) getproducts();

        return () => {
            alert("Do you want to leave this page ?");
            setproducts(null);
        };
    }, []);

    return (
        <div className="w-[80%] m-auto mt-5">
            <h1>Products</h1>
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
