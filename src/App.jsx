import { useState } from "react";
import Create from "./components/Create";
import Show from "./components/Show";

const App = () => {
    const [users, setusers] = useState(
        JSON.parse(localStorage.getItem("users")) || []
    );

    return (
        <div>
            <Create users={users} setusers={setusers} />
            <Show users={users} setusers={setusers} />
        </div>
    );
};

export default App;
