import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup() {
  let nav = useNavigate()

  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  })
 
  function handleChange(e) {
    let obj = { ...user }
    obj[e.target.name] = e.target.value
     setUser(obj)
  }

  function handleSubmit() {
    localStorage.setItem(
      "user",
      JSON.stringify(user)
    )

    alert("Signup Successful")

    nav("/login")
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-green-50">

      <div className="bg-white p-8 rounded-3xl shadow-xl w-[400px]">

        <h1 className="text-3xl font-bold text-center text-green-700 mb-6"> Signup</h1>

        <input type="text" name="name" placeholder="Name" onChange={handleChange} className="w-full p-3 border rounded-xl mb-4"/>

        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-3 border rounded-xl mb-4"/>

        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-3 border rounded-xl mb-6"/>

        <button onClick={handleSubmit} className="w-full bg-green-500 text-white py-3 rounded-xl">  Signup</button>

      </div>

    </div>
  )
}

export default Signup