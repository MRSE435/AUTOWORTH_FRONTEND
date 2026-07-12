import Navbar from "./components/Navbar.jsx";
import Normalform from "./components/Normalform";
import Dashboard from "./components/Dashboard.jsx";
export default function Home() {
    return (
        <>
            <Navbar/>
            <div className="w-full lg:flex  flex-col h-screen ">
                <div className=" flex-1 lg:w-1/4 bg-[#2B2B2B] p-4">
                    <Normalform/>
                </div>

                <div className="flex-1    min-h-screen bg-[#2B2B2B]     sm:p-6 ">
                   <Dashboard/>
                </div>
            </div>
        </>
    );
}