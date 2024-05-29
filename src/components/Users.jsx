import React,{useState} from "react";
import EmployeeListTable from "./EmployeeListTable";
import NonEmployeeListTable from "./NonEmployeeListTable";
import AddUserForm from "./AddUserForm";

function Users() {
  const [selectedCategory, setSelectedCategory] = useState("employees");  
  const [AddUserSidebarForm,showAddUserForm] = useState(false)  
  return (
    <section className="h-screen w-full flex flex-col">    
    <div className='text-right my-3 sm:mx-14 mt-20'>
        <button onClick={() => {showAddUserForm(true)}} className='p-3 w-full bg-transparent border border-black text-black hover:bg-black hover:text-white rounded-xl'>Add User</button>
    </div>
    <AddUserForm AddUserSidebarForm={AddUserSidebarForm} showAddUserForm={showAddUserForm}/>
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
            selectedCategory == 'employees' ? (<EmployeeListTable/>) : (<NonEmployeeListTable/>)
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Users;
