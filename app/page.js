import Navbar from "./components/Navbar.jsx";
import Normalform from "./components/Normalform";
import Dashboard from "./components/Dashboard.jsx";
export default function Home() {
    return (
        <>
            <Navbar/>
            <div className="w-full flex   h-screen ">
                <div className="w-1/4 bg-[#2B2B2B] p-6 ">
                    <Normalform/>
                </div>

                <div className="flex-1  h-screen bg-[#2B2B2B] p-6">
                   <Dashboard/>
                </div>
            </div>
        </>
    );
}