import React, { useState } from "react";
function BookingsForm({ sidebar, setSidebar }) {
  return (
    <section
      className={`${
        sidebar ? "translate-x-0" : "translate-x-full"} hoverflow-y-scroll  shadow-xl border ease-in-out fixed bg-white z-10 duration-500 right-0 group-hover:left-0 h-screen w-full sm:w-1/3`}
    >
      <div className="h-full relative">
        <button className="absolute top-12 right-10" onClick={() => {setSidebar(false)}}>
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
          <form id="form" noValidate="">
            <fieldset className="relative z-0 w-full p-px mb-5">
              <legend className="absolute text-gray-500 transform scale-75 -top-3 origin-0">
                Employee Category
              </legend>
              <div className="block pt-3 pb-2 space-x-4">
                <label>
                  <input
                    type="radio"
                    name="employee-category"
                    defaultValue={1}
                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                  />
                  Employees
                </label>
                <label>
                  <input
                    type="radio"
                    name="employee-category"
                    defaultValue={2}
                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
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
                    defaultValue={1}
                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                  />
                  Lunch
                </label>
                <label>
                  <input
                    type="radio"
                    name="meal-category"
                    defaultValue={2}
                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                  />
                  Dinner
                </label>
              </div>
            </fieldset>

            <div className="relative z-0 w-full mb-5 flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                className="block p-2 w-full sm:w-auto text-sm text-gray-900 border border-gray-300 rounded-lg bg-slate-200 focus:ring-blue-500 focus:border-blue-500 "
              />
              <span className="font-semibold">To</span>
              <input
                id="end-date"
                type="date"
                className="block p-2 text-sm w-full sm:w-auto text-gray-900 border border-gray-300 rounded-lg bg-slate-200 focus:ring-blue-500 focus:border-blue-500 "
              />
            </div>
            <div class="relative z-0 w-full my-5">
              <input
                type="number"
                name="money"
                placeholder=" "
                class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                for="money"
                class="absolute duration-300 top-3 left-5 -z-1 origin-0 text-gray-500"
              >
                Booking Count
              </label>
            </div>
            <div className="relative z-0 w-full my-5">
              <div className="relative w-full">
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                  placeholder="Search Department name..."
                  required=""
                />
              </div>
              <div className="w-full h-40 relative z-0 my-5 overflow-scroll">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Action
                      </th>
                      <th scope="col" class="px-6 py-3">
                        ID
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Department
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        ></input>
                      </th>
                      <td class="px-6 py-4">2001</td>
                      <td class="px-6 py-4">Thomas</td>
                      <td class="px-6 py-4">IT & Sec</td>
                    </tr>
                    <tr class="bg-white border-b">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        ></input>
                      </th>
                      <td class="px-6 py-4">2002</td>
                      <td class="px-6 py-4">Jack</td>
                      <td class="px-6 py-4">Network Management</td>
                    </tr>
                    <tr class="bg-white">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 rounded-xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        ></input>
                      </th>
                      <td class="px-6 py-4">2003</td>
                      <td class="px-6 py-4">Joey</td>
                      <td class="px-6 py-4">Sales</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="w-full relative z-0 my-5 ">
                <textarea
                  type="text"
                  name="date"
                  placeholder="Add a note..."
                  onclick="this.setAttribute('type', 'date');"
                  class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
              </div>
            </div>
            <button
              id="button"
              type="button"
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
