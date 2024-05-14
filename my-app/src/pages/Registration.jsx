import React, { useState } from 'react'
import axios from "axios"
import { BASEURL } from '../helper/comman';
import { Link, useNavigate } from "react-router-dom"
import { signUpSchema } from '../schema/RegSchems';
import { useFormik } from "formik";

const Registration = () => {

  const Navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState("");
  const [userState, setUserState] = useState({
    email: "",
    password: "",
    name: "",
    lname: "",
    cpassword: ""
  });
  const initialValues = {
    email: "",
    password: "",
    name: "",
    lname: "",
    cpassword: ""
  };



  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
        setLoading(true)
        const res = axios.post(`${BASEURL}user/registration`, values).then((values) => {
          console.log(values, "....values....")
          console.log(res, ".....res..")
          Navigate(`/login`)
          action.resetForm();
          setLoading(false);

        })

      },
    });




  // const submitForm = async () => {

  //   setLoading(true);
  //   console.log("The payload is", userState);

  //   try {
  //     axios.post(`${BASEURL}user/registration`, userState).then((userState) => {
  //       console.log(userState, "....userState")
  //       Navigate(`/login`)
  //       setLoading(false);

  //     }).catch((err) => {
  //       console.log(err)
  //     })
  //   } catch (error) {
  //     console.log(error, "error.....")
  //   }



  //   // axios
  //   //   .post("/user/registration", userState)
  //   //   .then((userState) => {
  //   //     setLoading(false);
  //   //     console.log("The response is", userState);
  //   //   })

  //   // "proxy": "http://localhost:3000",
  //   // try {
  //   //   const response = await fetch(`http://localhost:4000/user/registration`, {
  //   //     // withCredentials: true,
  //   //     method: "POST",
  //   //     mode: 'cors',
  //   //     headers: {
  //   //       'Access-Control-Allow-Origin': '*',
  //   //       "Content-Type": "application/json"

  //   //     },
  //   //     // credentials: 'include',
  //   //     body: JSON.stringify(userState),

  //   //   }
  //   //   ); console.log(response)
  //   // } catch (error) {
  //   //   console.log(error, "error.....")

  //   // }


  // };

  return (
    <div>

      {/* 
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-gray-100 px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="name"
                placeholder="First Name"
                id="name"
                value={userState.name}
                onChange={(e) =>
                  setUserState({ ...userState, name: e.target.value })
                } />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="lname"
                placeholder="Last Name"
                id="lname"
                value={userState.lname}
                onChange={(e) =>
                  setUserState({ ...userState, lname: e.target.value })
                } />

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
              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="cpassword"
                placeholder="Confirm Password"
                id="cpassword"
                value={userState.cpassword}
                onChange={(e) =>
                  setUserState({ ...userState, cpassword: e.target.value })
                } />

              <button
                // onClick={submitForm}
                type="submit"
                className="w-full text-center py-3 rounded bg-zinc-700 text-white hover:bg-green-dark focus:outline-none my-1"
                disabled={loading}
              > {
                  loading ? ("Processing") : ("Create Account")
                }
              </button>
            </form>

            <div className="text-grey-dark mt-6">
              Already have an account?
              <Link className="no-underline border-b border-blue text-blue" to="/login">
                Log in
              </Link>
            </div>
          </div>


        </div>
      </div> */}


      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-gray-100 px-4 py-5 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-row'>
                Register As -
                <div ><input
                  className='m-2'
                  type="radio"
                  name="UserType"
                  value="User"
                  onChange={(e) => setUserType(e.target.value)}
                />
                  User
                  <input
                    className='m-2'
                    type="radio"
                    name="UserType"
                    value="Admin"
                    onChange={(e) => setUserType(e.target.value)}
                  />
                  Admin</div>
              </div>
              {userType == "Admin" ? (
                <div className="p-4">
                  <label className="m-2 text-red-800">Secret Key</label>
                  <input
                    type="text"
                    className="form-control text-red-700"
                    placeholder="Secret Key"
                  // onChange={(e) => setSecretKey(e.target.value)}
                  />
                </div>

              ) : null}
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-1"
                name="name"
                placeholder="First Name"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur} />
              <h3 className='text-red-600 mb-3'> {errors.name}</h3>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-1"
                name="lname"
                placeholder="Last Name"
                id="lname"
                value={values.lname}
                onChange={handleChange}
                onBlur={handleBlur} />
              <h3 className='text-red-600 mb-3'> {errors.lname}</h3>

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-1"
                name="email"
                placeholder="Email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur} />
              <h3 className='text-red-600 mb-3'> {errors.email}</h3>

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-1"
                name="password"
                placeholder="Password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur} />
              <h3 className='text-red-600 mb-3'> {errors.password}</h3>

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-1"
                name="cpassword"
                placeholder="Confirm Password"
                id="cpassword"
                value={values.cpassword}
                onChange={handleChange}
                onBlur={handleBlur} />
              <h3 className='text-red-600 mb-3'> {errors.cpassword}</h3>

              <button
                // onClick={submitForm}
                type="submit"
                className="w-full text-center py-3 rounded bg-zinc-700 text-white hover:bg-green-dark focus:outline-none my-1"
                disabled={loading}
              > {
                  loading ? ("Processing") : ("Create Account")
                }
              </button>
            </form>

            <div className="text-grey-dark mt-6">
              Already have an account?
              <Link className="no-underline border-b border-blue text-blue" to="/login">
                Log in
              </Link>
            </div>
          </div>


        </div>
      </div>

    </div>
  )
}

export default Registration