export default function Navbar() {
    return (
        <nav className="flex  lg:p-4 lg:pb-2 text-2xl  p-2   justify-between bg-white border-b-white pb-0" >
            <a className=" z-10 text-black text-sm   whitespace-nowrap sm:text-2xl md:text-xl" href="#">JUPYTER UNIVERSITY</a>
            <div className=" text-sm hidden   text-black gap-10 sm:gap-5   md:flex     lg:text-2xl    sm:text-2xl md:text-xl ">
                <a href="#">Programs</a>
                <a href="#">Admissions</a>
                <a href="#">Campus</a>
                <a href="#">Faculty</a>
                <a href="#">About</a>

            </div>
            <div className="flex gap-3 text-black">
                <button className=" text-sm  sm:text-xl whitespace-nowrap">Apply Now</button>
                <svg  className="text-sm md:hidden text-black" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="4" y1="8" x2="24" y2="8" stroke="black" stroke-width="2.5" stroke-linecap="round" />
                    <line x1="4" y1="14" x2="24" y2="14" stroke="black" stroke-width="2.5" stroke-linecap="round" />
                    <line x1="4" y1="20" x2="24" y2="20" stroke="black" stroke-width="2.5" stroke-linecap="round" />
                </svg>
            </div>
        </nav>
    );
}
