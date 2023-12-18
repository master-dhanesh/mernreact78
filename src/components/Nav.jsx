import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="pt-10 text-2xl flex justify-center gap-10">
            <Link to="/">Home</Link>
            <Link to="/create">Create</Link>
            <Link to="/show">Show</Link>
        </nav>
    );
};

export default Nav;
