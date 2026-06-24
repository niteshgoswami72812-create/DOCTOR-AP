import { useNavigate } from "react-router-dom"

function Landing() {
  let nav = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center px-6">

      <div className="max-w-6xl w-full">

 
        <div className="text-center mb-16">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto shadow-lg mb-6">
            <span className="text-5xl">🏥</span>
          </div>

          <h1 className="text-5xl font-bold text-green-800 mb-4">
            Doctor Appointment System
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Book appointments with doctors easily and manage patient
            records efficiently through a modern healthcare platform.
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-10">


          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-green-100 hover:-translate-y-2 transition-all duration-300">

            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <span className="text-4xl">👨‍⚕️</span>
            </div>

            <h2 className="text-3xl font-bold text-center text-green-800 mb-4"> User Panel  </h2>

            <p className="text-gray-500 text-center mb-8">
              Book doctor appointments, view booking details and manage
              your healthcare schedule.
            </p>

            <button onClick={() => nav("/user")} className="w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-400 text-white font-semibold text-lg shadow-lg hover:scale-105 transition duration-300">Open User Panel </button>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-green-100 hover:-translate-y-2 transition-all duration-300">

            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5"> <span className="text-4xl">🛡️</span> </div>

            <h2 className="text-3xl font-bold text-center text-green-800 mb-4"> Admin Panel </h2>
            <p className="text-gray-500 text-center mb-8"> Monitor all appointments, manage patient records and control the healthcare system dashboard. </p>
            <button onClick={() => nav("/admin")} className="w-full py-3 rounded-xl bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold text-lg shadow-lg hover:scale-105 transition duration-300">Open Admin Panel</button>
          </div>

        </div>
        <div className="text-center mt-12 text-gray-500">
        </div>

      </div>
    </div>
  )
}

export default Landing