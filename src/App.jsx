import { useState } from "react";
import Create from "./components/Create";
import Show from "./components/Show";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Details from "./components/Details.jsx";

const App = () => {
    const [users, setusers] = useState(
        JSON.parse(localStorage.getItem("users")) || []
    );
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/create"
                    element={<Create users={users} setusers={setusers} />}
                />
                <Route
                    path="/show"
                    element={<Show users={users} setusers={setusers} />}
                >
                    <Route path="/show/details/:title" element={<Details />} />
                </Route>
                {/* <Route path="/show/details/:title" element={<Details />} /> */}
            </Routes>
        </>
    );
};

export default App;
