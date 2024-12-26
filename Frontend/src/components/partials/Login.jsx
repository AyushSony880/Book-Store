import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { user, setuser } = useAuthContext();
  const userLogin = async (data) => {
    console.log(data);
    await axios
      .post("http://localhost:880/user/login", data)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          setuser(res.data.user);
          toast.success("Login successfully");

          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className="flex justify-center items-center w-full h-screen ">
      <div className="modal-box bg-white">
        <form
          onSubmit={handleSubmit(userLogin)}
          method="dialog"
          className=" space-y-7"
        >
          {/* if there is a button in form, it will close the modal */}
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>

          <h3 className="font-bold text-lg">Login</h3>
          {/* <div className="space-y-5 mt-7"> */}

          <div className="">
            <h2>
              Email
              {errors.email && (
                <span className=" px-3 inline-block text-xs text-red-500">
                  (required...)
                </span>
              )}
            </h2>
            <label className=" bg-white input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                className="grow"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </label>
          </div>
          <div>
            <h2>
              Password
              {errors.password && (
                <span className=" px-3 inline-block text-xs text-red-500">
                  (Password must be at least 8 characters long)
                </span>
              )}
            </h2>
            <label className=" bg-white input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                placeholder="............."
                className="grow "
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                })}
              />
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-pink-500 rounded-full px-4 py-1 text-white">
              Login
            </button>
            <p className="text-xs sm:text-base">
              New to BookStore ?
              <Link
                to="/signup"
                className=" text-sm sm:text-base text-[#795dbb] underline ml-1"
              >
                SignUp
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
