import { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    if (!form.name || !form.email || !form.password || !form.confirmpassword) {
      return alert("isi data terlebih dahulu");
    }
    if (form.password !== form.confirmpassword) {
      return alert("password dan confirmasi password berbeda");
    }
  };
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="p-5 w-100">
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              id=""
              className="p-2 outline-none  rounded-md border"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="text"
              id=""
              className="p-2 outline-none  rounded-md border"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">password</label>
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              id=""
              className="p-2 outline-none rounded-md border"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Confirmasi Password</label>
            <input
              name="confirmpassword"
              value={form.confirmpassword}
              onChange={handleChange}
              type="text"
              id=""
              className="p-2 outline-none rounded-md border"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 cursor-pointer text-white hover:bg-blue-800 transition-all duration-500 p-2 rounded"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
