import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { base_url } from "../statics/exports";

function BookingsForm({ sidebar, setSidebar }) {
  const [Employees, setEmployees] = useState([]);
  const [NonEmployees, setNonEmployees] = useState([]);
  const [selectedEmployeeCategory, setSelectedEmployeeCategory] =
    useState("employee");

  useEffect(() => {
    axios
      .get(`${base_url}/api/manage/get_employees`, {
        headers: {
          "ngrok-skip-browser-warning": true,
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      })
      .then(function (response) {
        setEmployees(response.data.data.employee);
        setNonEmployees(response.data.data.non_employee);
      })
      .catch(function (error) {
        alert(error.response.data.error);
      });
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const addBooking = async (data) => {
    console.log(data);
    if (data.customer_list.length == 0) {
      alert("Please select atleast one customer!!");
      return;
    }
    axios
      .post(`${base_url}/api/manage/booking`, data, {
        headers: {
          "ngrok-skip-browser-warning": true,
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
  return (
    <section
      className={`${
        sidebar ? "translate-x-0" : "translate-x-full"
      } overflow-y-scroll  shadow-xl border ease-in-out fixed bg-white z-10 duration-500 right-0 group-hover:left-0 h-screen w-full sm:w-1/3`}
    >
      <div className="h-full relative">
        <button
          className="absolute top-12 right-10"
          onClick={() => {
            setSidebar(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </button>
        <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
          <h1 className="text-2xl font-bold mb-8">Book A Meal</h1>
          <form onSubmit={handleSubmit(addBooking)}>
            <fieldset className="relative z-0 w-full p-px mb-5">
              <legend className="absolute text-gray-500 transform scale-75 -top-3 origin-0">
                Employee Category
              </legend>
              <div className="block pt-3 pb-2 space-x-4">
                <label>
                  <input
                    type="radio"
                    name="employee-category"
                    value={"employee"}
                    checked={true}
                    onClick={() => {
                      setSelectedEmployeeCategory("employee");
                    }}
                    {...register("customer_category")}
                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                    required={true}
                  />
                  Employees
                </label>
                <label>
                  <input
                    type="radio"
                    name="employee-category"
                    value={"non-employee"}
                    onClick={() => {
                      setSelectedEmployeeCategory("non-employee");
                    }}
                    {...register("customer_category")}
                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                    required={true}
                  />
                  Non-Employees
                </label>
              </div>
            </fieldset>
            <fieldset className="relative z-0 w-full p-px mb-5">
              <legend className="absolute text-gray-500 transform scale-75 -top-3 origin-0">
                Meal Category
              </legend>
              <div className="block pt-3 pb-2 space-x-4">
                <label>
                  <input
                    type="radio"
                    name="meal-category"
                    value={"lunch"}
                    checked={true}
                    {...register("meal_category")}
                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                    required={true}
                  />
                  Lunch
                </label>
                <label>
                  <input
                    type="radio"
                    name="meal-category"
                    value={"dinner"}
                    {...register("meal_category")}
                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                    required={true}
                  />
                  Dinner
                </label>
              </div>
            </fieldset>

            <div className="relative z-0 w-full mb-5 flex items-center">
              <input
                type="checkbox"
                {...register("is_weekend")}
                className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                required={true}
              ></input>
              <label
                htmlFor="select"
                className="duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Weekend
              </label>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-around space-y-3 sm:space-y-0">
              <input
                id="start-date"
                type="date"
                {...register("from_date")}
                className="block p-2 w-full sm:w-auto text-sm text-gray-900 border border-gray-300 rounded-lg bg-slate-200 focus:ring-blue-500 focus:border-blue-500 "
                required={true}
              />
              <span className="font-semibold">To</span>
              <input
                id="end-date"
                type="date"
                {...register("to_date")}
                className="block p-2 text-sm w-full sm:w-auto text-gray-900 border border-gray-300 rounded-lg bg-slate-200 focus:ring-blue-500 focus:border-blue-500 "
                required={true}
              />
            </div>
            <div className="relative z-0 w-full my-5">
              <input
                type="number"
                name="count"
                placeholder="Booking Count"
                {...register("booking_count")}
                className="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                required={true}
              />
            </div>
            <div className="relative z-0 w-full my-5">
              <div className="relative w-full">
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                  placeholder="Search By Name..."
                  required=""
                />
              </div>
              <div className="w-full h-40 relative z-0 my-5 overflow-scroll">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                      <th scope="col" className="px-6 py-3">
                        ID
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Department
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedEmployeeCategory === "employee" &&
                      Employees &&
                      Employees.map((item, index) => (
                        <tr className="bg-white border-b" key={index}>
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                          >
                            <input
                              type="checkbox"
                              {...register("customer_list")}
                              value={item._id}
                              className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            ></input>
                          </th>
                          <td className="px-6 py-4 text-gray-900 ">
                            {item._id}
                          </td>
                          <td className="px-6 py-4 text-gray-900 ">
                            {item.Fname + " " + item.Lname}
                          </td>
                          <td className="px-6 py-4 text-gray-900 ">
                            {item.department.department_name}
                          </td>
                        </tr>
                      ))}
                    {selectedEmployeeCategory === "non-employee" &&
                      NonEmployees &&
                      NonEmployees.map((item, index) => (
                        <tr className="bg-white border-b" key={index}>
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                          >
                            <input
                              type="checkbox"
                              {...register("customer_list")}
                              value={item._id}
                              className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            ></input>
                          </th>
                          <td className="px-6 py-4 text-gray-900 ">
                            {item._id}
                          </td>
                          <td className="px-6 py-4 text-gray-900 ">
                            {item.Fname + " " + item.Lname}
                          </td>
                          <td className="px-6 py-4 text-gray-900 ">-</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="w-full relative z-0 my-5 ">
                <textarea
                  type="text"
                  name="date"
                  required={true}
                  {...register("notes")}
                  placeholder="Add a note..."
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
              </div>
            </div>
            <button
              id="button"
              type="submit"
              className="w-full my-3 px-6 py-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-black focus:outline-none"
            >
              Book
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default BookingsForm;
