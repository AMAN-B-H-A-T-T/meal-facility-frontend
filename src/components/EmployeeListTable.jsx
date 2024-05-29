import React,{useState} from 'react'

function EmployeeListTable() {

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
              <tr className="odd:bg-white even:bg-gray-50 border-b text-black">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  EMP_100
                </th>
                <td className="px-6 py-4">Shravant Parmar</td>
                <td className="px-6 py-4">Network Administration</td>
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
              </tr>
            </tbody>
          </table>
    </>
  )
}

export default EmployeeListTable