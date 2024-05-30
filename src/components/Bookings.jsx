import React, { useEffect, useState } from "react";
import BookingsForm from "./BookingsForm";
import BookingForEmployees from "./BookingForEmployees";
import BookingsForNonEmployees from "./BookingsForNonEmployees";
import axios from "axios";
import { base_url } from "../statics/exports";

function Bookings() {
  const [selectedCategory, setSelectedCategory] = useState("employees");
  const [sidebar,setSidebar] = useState(false)
  const [BookingsEmployees,SetBookingsEmployees] = useState([])
  const [FilteredBookingsEmployees,setFilteredBookingsEmployees] = useState(BookingsEmployees)  
  const [BookingsNonEmployees,SetBookingsNonEmployees] = useState([])
  const [FilteredBookingsNonEmployees,setFilteredBookingsNonEmployees] = useState(BookingsNonEmployees)  

  useEffect(() => {
    axios.get(`${base_url}/api/manage/get_bookings`,{ headers: {
      "ngrok-skip-browser-warning": true,
      Authorization: `Bearer ${localStorage.getItem("access")}`,
    }}).then((response) => {
      response.data.data.map((item) => {
        if(item.customer[0].is_employee == true){
          SetBookingsEmployees(prevArray => [...prevArray,item])
          setFilteredBookingsEmployees(prevArray => [...prevArray,item])
        }else{
          SetBookingsNonEmployees(prevArray => [...prevArray,item])
          setFilteredBookingsNonEmployees(prevArray => [...prevArray,item])
        }
      })        
    }).catch((errors) => {
      console.log(errors);
      alert(errors.response.data.error);
    })    
  },[])
  return (
    <section className="h-screen w-full flex flex-col">
    <BookingsForm sidebar={sidebar} setSidebar={setSidebar} SetBookingsEmployees={SetBookingsEmployees} setFilteredBookingsEmployees={setFilteredBookingsEmployees} SetBookingsNonEmployees={SetBookingsNonEmployees} setFilteredBookingsNonEmployees={setFilteredBookingsNonEmployees}/>
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
         {selectedCategory == 'employees' ? <BookingForEmployees setSidebar={setSidebar} Bookings={BookingsEmployees} SetBookings={SetBookingsEmployees} FilteredBookings={FilteredBookingsEmployees} setFilteredBookings={setFilteredBookingsEmployees}/> : null}
         {selectedCategory == 'non-employees' ? <BookingsForNonEmployees setSidebar={setSidebar} Bookings={BookingsNonEmployees} SetBookings={SetBookingsNonEmployees} FilteredBookings={FilteredBookingsNonEmployees} setFilteredBookings={setFilteredBookingsNonEmployees} /> : null}
      </div>
    </section>
  );
}

export default Bookings;
