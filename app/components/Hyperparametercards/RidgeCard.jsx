"use client"
import ShieldIcon from "../Svgfolder/ShieldIcon";
import HyperParameterTable from "../../Charts/HyperParameterTable";
import InfoIcon from "../Svgfolder/InfoIcon";
export default  function RidgeCard()
{
    const rows = [
        {
            model:"Ridge",
            parameter: "Alpha (α)",
            value: "0.1",
            description: "Regularization Strentgh" +
                "(L2 penalty)",
        },

    ];
    return(
        <div className="w-full h-full bg-[#0F1220] border-[#5B3FCB] p-4 flex flex-col justify-between">
            <div className="flex gap-4">
                <div className="p-4 bg-[#1D4EDB] flex justify-center items-center rounded-xl shrink-0">
                    <ShieldIcon className="w-5 h-5 sm:w-10 h-10  text-[#1E40AF]"/>
                </div>
                <div  className="flex flex-col gap-2">
                    <h1  className=" sm:text-xl md:text-2xl   lg:text-3xl text-white" >Lasso Regression</h1>
                    <div className="bg-[#1D4EDB] text-[#93C5FD] w-fit pl-2 pr-2 rounded-xl ">
                        L1 Regulerization
                    </div>
                </div>
            </div>


            <p className="text-xl text-2xl text-white">
                Lasso Regression adds L1 penalty which can shrink
                some coefficients to zero,performing feature selection.
            </p>

            <HyperParameterTable  rows={rows}/>

            <div className="flex  justify-between bg-[#0B1E3A] border-[#1D4EDB]">
                <InfoIcon className=" text-[#93C5FD] w-5 h-5 sm:w-10 h-10 text-wrap " />
                <h1 className="text-xl self-center text-[#BFDEFB]">This model serves as a baseline for comparison</h1>
            </div>

        </div>

    )
}
