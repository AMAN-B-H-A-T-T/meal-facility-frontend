import React,{useEffect, useState} from "react";
import EmployeeListTable from "./EmployeeListTable";
import NonEmployeeListTable from "./NonEmployeeListTable";
import axios from "axios";
import { base_url } from "../statics/exports";
import AddUserForm from "./AddUserForm";

function Users() {
  const [selectedCategory, setSelectedCategory] = useState("employees");  
  const [AddUserSidebarForm,showAddUserForm] = useState(false)  
  const [Employees,setEmployees]   = useState([])
  const [NonEmployees,setNonEmployees]   = useState([])  
  useEffect(() => {
    axios.get(`${base_url}/api/manage/get_employees`, { headers: {'ngrok-skip-browser-warning':true,"Authorization" : `Bearer ${localStorage.getItem('access')}`} })
        .then(function (response) {                 
          setEmployees(response.data.data.employee)
          setNonEmployees(response.data.data.non_employee)
      })
      .catch(function (error) {
        console.log(error);
        alert(error.response.data.error);
      });
  },[])
  return (
    <section className="h-screen w-full flex flex-col">    
    <div className='text-right my-3 sm:mx-14 mt-20'>
        <button onClick={() => {showAddUserForm(true)}} className='p-3 w-full bg-transparent border border-black text-black hover:bg-black hover:text-white rounded-xl'>Add User</button>
    </div>
    <AddUserForm AddUserSidebarForm={AddUserSidebarForm} showAddUserForm={showAddUserForm} setEmployees={setEmployees} setNonEmployees={setNonEmployees}/>
      <div className="sm:mx-14 flex items-center justify-center bg-slate-200 rounded-xl ">
        <div
          className={`w-1/2 text-center cursor-pointer rounded-xl  p-3 font-semibold border ${
            selectedCategory == "employees" ? " bg-black text-white" : ""
          }`}
          onClick={() => setSelectedCategory("employees")}
        >
          Add a user
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

          <div className="overflow-x-scroll">
            {
            selectedCategory == 'employees' ? (<EmployeeListTable Employees={Employees}/>) : (<NonEmployeeListTable NonEmployees={NonEmployees}/>)
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Users;
