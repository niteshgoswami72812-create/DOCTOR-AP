import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Userfrm() {
  let nav = useNavigate();

  let [data, setData] = useState({
    name: "",
    doctor: "",
    date: "",
  })
 
  function handleChange(e) {
    let name = e.target.name
    let value = e.target.value

    let obj = { ...data }
    obj[name] = value

    setData(obj)
  }

  function confirmBooking() {
    axios
      .post("http://localhost:3000/appointments", data)
      .then(() => {
        alert("Appointment Booked Successfully")

        setData({
          name: "",
          doctor: "",
          date: "",
        })

        nav("/admin");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      })
  }

  function cancelBooking() {
    setData({
      name: "",
      doctor: "",
      date: "",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-green-100 overflow-hidden">

        
        <div className="bg-gradient-to-r from-green-500 to-green-400 p-8 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg mb-4">
            <span className="text-4xl">📅</span>
</div>

          <h1 className="text-3xl font-bold text-white"> Appointment Form </h1>

          <p className="text-green-50 mt-2"> Book your doctor appointment easily</p>
        </div>

        <div className="p-8">

          <div className="mb-5">
            <label className="block text-green-800 font-semibold mb-2"> Patient Name </label>

            <input  type="text"  name="name" placeholder="Enter Patient Name" value={data.name} onChange={handleChange} className="w-full border border-green-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-green-400" />
          </div>

          <div className="mb-5">
            <label className="block text-green-800 font-semibold mb-2"> Doctor Name </label>

            <input type="text" name="doctor" placeholder="Enter Doctor Name" value={data.doctor} onChange={handleChange} className="w-full border border-green-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-green-400" />
          </div>

          <div className="mb-8">
            <label className="block text-green-800 font-semibold mb-2"> Appointment Date </label>

            <input type="date" name="date" value={data.date} onChange={handleChange} className="w-full border border-green-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-green-400" />
          </div>


          <div className="flex gap-4">

            <button onClick={confirmBooking} className="flex-1 bg-gradient-to-r from-green-500 to-green-400 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition duration-300"> Confirm Booking</button>

            <button onClick={cancelBooking} className="flex-1 bg-red-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-red-600 transition duration-300" >  Cancel</button>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Userfrm