import axios from "axios"
import { useEffect, useState } from "react"

function Admin() {
  let [appointments, setAppointments] = useState([])

  useEffect(() => {
    axios 
      .get("http://localhost:3000/appointments")
      .then((res) => setAppointments(res.data));
  }, [])

  function deleteData(id) {
    axios
      .delete(`http://localhost:3000/appointments/${id}`)
      .then(() =>
        axios
          .get("http://localhost:3000/appointments")
          .then((res) => setAppointments(res.data))
      )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 p-8">
      <div className="max-w-7xl mx-auto">


        <div className="bg-white rounded-3xl shadow-xl border border-green-100 p-8 mb-8">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-4xl">🏥</span>
            </div>

            <h1 className="text-4xl font-bold text-green-800">
              Admin Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              Manage Doctor Appointments Efficiently
            </p>
          </div>
        </div>


        <div className="mb-8">
          <div className="bg-gradient-to-r from-green-500 to-green-400 text-white rounded-3xl shadow-lg p-6">
            <h2 className="text-lg font-medium">
              Total Appointments
            </h2>

            <h1 className="text-4xl font-bold mt-2">
              {appointments.length}
            </h1>
          </div>
        </div>


        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-green-100">


          <div className="bg-gradient-to-r from-green-500 to-green-400 p-5">
            <h2 className="text-white text-2xl font-semibold">
              Appointment Records
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">

              <thead>
                <tr className="bg-green-50">
                  <th className="px-6 py-4 text-green-800 font-semibold border-b">
                    Patient Name
                  </th>

                  <th className="px-6 py-4 text-green-800 font-semibold border-b">
                    Doctor
                  </th>

                  <th className="px-6 py-4 text-green-800 font-semibold border-b">
                    Appointment Date
                  </th>

                  <th className="px-6 py-4 text-green-800 font-semibold border-b">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {appointments.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-green-50 transition-all duration-300"
                  >
                    <td className="px-6 py-4 border-b text-gray-700 font-medium">
                      {item.name}
                    </td>

                    <td className="px-6 py-4 border-b text-gray-600">
                      {item.doctor}
                    </td>

                    <td className="px-6 py-4 border-b text-gray-600">
                      {item.date}
                    </td>

                    <td className="px-6 py-4 border-b">
                      <button
                        onClick={() => deleteData(item.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl font-medium shadow-md transition duration-300"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {appointments.length === 0 && (
              <div className="py-16">
                <div className="flex flex-col items-center">
                  <div className="text-6xl mb-3">📅</div>

                  <h3 className="text-2xl font-semibold text-gray-500">
                    No Appointments Found
                  </h3>

                  <p className="text-gray-400 mt-2">
                    Appointments will appear here once booked.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Admin