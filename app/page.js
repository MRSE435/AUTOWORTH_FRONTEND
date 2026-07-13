"use client"
import Navbar from "./components/Navbar.jsx";
import Normalform from "./components/Normalform";
import Dashboard from "./components/Dashboard.jsx";
import {useState} from "react";
export default function Home() {
    const   [prediction,setprediction]=useState(null);
    return (
        <>
            <Navbar/>
            <div className="w-full flex flex-col lg:flex-row lg:h-screen ">
                <div className="  w-[20%]  bg-[#2B2B2B] p-4">
                    <Normalform setprediction={setprediction}/>
                </div>

                <div className="flex-1    min-h-screen bg-[#2B2B2B]     sm:p-6 ">
                   <Dashboard  prediction={prediction} />
                </div>
            </div>
        </>
    );
}