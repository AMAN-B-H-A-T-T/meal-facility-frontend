import React, { useState, useTransition } from "react";
import BookingsForm from "./BookingsForm";

function Bookings() {
  const [selectedCategory, setSelectedCategory] = useState("employees");
  const [sidebar,setSidebar] = useState(false)
  return (
    <section className="h-screen w-full flex flex-col">
    <BookingsForm sidebar={sidebar} setSidebar={setSidebar}/>
      <div className="sm:mx-14 flex mt-20 items-center justify-center bg-slate-200 rounded-xl ">
        <div
          className={`w-1/2 text-center cursor-pointer rounded-xl  p-3 font-semibold border ${
            selectedCategory == "employees" ? " bg-black text-white" : ""
          }`}
          onClick={() => setSelectedCategory("employees")}
        >
          Employees
        </div>
        <div
          className={`w-1/2 text-center cursor-pointer p-3 rounded-xl font-semibold border ${
            selectedCategory == "non-employees" ? " bg-black text-white" : ""
          }`}
          onClick={() => setSelectedCategory("non-employees")}
        >
          Others
        </div>
      </div>
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10 mx-2">
          <div className="my-3 flex flex-col sm:flex-row justify-between items-center mx-2 space-y-4 sm:space-y-0">
          
            <div className="sm:w-1/2 w-full">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-slate-200 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Search..."
                  required=""
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-black hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
                >
                  Search
                </button>
              </div>
            </div>
            <div className="sm:w-1/3 w-full flex justify-center items-center space-x-3">
              <input
                type="month"
                id="start"
                name="start"
                min="2018-03"
                value="2018-05"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-slate-200 focus:ring-blue-500 focus:border-blue-500 "
              />
              <div>
                <button className="text-white bg-black hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-floppy "
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 2H9v3h2z" />
                    <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="w-full sm:w-auto">
          <button
                  type="submit"
                  className="text-white w-full bg-black hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3 hover:border "
                  onClick={() => {setSidebar(true)}}
                >
                    Add a booking
                </button>
          </div>
          </div>
          <div className="overflow-x-scroll">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-black uppercase bg-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Employee Code
                </th>
                <th scope="col" className="px-6 py-3">
                Employee Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Department
                </th>
                <th scope="col" className="px-6 py-3">
                  Meal Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Meals Booked
                </th>
                <th scope="col" className="px-6 py-3">
                  Meal Dates
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="overflow-y-scroll">
              <tr className="odd:bg-white even:bg-gray-50 border-b text-black">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  EMP_100
                </th>
                <td className="px-6 py-4">Shravant Parmar</td>
                <td className="px-6 py-4">Network Administration</td>
                <td className="px-6 py-4">Dinner</td>
                <td className="px-6 py-4">7</td>
                <td className="px-6 py-4">24/05/2024</td>
                <td className="px-6 py-4">-</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50 border-b text-black">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  EMP_101
                </th>
                <td className="px-6 py-4">Manav Shah</td>
                <td className="px-6 py-4">IT and Security</td>
                <td className="px-6 py-4">Lunch</td>
                <td className="px-6 py-4">3</td>
                <td className="px-6 py-4">24/05/2024 - 27/05/2024</td>
                <td className="px-6 py-4">-</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bookings;
