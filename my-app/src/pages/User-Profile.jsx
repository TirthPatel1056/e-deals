import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import { LucideUserCircle2, ShoppingCartIcon } from 'lucide-react';
import { useSelector } from 'react-redux';
import LogOutBtn from '../components/LogOutBtn';

const UserProfile = () => {
  const [UserName, setUserName] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();


  

  const items = useSelector((state) => state.cart.Cart)

  const auth = localStorage.getItem("authToken")
  const fetchData = async () => {
    try {
      axios.post("http://localhost:4000/user/profile", {
        token: auth
      })
        .then((response) => {
          console.log(response.data.data.name, ".....letast...res");
          setUserName(response.data.data.name)
          setLname(response.data.data.lname)
          setEmail(response.data.data.email)

        });
    } catch (error) {
      console.log(error, "....erreerrror")
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (<>
    <div className='sticky top-0 z-10 flex flex-row justify-between bg-white shadow-md'>
      <div className='flex flex-row items-center'>

        <NavLink to="/">
          <h2 className="text-3xl font-semibold ml-2 text-cyan-700">E-Deals</h2>
        </NavLink>

      </div>

      <span className=' flex flex-row justify-center '>
        <ul className="items-center flex flex-row justify-center ">

          <li className="text-cyan-700 hover:text-gray-950 p-4">
            <NavLink to="/">Home</NavLink>
          </li>

          <li className="text-cyan-700 hover:text-gray-950 p-4">
            <NavLink to="/contact">Contact us</NavLink>
          </li>


          <LogOutBtn/>
        
          <li className="text-zinc-600 font-extrabold m-2">
            <div className='flex flex-col'>
              <Link to="/product/cart">
                <LucideUserCircle2 className='size-7 text-cyan-700 hover:text-gray-950' />
              </Link>
            </div>
          </li>

          {/* {
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
            } */}

        </ul>
      </span>
    </div>
    <h1>{email}</h1>
    <div className='flex flex-row justify-center mt-10'><h1 className='text-3xl font-extralight'> Welcome Back </h1> <h1 className=' pl-2 text-3xl font-light'>{UserName}</h1><h1 className=' pl-2 text-3xl font-light'>{lname}</h1></div>
  </>
  )
}

export default UserProfile