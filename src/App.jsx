import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./Navbar"
import Signup from "./Signup"
import Login from "./Login"
import Landing from "./Landing"
import User from "./User"
import Userfrm from "./Userfrm"
import Admin from "./Admin"
import Booking from "./Booking"
import Hero from "./Hero"

 
function App() {
  return (
   <>



      <Navbar />
      <Hero/>

      <Routes>


        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Landing />} />

        <Route path="/user" element={<User />} />

        <Route path="/form" element={<Userfrm />} />

        <Route path="/admin" element={<Admin />} />

        <Route path="/booking" element={<Booking />} />
      </Routes>
</>
   
  )
}

export default App