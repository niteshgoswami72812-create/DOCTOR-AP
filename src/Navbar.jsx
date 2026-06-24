import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-white shadow-md border-b border-green-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">


        <div>
          <h1 className="text-2xl font-bold text-green-700">🏥 Doctor Appointment</h1>
        </div>

 
        <div className="flex gap-4">
          <Link to="/login" className="px-5 py-2 rounded-xl border border-green-500 text-green-700 font-medium hover:bg-green-50 transition">  Login </Link>
          <Link to="/signup" className="px-5 py-2 rounded-xl bg-gradient-to-r from-green-500 to-green-400 text-white font-medium shadow-md hover:scale-105 transition" > Signup</Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar