import { createContext, useState } from "react";

export const UserContext = createContext();
export const ProductContext = createContext();

const Context = (props) => {
    const [users, setusers] = useState(
        JSON.parse(localStorage.getItem("users")) || []
    );

    return (
        <ProductContext.Provider value={"this is product Context"}>
            <UserContext.Provider value={[users, setusers]}>
                {props.children}
            </UserContext.Provider>
        </ProductContext.Provider>
    );
};

export default Context;
