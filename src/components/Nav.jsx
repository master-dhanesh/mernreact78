import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="pt-10 text-2xl flex justify-center gap-10">
            <NavLink
                style={(e) => {
                    return {
                        color: e.isActive ? "tomato" : "",
                        fontWeight: e.isActive ? "bold" : "",
                    };
                }}
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                className={(e) => {
                    return [
                        e.isActive ? "text-red-300" : "",
                        e.isActive ? "font-bold" : "",
                    ].join(" ");
                }}
                to="/create"
            >
                Create
            </NavLink>
            <NavLink to="/show">Users</NavLink>
            <NavLink to="/product">Products</NavLink>
        </nav>
    );
};

export default Nav;
