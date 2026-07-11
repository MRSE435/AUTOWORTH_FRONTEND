import Navbar from "./components/Navbar.jsx";
import Normalform from "./components/Normalform";

export default function Home() {
    return (
        <>
            <Navbar/>
            <div className="w-full h-screen flex ">
                <div className="w-2/10 bg-[#2B2B2B] p-6 ">
                    <Normalform/>
                </div>

                <div className="flex-1 bg-red-600">

                </div>
            </div>
        </>
    );
}