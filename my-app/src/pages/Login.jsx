import React, { useState } from 'react'
import { BASEURL } from '../helper/comman';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom"


const Login = () => {

  const Navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();


  const [userState, setUserState] = useState({
    email: "",
    password: ""
  });
  const submitForm = async () => {

    setLoading(true);
    // console.log("The payload is", userState);

    try {
      const res = axios.post(`${BASEURL}user/login`, userState).then((userState) => {
        console.log(userState.data.authToken, "....token....")
        console.log(userState.data.data.name, "....helllo....")
        console.log(res, "....res....")



        localStorage.setItem("authToken", userState.data.authToken)
        setLoading(false);
        setUserState({
          email: "",
          password: ""
        })
        Navigate(`/user-profile`)
      }).catch((err) => {
        console.log(err)
      })
    } catch (error) {
      console.log(error, "error.....")
    }




    // axios
    //   .post("http://localhost:4000/user/login", userState)
    //   .then((response
    //     ) => {
    //     setLoading(false);
    //     console.log("The response is", response
    //     .data.msg);
    //   })


  };

  return (
    <div>

      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-gray-100 px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Login</h1>

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              id="email"
              value={userState.email}
              onChange={(e) =>
                setUserState({ ...userState, email: e.target.value })
              } />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              id="password"
              value={userState.password}
              onChange={(e) =>
                setUserState({ ...userState, password: e.target.value })
              } />

            <button
              onClick={submitForm}
              type="submit"
              className="w-full text-center py-3 rounded bg-zinc-700 text-white hover:bg-green-dark focus:outline-none my-1"
              disabled={loading}
            > {
                loading ? ("Processing") : ("Login")
              }
            </button>

            <div className="text-grey-dark mt-6">
              Already have an account?
              <Link className="no-underline border-b border-blue text-blue" to="/registration">
                Sign Up
              </Link>
            </div>
          </div>


        </div>
      </div>

    </div>
  )
}

export default Login