import React from 'react'
import { useNavigate } from "react-router-dom"


const LogOutBtn = () => {
    const Navigate = useNavigate();

    return (

        <button onClick={() => {
            alert(`Click "OK" to Log-Out...`)
            localStorage.removeItem("authToken")
            Navigate(`/login`)
        }} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Sign Out
        </button>

    )
}

export default LogOutBtn