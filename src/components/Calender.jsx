import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import axios from "axios";
import { base_url } from "../statics/exports";
import "react-calendar/dist/Calendar.css";

function Calender() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [countings, setCountings] = useState({});
  const [updateCounts,setUpdateCounts] = useState(0)
  useEffect(() => {
    let config = {
      params: {
        date: selectedDate.toDateString(),
      },
      headers: {
        "ngrok-skip-browser-warning": true,
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    };
    axios
      .get(`${base_url}/api/manage/get_booking_count`, config)
      .then((res) => {
        console.log(res.data.data);
        setCountings(res.data.data);
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  }, [selectedDate,updateCounts]);

  const disable_delete = async (date) => {
    let reason = prompt("Enter your reason to disable this date");
    if (!reason) {
      alert("You have to enter a reason");
      return;
    }
    axios
      .post(
        `${base_url}/api/manage/disable_date`,
        {
          date: date.toDateString(),
          reason: reason,
        },
        {headers:{
          "ngrok-skip-browser-warning": true,
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        }}
      )
      .then((res) => {        
        alert("The date has been disbaled!!");
        setUpdateCounts(updateCounts + 1)
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data.error);
      });
  };

  return (
    <section className="h-screen flex flex-col sm:flex-row">
      <div className=" w-full sm:w-3/4 mt-20">
        <Calendar
          className="sm:mx-2 bg-slate-100 bg-clip-padding backdrop-filter backdrop-blur-sm text-black p-10 rounded-xl w-full"
          onChange={setSelectedDate}
          value={selectedDate}
        />
        <div>
          <div className="sm:mt-10">
            <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-around items-center p-4 space-y-3 sm:space-y-0">
              <div className="bg-slate-200 w-full max-w-md flex flex-col rounded-xl shadow-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full w-4 h-4 border border-purple-500" />
                    <div className="text-md font-bold">Employees</div>
                  </div>
                  <div className="flex items-center space-x-4"></div>
                </div>
                <div className="mt-4 text-gray-500 font-bold text-sm">
                  Lunch Bookings - {countings.employee_lunch_count}
                </div>
                <div className="mt-4 text-gray-500 font-bold text-sm">
                  Dinner Bookings - {countings.employee_dinner_count}
                </div>
              </div>
              <div className="bg-slate-200 w-full max-w-md flex flex-col rounded-xl shadow-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full w-4 h-4 border border-red-500" />
                    <div className="text-md font-bold">Non-Employees</div>
                  </div>
                  <div className="flex items-center space-x-4"></div>
                </div>
                <div className="mt-4 text-gray-500 font-bold text-sm">
                  Lunch Bookings - {countings.non_employee_lunch_count}
                </div>
                <div className="mt-4 text-gray-500 font-bold text-sm">
                  Dinner Bookings - {countings.non_employee_dinner_count}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/4 sm:mx-5 sm:my-auto">
        <div className="w-full bg-slate-200 border border-gray-200 sm:rounded-lg shadow p-3 sm:p-6">
          <div className="flex mb-3  justify-between items-center">
            <h5 className="font-semibold text-gray-900 text-4xl md:text-2xl">
              {selectedDate.getDate() +
                "th " +
                selectedDate.toLocaleString("default", { month: "long" }) +
                " " +
                selectedDate.getFullYear()}
            </h5>
            <button
              className="text-white bg-red-700 hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              onClick={() => {
                disable_delete(selectedDate);
              }}
            >
              Disable Date
            </button>
          </div>
          <ul className="my-10 space-y-3">
            <li>
              <div
                href="#"
                className="flex items-center p-6 text-base font-bold text-white rounded-lg bg-black group hover:shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-calendar-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">Bookings</span>
                <span className="inline-flex text-md items-center justify-center px-2 py-0.5 ms-3 font-medium cursor-pointer">
                  {countings.booking_count}
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-plus-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                    />
                  </svg> */}
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-center p-3 mt-10 text-base font-bold text-gray-900 rounded-lg bg-violet-800 group hover:shadow  dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-people-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Employees</span>
                <span className="inline-flex text-md items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-white cursor-pointer">
                  {countings.employee}
                </span>
              </div>
            </li>
            <li>
              <div
                href="#"
                className="flex items-center p-3 text-base font-bold rounded-lg bg-amber-600 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  // fill="currentColor"
                  className="bi bi-people-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Non-Employees
                </span>
                <span className="inline-flex  text-md cursor-pointer items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-white">
                  {countings["non-emp"]}
                </span>
              </div>
            </li>
            {/* <li>
              <div className="flex items-center p-3 text-base font-bold rounded-lg bg-green-500 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-stack"
                  viewBox="0 0 16 16"
                >
                  <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z" />
                  <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Buffer (300)
                </span>
                <span className="inline-flex cursor-pointer items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-plus-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                    />
                  </svg>
                </span>
              </div>
            </li> */}
          </ul>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default Calender;
