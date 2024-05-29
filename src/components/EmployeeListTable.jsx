import React,{useState} from 'react'

function EmployeeListTable({Employees}) {  
  return (
    <>
    <table className="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400 text-center">            
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
              </tr>
            </thead>
            <tbody className="overflow-y-scroll">              
              {Employees.map((item,index) => (
                <tr className="odd:bg-white even:bg-gray-50 border-b text-black" key={index}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {item._id}
                </th>
                <td className="px-6 py-4">{item.Fname +' '+ item.Lname}</td>
                <td className="px-6 py-4">{item.department.department_name}</td>
              </tr>
              ))}
            </tbody>
          </table>
    </>
  )
}

export default EmployeeListTable