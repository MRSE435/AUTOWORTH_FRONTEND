"use client"
import TrendUp from "../Svgfolder/TrendUp";
import HyperParameterTable from "../../Charts/HyperParameterTable";
import InfoIcon from "../Svgfolder/InfoIcon";
export default  function LinearCard()
{
    const rows = [
        {
            model:"Linear",
            parameter: "Alpha (α)",
            value: "N/A",
            description: "No Regularization",
        },

    ];
    return(
        <div className="w-full h-full bg-[#0F1220] border-[#5B3FCB] p-4 flex flex-col justify-between">
            <div className="flex gap-4">
                <div className="p-4 bg-[#5B3FCB] flex justify-center items-center rounded-xl shrink-0">
                    <TrendUp className="w-5 h-5 sm:w-10 h-10  text-white"/>
                </div>
                <div  className="flex flex-col gap-2">
                    <h1  className=" sm:text-xl md:text-2xl   lg:text-3xl text-white" >Linear Regression</h1>
                    <div className="bg-[#2A1D54] text-[#A78BFA] w-fit pl-2 pr-2 rounded-xl ">
                        Baseline Model
                    </div>
                </div>
            </div>


            <p className="text-xl text-2xl text-white">
                Linear Regression uses Ordinary Least Squares (OLS)
                without regularization.
            </p>

            <HyperParameterTable  rows={rows}/>

            <div className="flex  justify-between bg-[#1A1232] border-[#2A1D54]">
                 <InfoIcon className=" text-[#5B3FCB] w-5 h-5 sm:w-10 h-10  " />
                <h1 className="text-xl self-center text-white">This model serves as a baseline for comparison</h1>
            </div>

        </div>

    )
}
