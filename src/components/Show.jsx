import React from "react";
import { toast } from "react-toastify";
import "../App.css";

const Show = (props) => {
    const { users, setusers } = props;
    const DeleteHandler = (index) => {
        const copyusers = [...users];
        copyusers.splice(index, 1);
        setusers(copyusers);
        localStorage.setItem("users", JSON.stringify(copyusers));
        toast.warn("User deleted successfully!");
    };

    const mycss = {
        fontSize: "22px",
        fontWeight: 500,
    };

    return (
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
                                  <span style={mycss}>{user.username}</span>

                                  <p>
                                      <span className="mr-6">✏️</span>
                                      <span
                                          onClick={() => DeleteHandler(index)}
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
    );
};

export default Show;
