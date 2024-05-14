
//////////////////////...........................//////////////////////////////////////.................................................

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useSearchParams } from "react-router-dom";

// const GetData = () => {

//     const [data, setData] = useState();
//     const [searchParams, setSearchParams] = useSearchParams();

//     const search = searchParams.get('search')

//     const fetchData = async (search) => {
//         if (!search) {
//             search = "";
//         }
//         try {
//             const response = await axios.get(`http://localhost:4000/?name=${search}`);
//             setData(response.data.productdata);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };

//     useEffect(() => {
//         fetchData(search);
//     }, [search]);

//     console.log("data:", data);

//     return (
//         <div>
//             <h2>Posts:</h2>

//             <input
//                 className=" m-3 flex h-8 w-[250px] rounded-md bg-gray-100 px-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//                 type="text"
//                 placeholder="Serach your product..."
//                 onChange={(e) => {
//                     setSearchParams({ search: e.target.value })
//                 }}

//             />

//             {data?.map((post) => (
//                 <li key={post._id}>{post.name}</li>
//             ))}
//         </div>
//     );
// };

// export default GetData;

////////////////////////.........................../////////////////////////////////////////.............................//////////////////////////////////




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useSearchParams } from "react-router-dom";

// const GetData = () => {

//     const [data, setData] = useState();
//     const [searchParams, setSearchParams] = useSearchParams();



//     const search = searchParams.get('search')
//     let category = searchParams.get('category')

//     useEffect(() => {
//         setSearchParams({ category: "All" })
//     }, [])




//     console.log(category, ".....cat")

//     const fetchData = async (search) => {

//         if (!search) {
//             search = "";
//         }

//         if (category === "All") {

//             try {
//                 const response = await axios.get(`http://localhost:4000/?name=${search}}`);
//                 setData(response.data.productdata);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         }
//         if (category !== "All") {

//             // if (!search) {
//             //     search = "";
//             // }

//             try {
//                 const response = await axios.get(`http://localhost:4000/?name=${search}&${category}}`);
//                 setData(response.data.productdata);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         }

//     };

//     useEffect(() => {
//         fetchData(search);
//     }, [search]);

//     console.log("data:", data);

//     return (
//         <div>
//             <h2>Posts:</h2>

//             <input
//                 className=" m-3 flex h-8 w-[250px] rounded-md bg-gray-100 px-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//                 type="text"
//                 placeholder="Serach your product..."
//                 onChange={(e) => {
//                     setSearchParams({ search: e.target.value })
//                 }}

//             />

//             <label for="states" class="sr-only">Choose a Category</label>
//             <select
//                 onChange={(e) => {
//                     setSearchParams({ category: e.target.value })
//                 }} id="states" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-e-lg border-s-gray-100 dark:border-s-gray-700 border-s-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
//                 <option className='bg-red-500' value="All" selected>All</option>
//                 <option value="Electronics">Electronics</option>
//                 <option value="Kitchen">Kitchen</option>
//                 <option value="Men'sware">Men's ware</option>
//                 <option value="Women's ware">Women's ware</option>
//                 <option value="Kid's ware">Kid's ware</option>
//             </select>

//             {data?.map((post) => (
//                 <li key={post._id}>{post.name}</li>
//             ))}
//         </div>
//     );
// };

// export default GetData;





import axios from 'axios';
import { Eye } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate, useParams, useSearchParams } from 'react-router-dom'

const Products = () => {
    const [data, setData] = useState();

    const [searchParams, setSearchParams] = useSearchParams();
    let search = searchParams.get('search')
    console.log(search)

    const params = useParams()
    const nav = useNavigate()

    let cat = params.category
    console.log(cat)

    const fetchData = async (cat) => {

        if (!cat) {
            cat = "";
        }
        try {
            const response = await axios.get(`http://localhost:4000/?category=${cat}`);
            setData(response.data.productdata);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData(cat);
        setSearchParams({ search: "" })
    }, [cat]);


    console.log("data:", data);

    const applyFilter = () => {
        // <Link to={`/products/${cat}`}></Link>
        // nav(`/products/${cat}`)
    }

    return (
        <>
            <div className='flex flex-row justify-between items-center sticky top-0 z-10 bg-gray-50 shadow-md'>
                <NavLink to="/">
                    <h2 className="text-3xl font-semibold ml-2 text-slate-700">E-Deals</h2>
                </NavLink>
                <input
                    className=" m-3 flex h-8 w-[250px] rounded-md bg-gray-100 px-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Serach your product..."
                    onChange={(e) => {
                        setSearchParams({ search: e.target.value })
                    }}

                />

                <div className='flex items-center justify-center m-8'>
                    <Link to={`/products/`} className='text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focu:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'> All</Link>
                    <Link to={`/products/Electronics`} className='text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focu:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'> Electronics</Link>
                    <Link to={`/products/Kitchen`} className='text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focu:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'> Kitchen</Link>
                    <Link to={`/products/Men'sware`} className='text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focu:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'> Men'sware</Link>
                    <Link to={`/products/Women's ware`} className='text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focu:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'> Women's ware</Link>
                    <Link to={`/products/Kid's ware`} className='text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focu:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'> Kid's ware</Link>
                </div>
            </div>


            <div className='flex flex-row flex-wrap m-3'>
                {
                    data?.filter((item) => item.name.toLowerCase().includes(search || "")).map((item) => (
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
                    ))}
            </div>

        </>
    )
}

export default Products

