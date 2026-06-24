import { useNavigate } from "react-router-dom"

function User() {
  let nav = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center px-6">
      
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-green-100 p-10 text-center">

        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
          <span className="text-5xl">👨‍⚕️</span>
        </div> 

        <h1 className="text-4xl font-bold text-green-800 mb-4">
          User Dashboard
        </h1>

        <p className="text-gray-500 text-lg mb-10">
          Welcome to the Doctor Appointment System. Book your appointment
          quickly and manage your healthcare schedule easily.
        </p>

        <button onClick={() => nav("/form")} className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-400 text-white font-semibold text-lg rounded-xl shadow-lg hover:scale-105 transition-all duration-300" >📅 Book Appointment</button>

      </div>
    </div>
  )
}

export default User