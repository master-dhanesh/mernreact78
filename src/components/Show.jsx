import { Link, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { deleteuser } from "../store/reducers/UserReducer";

const Show = () => {
    const { users } = useSelector((state) => state.UserReducer);
    const dispatch = useDispatch();

    const DeleteHandler = (index) => {
        dispatch(deleteuser(index));
        toast.warn("User deleted successfully!");
    };

    const mycss = {
        fontSize: "22px",
        fontWeight: 500,
    };

    return (
        <>
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
                                      <Link
                                          className="hover:text-blue-400"
                                          to={`/show/details/${user.username}`}
                                          style={mycss}
                                      >
                                          {user.username}
                                      </Link>

                                      <p>
                                          <Link
                                              to={`/show/edit/${user.username}`}
                                              className="mr-6"
                                          >
                                              ✏️
                                          </Link>

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
            <hr className="w-[80%] m-auto my-5 " />
            <div className="w-[80%]">
                <Outlet />
            </div>
        </>
    );
};

export default Show;
