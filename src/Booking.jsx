import { useEffect, useState } from "react"

function Booking() {
  let [book, setBook] = useState(null)

  useEffect(() => {
    let data = JSON.parse(
      localStorage.getItem("appointment")
    ) 

    setBook(data)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center p-6">
      
      <div className="w-full max-w-xl">
        
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-green-100">
          
         
          <div className="bg-gradient-to-r from-green-500 to-green-400 p-8 text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-4xl">📅</span>
            </div>

            <h1 className="text-3xl font-bold text-white">
              Appointment Details
            </h1>

            <p className="text-green-50 mt-2">
              Your latest booked appointment
            </p>
          </div>

          {book ? (
            <div className="p-8">
              
              <div className="space-y-5">
                
                <div className="bg-green-50 p-5 rounded-2xl border border-green-100">
                  <p className="text-sm text-gray-500 mb-1">
                    Patient Name
                  </p>

                  <h2 className="text-xl font-semibold text-green-800">
                    {book.name}
                  </h2>
                </div>

                <div className="bg-green-50 p-5 rounded-2xl border border-green-100">
                  <p className="text-sm text-gray-500 mb-1">
                    Doctor Name
                  </p>

                  <h2 className="text-xl font-semibold text-green-800">
                    {book.doctor}
                  </h2>
                </div>

                <div className="bg-green-50 p-5 rounded-2xl border border-green-100">
                  <p className="text-sm text-gray-500 mb-1">
                    Appointment Date
                  </p>

                  <h2 className="text-xl font-semibold text-green-800">
                    {book.date}
                  </h2>
                </div>

              </div>
            </div>
          ) : (
            <div className="p-12 text-center">
              <div className="text-6xl mb-4">📄</div>

              <h2 className="text-2xl font-semibold text-gray-500">
                No Appointment Found
              </h2>

              <p className="text-gray-400 mt-2">
                Your appointment details will appear here.
              </p>
            </div>
          )}

        </div>
      </div>

    </div>
  )
}

export default Booking