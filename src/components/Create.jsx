import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createuser } from "../store/reducers/UserReducer";
import { useDispatch } from "react-redux";

const Create = () => {
    const navigate = useNavigate();
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const dispatch = useDispatch();
    const SubmitHandler = (e) => {
        e.preventDefault();

        const user = { username, password };

        if (username.trim().length <= 4 && password.trim().length <= 4) {
            toast.error("inputs must be atleast 4 characters long");
            return;
        }

        dispatch(createuser(user));
        navigate("/show");
    };

    return (
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
    );
};

export default Create;
