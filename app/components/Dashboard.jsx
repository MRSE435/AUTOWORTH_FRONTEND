import Allmodelsstats from "./Allmodelsstats";
import KmVsPriceChart from "../Charts/KmVsPriceChart";
import MetricBars from "@/app/components/MetricBarComponent/MetricBars";
export default function Dashboard({prediction}) {
    const data = [
        { label: "Brand", value: 34 },
        { label: "Year", value: 26 },
        { label: "KM", value: 22 },
        { label: "Fuel", value: 10 },
        { label: "Transmission", value: 8 },
    ];
    return (
        <div className="flex flex-col lg:h-full gap-4 ">
            <div className="grid  flex-1   grid-cols-[1fr] lg:grid-cols-[1fr_1fr]  gap-4  min-h-0  ">
                <div className="border  firstrow  bg-[#E8E5FF]  flex justify-between  items-center sm:w-full p-2 sm:p-4 rounded-2xl shrink">
                    <div className="gap-2 flex-col flex min-w-0">
                        <h1 className=" font-bold text-[#6A5ACD]">BEST .RANDOM FOREST</h1>
                        <h1 className="sm:text-4xl text-[#3D336B] font-bold">{prediction}</h1>
                        <h1 className="font-bold text-[#6E6A8A]">+$18,000 range</h1>
                    </div>
                    <div className="gap-2 flex-col flex min-w-0">
                        <h1 className=" sm:font-bold text-[#6A5ACD]">R² MAE</h1>
                        <h1 className="sm:text-4xl text-[#3D336B] font-bold">0.94</h1>
                        <h1 className="sm:font-bold text-[#6E6A8A]">+$18,000 range</h1>

                    </div>
                </div>
                <Allmodelsstats/>
            </div>


            <div className="lg:flex-[1.2] border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4  min-h-0  ">
                <div className="min-w-0">
                    <MetricBars data={data} color="#8B5CF6" />
                </div>
                <div className="min-w-0">
                    <MetricBars data={data} color="#8B5CF6" />
                </div>
                <div className="min-w-0">
                    <MetricBars data={data} color="#8B5CF6" />
                </div>
                <div className="min-w-0">
                    <MetricBars data={data} color="#8B5CF6" />
                </div>
            </div>

            <div className="grid  gris-cols-[1fr] lg:grid-cols-[1fr_1fr] md:flex-1 gap-4 ">
                <div className="border min-h-[30vh]">

                </div>
                <div className="border  min-h-[30vh]">
                     <KmVsPriceChart />
                </div>
            </div>

        </div>
    );
}

