import { useState } from "react";
import Create from "./components/Create";
import Show from "./components/Show";
import css from "./App.module.css";

const App = () => {
    const [users, setusers] = useState(
        JSON.parse(localStorage.getItem("users")) || []
    );
    return (
        <div>
            <h1 className={css.head}>Example of module css</h1>
            <Create users={users} setusers={setusers} />
            <Show users={users} setusers={setusers} />
        </div>
    );
};

export default App;
