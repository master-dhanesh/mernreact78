import React, { useState } from "react";
import { toast } from "react-toastify";

const App = () => {
    const [users, setusers] = useState(
        JSON.parse(localStorage.getItem("users")) || []
    );
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();
        const user = { username, password };

        if (username.trim().length <= 4 && password.trim().length <= 4) {
            toast.error("inputs must be atleast 4 characters long");
            return;
        }

        const copyusers = [...users];
        copyusers.push(user);
        setusers(copyusers);

        // setusers([...users, user])

        localStorage.setItem("users", JSON.stringify(copyusers));
        toast.success("User successfullt created!");

        setusername("");
        setpassword("");
    };

    const DeleteHandler = (index) => {
        const copyusers = [...users];
        copyusers.splice(index, 1);
        setusers(copyusers);
        localStorage.setItem("users", JSON.stringify(copyusers));
        toast.warn("User deleted successfully!");
    };

    return (
        <div>
            <form
                onSubmit={SubmitHandler}
                className="flex justify-start flex-col mt-5 w-1/2 m-auto container"
            >
                <h2 className="text-3xl mb-4 text-orange-400">Register Form</h2>
                <input
                    onChange={(e) => setusername(e.target.value)}
                    value={username}
                    className="border-2 border-black p-2 mb-4 w-1/2"
                    type="text"
                    placeholder="Username"
                />
                <input
                    onChange={(e) => setpassword(e.target.value)}
                    value={password}
                    className="border-2 border-black p-2 mb-4 w-1/2"
                    type="password"
                    placeholder="Password"
                />
                <button className="mb-4 w-1/4 p-2 text-1xl  text-white bg-zinc-500">
                    Submit
                </button>
                <hr />
            </form>
            <ol className="flex justify-start flex-col mt-5 w-1/2 m-auto container">
                <h1 className="text-2xl mb-4">Registered Users</h1>

                {users.length > 0
                    ? users
                          .map((user, index) => {
                              return (
                                  <li
                                      key={index}
                                      className="flex justify-between mb-4 text-1xl p-4 bg-indigo-100"
                                  >
                                      {user.username}

                                      <p>
                                          <span className="mr-6">✏️</span>
                                          <span
                                              onClick={() =>
                                                  DeleteHandler(index)
                                              }
                                          >
                                              ❌
                                          </span>
                                      </p>
                                  </li>
                              );
                          })
                          .reverse()
                    : "Loading..."}
            </ol>
            <hr className="mt-4" />
        </div>
    );
};

export default App;
