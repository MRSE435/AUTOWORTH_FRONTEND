import Allmodelsstats from "./Allmodelsstats";
export default function Dashboard() {
    return (
        <div className="flex flex-col h-full gap-4 ">
            <div className="grid  flex-1  grid-cols-[1fr_1fr]  gap-4  min-h-0  ">
                <div className="border bg-[#E8E5FF]  flex justify-between  items-center w-full p-4 rounded-2xl">
                    <div className="gap-2 flex-col flex">
                        <h className=" font-bold text-[#6A5ACD]">BEST .RANDOM FOREST</h>
                        <h1 className="text-4xl text-[#3D336B] font-bold">$4,35,000</h1>
                        <h className="font-bold text-[#6E6A8A]">+$18,000 range</h>
                    </div>
                    <div className="gap-2 flex-col flex">
                        <h className=" font-bold text-[#6A5ACD]">R² MAE</h>
                        <h1 className="text-4xl text-[#3D336B] font-bold">0.94</h1>
                        <h className="font-bold text-[#6E6A8A]">+$18,000 range</h>

                    </div>
                </div>
                <Allmodelsstats/>
            </div>


            <div className="flex-[1.2] border ">

            </div>

            <div className="grid  grid-cols-[1fr_1fr] flex-1 gap-4 ">
                <div className="border">

                </div>
                <div className="border ">

                </div>
            </div>

        </div>
    );
}

