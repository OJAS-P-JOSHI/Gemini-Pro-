import { useState } from "react";
import { UserData } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "../components/Loading";

const Login = () => {
  const [email, setEmail] = useState("");

  const { loginUser, btnLoading } = UserData();

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    loginUser(email, navigate);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full md:w-[400px]"
        onSubmit={submitHandler}
      >
        <h2 className="text-4xl text-center mb-6">
          <span className="neon-text">Gemini Pro+</span>
        </h2>
        <div className="mb-5">
          <label className="block text-amber-400 mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-700 p-3 w-full rounded-lg outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
            required
          />
        </div>

        <button
          className="bg-blue-600 text-white font-medium py-3 px-4 rounded-lg w-full hover:bg-blue-700 transition-colors duration-300"
          disabled={btnLoading}
        >
          {btnLoading ? <LoadingSpinner /> : "Submit"}
        </button>
      </form>

      <style>
        {`
          .neon-text {
            color:#000000;
            text-shadow: 
              0 0 5px #39ff14, 
              0 0 10px #39ff14, 
              0 0 15px #39ff14, 
              0 0 20px #39ff14, 
              0 0 25px #39ff14, 
              0 0 30px #39ff14, 
              0 0 35px #39ff14;
          }
        `}
      </style>
    </div>
  );
};

export default Login;
