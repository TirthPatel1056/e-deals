
import React, { useState } from 'react'
// import { useRouter } from "react-router-dom";
import { Link, NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import { ShoppingCartIcon } from 'lucide-react';



const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [term, setTerm] = useState();
  
  const [searchParams, setSearchParams] = useSearchParams();

  // const router = useRouter();
  // if (term) {
  //   router.push(`?search=${term}`);
  // }
  // console.log(searchParams.get("search"))
  
  const Navigate = useNavigate();
  const auth = localStorage.getItem("authToken");

  return (
    <>
      <nav className="w-full bg-zinc-400 sticky top-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className=" md:py-2 md:block">
              <NavLink to="/">
                <h2 className="text-2xl font-normal">E-Deals</h2>
              </NavLink>

              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>

            </div>

          </div>
          <span>
            <input
              className=" m-3  flex h-10 w-[350px] rounded-xl bg-gray-100 px-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Serach your product..."
              value={term}
              onChange={(e) => setSearchParams({search:e.target.value})}
            />

          </span>
          <div>

            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                }`}
            >

              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-gray-600 hover:text-gray-950">
                  <NavLink to="/">Home</NavLink>
                </li>

                <li className="text-gray-600 hover:text-gray-950">
                  <NavLink to="/contact">Contact us</NavLink>
                </li>

                {/* <li className="text-gray-600 hover:text-gray-950">
                  <NavLink to="/registration">Registration</NavLink>
                </li> */}

                {
                  auth ? (
                    <><li className=' text-gray-600 font-extrabold'> <div className='font-normal px-3'></div>
                      <Link to="/cart">
                        <ShoppingCartIcon className='size-7 ' />
                      </Link>
                    </li>
                      <button onClick={() => {
                        alert(`click  "OK"  to log-out...`)
                        localStorage.removeItem("authToken")
                        Navigate(`/login`)
                      }} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                        Sign Out
                      </button></>) : (<>
                        <button onClick={() => {
                          Navigate(`/login`)
                        }} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded-full">
                          Login
                        </button>
                        <button onClick={() => {
                          Navigate(`/registration`)
                        }} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                          Registration
                        </button></>
                  )
                }


              </ul>

            </div>
          </div>
        </div>
      </nav >




    </>
  )
}

export default Navbar