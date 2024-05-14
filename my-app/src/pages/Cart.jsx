import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc, remove } from '../redux/slice'
import { Trash } from 'lucide-react'
import { Link } from 'react-router-dom'
// import Productdetails from './Product-details'

const Cart = () => {
    const [navbar, setNavbar] = useState(false);

    const items = useSelector((state) => state.cart.Cart)
    const dispatch = useDispatch();
    let total = 0;

    return (

<>

  <nav className="w-full bg-green-800 shadow sticky top-0">
    <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <a to="#">
                    <h2 className="text-2xl text-white font-bold">E-Deals</h2>
                </a>
                <div className="md:hidden">
                    <button
                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                        onClick={() => setNavbar(!navbar)}
                    >
                        {navbar ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-white"
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
                                className="w-6 h-6 text-white"
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
        <div>
            <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                    }`}
            >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li className="text-white">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="text-white">
                        <Link to="/blogs">
                            Blogs
                        </Link>
                    </li>
                    <li className="text-white">
                        <Link to="/about">
                            About US
                        </Link>
                    </li>
                    <li className="text-white">
                        <Link to="/contact">
                            Contact US
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
</nav>
        <div className="mx-auto max-w-7xl px-2 lg:px-0">
        <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
          <h1 className="text-3xl m-5 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section aria-labelledby="cart-heading" className="rounded-lg bg-white lg:col-span-8">
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>

              <ul role="list" className="divide-y divide-gray-200">

                {

                  items ? (


                    items?.map((product) => (
                      <div key={product.id} className="m-5">
                        <li className="flex py-6 sm:py-6 ">
                          <div className="flex-shrink-0">
                            <img
                              src={product.mediaUrl}
                              alt={product.name}
                              className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                            />
                          </div>
                          {/* setPtotal(total += product.totalPrice) */}
                          <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                              <div>
                                <div className="flex justify-between">
                                  <h3 className="text-sm">
                                    <a to={product.to} className="font-semibold text-black">
                                      {product.name}
                                      {/* ## {product.totalPrice} */}
                                    </a>
                                  </h3>
                                </div>
                                <div className="mt-1 flex text-sm">
                                  <p className="text-sm text-gray-500">{product.color}</p>
                                  {product.size ? (
                                    <p className="ml-4 border-l border-gray-200 pl-4 text-sm text-gray-500">
                                      {product.size}
                                    </p>
                                  ) : null}
                                </div>
                                <div className="mt-1 flex items-end">
                                  {/* <p className="text-xs font-medium text-gray-500 line-through">
                            {product.originalPrice}
                          </p> */}
                                  <p className="text-sm font-medium text-gray-900">
                                    ₹ {product.price}
                                  </p>
                                  &nbsp;&nbsp;
                                  {/* <p className="text-sm font-medium text-green-500">{product.discount}</p> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>





                        <div className='flex flex-row'>

                          {/* <IncDecBtn setDecreace={setDecreace} setIncreace={setIncreace} qunt={qunt} /> */}
                          <div className="min-w-24 flex">
                            <button type="button" className="h-7 w-7" onClick={() => {
                              dispatch(dec(product._id))

                            }
                            }>
                              -
                            </button>
                            <div className="mx-1 h-7 w-9 rounded-md border text-center" >{product.cartQuantity}</div>
                            <button type="button" className="flex h-7 w-7 items-center justify-center" onClick={() => dispatch(inc(product._id),
                            )}>
                              +
                            </button>
                          </div>

                          <div className="ml-6 flex text-sm">

                            <button onClick={() => dispatch(remove(product._id))} type="button" className="flex items-center space-x-1 px-2 py-1 pl-0">
                              <Trash size={12} className="text-red-500" />
                              <span className="text-xs font-medium text-red-500">Remove</span>
                            </button>
                            {product.totalPrice}

                          </div>

                        </div>
                        <div className="flex items-center justify-between border-y border-dashed py-4 ">
                          <dt className="text-base font-medium text-gray-900">Product Sub-Total = {product.cartQuantity} X {product.price}</dt>
                          <dd className="text-base font-medium text-gray-900">₹ {(product.price) * (product.cartQuantity)}</dd>

                        </div>

                      </div>

                    ))


                  ) : (<h1>Your Cart is Empty....!</h1>)

                }
              </ul>
            </section>

            <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0 "
        >
            <h2
                id="summary-heading"
                className=" border-b border-gray-250 text-gray-900 sm:p-4 text-center"
            >
                Price Details
            </h2>
            <div>
                <dl className=" space-y-1 px-2 py-4">
                   

                    <div className="flex items-center justify-between py-4">
                        <dt className="flex text-sm text-gray-800">
                            <span>Total Items :</span>
                        </dt>
                        <dd className="text-sm font-medium text-green-700">{items.length} </dd>
                    </div>
                    <div className="flex items-center justify-between py-4 flex-column">
                        <dt className="flex text-sm text-gray-800">
                            <span>Delivery Charges :</span>
                        </dt>
                        <dd className="text-sm font-medium text-green-700">Free</dd>
                    </div>
                    <div className="flex items-center justify-between py-4 flex-column">
                        <dt className="flex text-sm text-gray-800 flex-row">
                            <span>Payment Type :</span>
                        </dt>
                        <dd className="text-sm font-medium text-red-500">Case On Delivery</dd>
                    </div>
                    <div className="flex items-center justify-between border-y border-dashed py-4 ">
                        <dt className="text-base font-medium text-gray-900">Total Amount :</dt>
                        <dd className="text-base font-medium text-gray-900">
                           

                            {
                                items.forEach((item) => {
                                    total += item.totalPrice;
                                    // console.log(total, ".......?????")
                                    return total
                                })

                            }
                            ₹ {total}
                        </dd>
                    </div>
                </dl>
            </div>
        </section>
          

            
          </form>

          <div class="xl:col-span-2 h-max rounded-md p-8 sticky top-0">
          <h2 class="text-2xl font-bold text-[#333]">Complete your order</h2>
          <form class="mt-10">
            <div>
              <h3 class="text-lg font-bold text-[#333] mb-6">Personal Details</h3>
              <div class="grid sm:grid-cols-2 gap-6">
                <div class="relative flex items-center">
                  <input type="text" placeholder="First Name"
                    class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-4"
                    viewBox="0 0 24 24">
                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"></path>
                  </svg>
                </div>
                <div class="relative flex items-center">
                  <input type="text" placeholder="Last Name"
                    class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-4"
                    viewBox="0 0 24 24">
                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"></path>
                  </svg>
                </div>
                <div class="relative flex items-center">
                  <input type="email" placeholder="Email"
                    class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-4"
                    viewBox="0 0 682.667 682.667">
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                      </clipPath>
                    </defs>
                    <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                      <path fill="none" stroke-miterlimit="10" stroke-width="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        data-original="#000000"></path>
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        data-original="#000000"></path>
                    </g>
                  </svg>
                </div>
                <div class="relative flex items-center">
                  <input type="number" placeholder="Phone No."
                    class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none" />
                  <svg fill="#bbb" class="w-[18px] h-[18px] absolute right-4" viewBox="0 0 64 64">
                    <path
                      d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                      data-original="#000000"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="mt-6">
              <h3 class="text-lg font-bold text-[#333] mb-6">Shipping Address</h3>
              <div class="grid sm:grid-cols-2 gap-6">
                <input type="text" placeholder="Address Line"
                  class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none" />
                <input type="text" placeholder="City"
                  class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none" />
                <input type="text" placeholder="State"
                  class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none" />
                <input type="text" placeholder="Zip Code"
                  class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none" />
              </div>
              <div class="flex gap-6 max-sm:flex-col mt-10">
                <button type="button" class="rounded-md px-6 py-3 w-full text-sm font-semibold bg-transparent hover:bg-gray-100 border-2 text-[#333]">Cancel</button>
                <button type="button" class="rounded-md px-6 py-3 w-full text-sm font-semibold bg-[#333] text-white hover:bg-[#222]">Complete Purchase!</button>
              </div>
            </div>
          </form>
        </div>
      </div>
        </div>
      

     </> 


    )

}




export default Cart


// items?.map((product) => (
//     <div key={product.id} className="">
//         <li className="flex py-6 sm:py-6 ">
//             <div className="flex-shrink-0">
//                 <img
//                     src={product.mediaUrl}
//                     alt={product.name}
//                     className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
//                 />
//             </div>

//             <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
//                 <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
//                     <div>
//                         <div className="flex justify-between">
//                             <h3 className="text-sm">
//                                 <a to={product.to} className="font-semibold text-black">
//                                     {product.name}

//                                 </a>
//                             </h3>
//                         </div>
//                         <div className="mt-1 flex text-sm">
//                             <p className="text-sm text-gray-500">{product.color}</p>
//                             {product.size ? (
//                                 <p className="ml-4 border-l border-gray-200 pl-4 text-sm text-gray-500">
//                                     {product.size}
//                                 </p>
//                             ) : null}
//                         </div>
//                         <div className="mt-1 flex items-end">
                           
//                             <p className="text-sm font-medium text-gray-900">
//                                 ₹ {product.price}
//                             </p>
//                             &nbsp;&nbsp;
//                             {/* <p className="text-sm font-medium text-green-500">{product.discount}</p> */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </li>





//         <div className='flex flex-row'>

//             {/* <IncDecBtn setDecreace={setDecreace} setIncreace={setIncreace} qunt={qunt} /> */}
//             <div className="min-w-24 flex">
//                 <button type="button" className="h-7 w-7" onClick={() => {
//                     dispatch(dec(product._id))

//                 }
//                 }>
//                     -
//                 </button>
//                 <div className="mx-1 h-7 w-9 rounded-md border text-center" >{product.cartQuantity}</div>
//                 <button type="button" className="flex h-7 w-7 items-center justify-center" onClick={() => dispatch(inc(product._id),
//                 )}>
//                     +
//                 </button>
//             </div>

//             <div className="ml-6 flex text-sm">

//                 <button onClick={() => dispatch(remove(product._id))} type="button" className="flex items-center space-x-1 px-2 py-1 pl-0">
//                     <Trash size={12} className="text-red-500" />
//                     <span className="text-xs font-medium text-red-500">Remove</span>
//                 </button>
//                 {product.totalPrice}

//             </div>

//         </div>
//         <div className="flex items-center justify-between border-y border-dashed py-4 ">
//             <dt className="text-base font-medium text-gray-900">Product Sub-Total = {product.cartQuantity} X {product.price}</dt>
//             <dd className="text-base font-medium text-gray-900">₹ {(product.price) * (product.cartQuantity)}</dd>

//         </div>

//     </div>
// ))