import React, { useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams, NavLink } from 'react-router-dom';
import { ChevronDown, Eye } from 'lucide-react';
import { BASEURL } from '../helper/comman';
import HomeBar from '../components/HomeBar';
import { ShoppingCartIcon } from 'lucide-react';
import { useSelector } from 'react-redux';



const getProducts = async () => {

  try {
    const res = await fetch(`${BASEURL}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch tyres");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading tyres: ", error);
  }
};


const { productdata } = await getProducts();
// console.log(productdata, "......final.....")


const Home = () => {

  //   const { search } = useParams();
  // console.log(search, "///")


  // const searchParams = useParams();
  // const search = searchParams.get('search')
  // console.log(searchParams, "///")


  const [term, setTerm] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [val, setval] = useState("All");

  const [mainData, setMainData] = useState();

  const items = useSelector((state) => state.cart.Cart)



  const auth = localStorage.getItem("authToken");
  const Navigate = useNavigate();

  // function handleSearchParams(e) {
  // setSearchParams({ search: e.target.value }, { category: e.target.value })

  const searchUrl = searchParams.get("search")
  const categoryUrl = searchParams.get("category")

  // const { name } = useParams();
  // console.log(name, "...useState...name...")


  let catItems = productdata.filter(product => product.category === val);

  if (val === "All") {
    catItems = productdata;
  }


  // }

  return (
    <>







      {/* <HomeBar /> */}
      <div className='sticky top-0 z-10 flex flex-row justify-between bg-white shadow-md'>
        <div className='flex flex-row items-center'>
          <span className=''>
            <input
              className=" m-3 flex h-8 w-[250px] rounded-md bg-gray-100 px-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Serach your product..."
              value={term}
              onChange={(e) => {
                // setSearchParams({ search: e.target.value })
                setTerm(e.target.value)
              }}

            />
          </span>
          {/* <select className=' bg-gray-100 m-2 rounded-md' id="myDropdown" value={val}
            onChange={(e) => {
              setSearchParams({ category: e.target.value })
            }}
          >
            <option selected>All</option>
            <option value="Electronics">Electronics</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Men'sware">Men's ware</option>
            <option value="Women's ware">Women's ware</option>
            <option value="Kid's ware">Kid's ware</option>
          </select> */}

          <label for="states" class="sr-only">Choose a state</label>
          <select value={val}
            onChange={(e) => {
              // setSearchParams({ category: e.target.value })
              setval(e.target.value)
            }} id="states" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-e-lg border-s-gray-100 dark:border-s-gray-700 border-s-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option className='bg-red-500' value="All" selected>All</option>
            <option value="Electronics">Electronics</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Men'sware">Men's ware</option>
            <option value="Women's ware">Women's ware</option>
            <option value="Kid's ware">Kid's ware</option>
          </select>
        </div>



        {/* <h3> E-Deals</h3> */}
        <span className=' flex flex-row justify-center '>
          <ul className="items-center flex flex-row justify-center ">

            <li className="text-gray-600 hover:text-gray-950 p-4">
              <NavLink to="/">Home</NavLink>
            </li>

            <li className="text-gray-600 hover:text-gray-950 p-4">
              <NavLink to="/contact">Contact us</NavLink>
            </li>


            {
              auth ? (<></>) : (<li className="text-gray-600 hover:text-gray-950 p-4">
                <NavLink to="/registration">Registration</NavLink>
              </li>)
            }

            <li className="text-zinc-600 font-extrabold m-2">
              <div className='flex flex-col'>
                <div className='font-medium px-3'>{items.length}</div>
                <Link to="/product/cart">
                  <ShoppingCartIcon className='size-7 ' />
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


      {/* {
        item ? (
          
          item.map((item) =>
       
          (

          <>
            <div key={item._id} className="  mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
              <img className="h-48 w-full object-cover object-center" src={item.mediaUrl} alt="Product Image" />
              <div className="p-4">
                <h2 className="mb-2 text-lg font-medium text-gray-900">{item.name}</h2>
                <p className="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
                <div className="flex items-center">
                  <p className="mr-2 text-lg font-semibold text-gray-900">{item.price}</p>
                  <p className="text-base  font-medium text-gray-500 line-through">$25.00</p>
                  <p className="ml-auto text-base font-medium text-green-500">20% off</p>
                </div>
              </div>
              <Link to={`/product-details/${item._id}`}><div className='bg-gray-100 grid justify-around' >
                <button

                  type="button"
                  className="m-1 rounded-full bg-black-800 px-3 py-3 bg-gray-300 text-black-100 "
                >
                  <Eye className="h-4 w-4" />

                </button>
              </div></Link>

            </div>
          </>

        ))) :

          (
            productdata.filter((item) => item.name.toLowerCase().includes(searchUrl || "")).map((item) => (

            <>
              <div key={item._id} className="  mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                <img className="h-48 w-full object-cover object-center" src={item.mediaUrl} alt="Product Image" />
                <div className="p-4">
                  <h2 className="mb-2 text-lg font-medium text-gray-900">{item.name}</h2>
                  <p className="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
                  <div className="flex items-center">
                    <p className="mr-2 text-lg font-semibold text-gray-900">{item.price}</p>
                    <p className="text-base  font-medium text-gray-500 line-through">$25.00</p>
                    <p className="ml-auto text-base font-medium text-green-500">20% off</p>
                  </div>
                </div>
                <Link to={`/product-details/${item._id}`}><div className='bg-gray-100 grid justify-around' >
                  <button

                    type="button"
                    className="m-1 rounded-full bg-black-800 px-3 py-3 bg-gray-300 text-black-100 "
                  >
                    <Eye className="h-4 w-4" />

                  </button>
                </div></Link>

              </div>



            </>

          )))
      } */}
      {/* /////////////////////////////////////////////////////////////////////////// */}

      {/* {
        (
          productdata.filter((item) => item.category.toLowerCase().includes("")).map((item) => (

            <>
              <div key={item._id} className="  mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                <img className="h-48 w-full object-cover object-center" src={item.mediaUrl} alt="Product Image" />
                <div className="p-4">
                  <h2 className="mb-2 text-lg font-medium text-gray-900">{item.name}</h2>
                  <p className="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
                  <div className="flex items-center">
                    <p className="mr-2 text-lg font-semibold text-gray-900">{item.price}</p>
                    <p className="text-base  font-medium text-gray-500 line-through">$25.00</p>
                    <p className="ml-auto text-base font-medium text-green-500">20% off</p>
                  </div>
                </div>
                <Link to={`/product-details/${item._id}`}><div className='bg-gray-100 grid justify-around' >
                  <button

                    type="button"
                    className="m-1 rounded-full bg-black-800 px-3 py-3 bg-gray-300 text-black-100 "
                  >
                    <Eye className="h-4 w-4" />

                  </button>
                </div></Link>

              </div>



            </>

          )))
      } */}

      {/* //////////////////////////////// */}

      <div className='flex flex-row flex-wrap m-3'>

        {
          catItems?.filter((item) => item.name.toLowerCase().includes(term || "")).map((item) => (

            <>
              <div key={item._id} className="  mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                <img className="h-48 w-full object-cover object-center" src={item.mediaUrl} alt="Product Image" />
                <div className="p-4">
                  <h2 className="mb-2 text-lg font-medium text-gray-900">{item.name}</h2>
                  <p className="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
                  <div className="flex items-center">
                    <p className="mr-2 text-lg font-semibold text-gray-900">{item.price}</p>
                    <p className="text-base  font-medium text-gray-500 line-through">$25.00</p>
                    <p className="ml-auto text-base font-medium text-green-500">20% off</p>
                  </div>
                </div>
                <Link to={`/product-details/${item._id}`}><div className='bg-gray-100 grid justify-around' >
                  <button

                    type="button"
                    className="m-1 rounded-full bg-black-800 px-3 py-3 bg-gray-300 text-black-100 "
                  >
                    <Eye className="h-4 w-4" />

                  </button>
                </div></Link>
              </div>

              {/* <div class="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md m-7">
                <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                  <img class="peer absolute top-0 right-0 h-full w-full object-cover" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b" alt="product image" />
                  <img class="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
                   <div class="absolute  bottom-0 mb-4 flex space-x-4 w-full justify-center">
                    <div class="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
                    <div class="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
                    <div class="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
                  </div> 
                  <svg class="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
                   <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span> 
                </a>
                <div class="mt-4 px-5 pb-5">
                  <a href="#">
                    <h5 class="text-xl tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h5>
                  </a>
                  <div class="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      <span class="text-3xl font-bold text-slate-900">$449</span>
                      <span class="text-sm text-slate-900 line-through">$699</span>
                    </p>
                  </div>
                  <a href="#" class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to cart</a
                  >
                </div>
              </div> */}




            </>

          ))
        }
      </div>



    </>

  )
}

export default Home





{/* <div style={{ backgroundColor: "red", height: "100px", width: "200px", margin: "10px", display: "flex", }}>
                <div>
                  <img src={item.medialUrl} height="100px" width="100px" />
                </div>
              </div> */}