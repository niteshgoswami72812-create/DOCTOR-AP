import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  let nav = useNavigate();

  let [login, setLogin] = useState({
    email: "",
    password: "", 
  })

  function handleChange(e) {
    let obj = { ...login };
    obj[e.target.name] = e.target.value
    setLogin(obj)
  }

  function handleLogin() {
    let data = JSON.parse(
      localStorage.getItem("user")
    )

    if (
      data &&
      data.email === login.email &&
      data.password === login.password
    ) {
      alert("Login Successful");

      nav("/");
    } else {
      alert("Invalid Email or Password")
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-green-50">

      <div className="bg-white p-8 rounded-3xl shadow-xl w-[400px]">

        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-3 border rounded-xl mb-4"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-3 border rounded-xl mb-6"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-500 text-white py-3 rounded-xl"
        >
          Login
        </button>

      </div>

    </div>
  )
}

export default Login