// import React, { useState } from "react";

// function Navbr() {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-lg h-20 py-2 ">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <a
//             href="https://flowbite.com/"
//             className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white underline">
//               {"30DOR"}
//             </span>
//           </a>
//           <button
//             onClick={handleToggle}
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="navbar-default"
//             aria-expanded={isOpen ? "true" : "false"}
//           >
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//           <div
//             className={`${
//               isOpen ? "block" : "hidden"
//             } w-full md:block md:w-auto`}
//             id="navbar-default"
//           >
//             <ul className="text-[20px] flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//               <li>
//                 <a
//                   href=""
//                   className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
//                   aria-current="page"
//                 >
//                   Courses
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href=""
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href=""
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >
//                   Login
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href=""
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >
//                   Register
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbr;

// import React, { useState } from 'react';
// import { FaLongArrowAltRight } from "react-icons/fa";

// function Navbar() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

 

//   return (
//     <>
//       <nav className=" sticky top-0 left-0 bg-white border-gray-200 dark:bg-gray-900 shadow-lg h-20 py-2">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
//             <span className="self-center text-2xl text-[#ffffff] whitespace-nowrap ">THE MOVIX</span>
//           </a>
//           <button
//             type="button"
//             className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             onClick={toggleSidebar}
//             aria-controls="navbar"
//             aria-expanded="false"
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-6 h-6"
//               aria-hidden="true"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M3 5a1 1 0 012 0h10a1 1 0 110 2H5a1 1 0 01-2 0zM3 10a1 1 0 012 0h10a1 1 0 110 2H5a1 1 0 01-2 0zM3 15a1 1 0 012 0h10a1 1 0 110 2H5a1 1 0 01-2 0z"
//                 clipRule="evenodd"
//               ></path>
//             </svg>
//           </button>
//           <div className="hidden w-full md:block md:w-auto" id="navbar">
//             <ul className="flex flex-col p-4 md:p-0 mt-4 border  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//               <li>
//               <a
//                   href=""
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >
//                   Register
//                 </a>
//               </li>
//               <li>
//               <a
//                   href=""
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >
//                   Register
//                 </a>
//               </li>
//               <li>
//               <a
//                   href=""
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >
//                   Register
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <div
//         className={`fixed top-0 left-0 w-72 h-full bg-[#032541] z-10 shadow-lg transform md:hidden transition-transform ${
//           sidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >
//         <div className='text-white w-12 mt-5 ml-52 cursor-pointer'>
//           <FaLongArrowAltRight size={50} onClick={toggleSidebar}/>
//         </div>

//         <ul className="mt-2 space-y-2">
//           <li>
//           <a
//                   href=""
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-wh"
//                 >
//                   Register
//                 </a>
//           </li>
//           <li>
//           <a
//                   href=""
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >
//                   Register
//                 </a>
//           </li>
//           <li>
//           <a
//                   href=""
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >
//                   Register
//                 </a>
            
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

// export default Navbar;


import React, { useState } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="sticky top-0 left-0 bg-white border-gray-200 dark:bg-gray-900 shadow-lg h-20 py-2 z-20">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl text-[black] whitespace-nowrap ">  {"30DOR"}</span>
          </a>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleSidebar}
            aria-controls="navbar"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 012 0h10a1 1 0 110 2H5a1 1 0 01-2 0zM3 10a1 1 0 012 0h10a1 1 0 110 2H5a1 1 0 01-2 0zM3 15a1 1 0 012 0h10a1 1 0 110 2H5a1 1 0 01-2 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar">
            <ul className="flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href=""
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 w-72 h-full bg-white z-10 shadow-lg transform md:hidden transition-transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='text-white w-12 mt-5 ml-52 cursor-pointer'>
          <FaLongArrowAltRight size={50} onClick={toggleSidebar}/>
        </div>

        <ul className="mt-2 space-y-2">
          <li>
            <a
              href=""
              className="block py-2 px-3 text-black rounded mt-10 "
            >
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
            >
              About
            </a>
          </li>
          <li>
            <a
              href=""
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href=""
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;

