import { useState } from "react";
import api from "../Api/axios";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigasi = useNavigate();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", { email, password });
      login(res.data.access_token);
      navigate("/");
    } catch (err) {
      alert("Login gagal");
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="p-5 bg-[#cdcdcd] rounded-md w-100">
        <form onSubmit={handleSubmit} action="" className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="">Email</label>
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="text"
              name=""
              id=""
              className="p-2 outline-none  rounded-md border"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              name=""
              id=""
              className="p-2 outline-none rounded-md border"
            />
          </div>
          <div className="flex gap-2 mb-5">
            <h1>Belum punya akun?</h1>
            <button
              type="button"
              onClick={() => navigasi("/register")}
              className="text-blue-500 cursor-pointer"
            >
              Register
            </button>
          </div>
          <button
            type="submit"
            className="bg-blue-600 cursor-pointer text-white hover:bg-blue-800 transition-all duration-500 p-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
