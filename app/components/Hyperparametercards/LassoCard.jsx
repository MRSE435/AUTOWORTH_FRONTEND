"use client"
import ShrinkingCoefficients from "../Svgfolder/ShrinkingCoefficients";
import HyperParameterTable from "../../Charts/HyperParameterTable";
import InfoIcon from "../Svgfolder/InfoIcon";
export default  function LinearCard()
{
    const rows = [
        {
            model:"Lasso",
            parameter: "Alpha (α)",
            value: "0.0001",
            description: "Regularization Strentgh" +
                "(L1 penalty)",
        },

    ];
    return(
        <div className="w-full h-full bg-[#0F1220] border-[#5B3FCB] p-4 flex flex-col justify-between">
            <div className="flex gap-4">
                <div className="p-4 bg-[#EA580C] flex justify-center items-center rounded-xl shrink-0">
                    <ShrinkingCoefficients  className="w-5 h-5 sm:w-10 h-10  text-white"/>
                </div>
                <div  className="flex flex-col gap-2">
                    <h1  className=" sm:text-xl md:text-2xl   lg:text-3xl text-white" >Lasso Regression</h1>
                    <div className="bg-[#4B2A12] text-[#F59E0B] w-fit pl-2 pr-2 rounded-xl ">
                        L1 Regulerization
                    </div>
                </div>
            </div>


            <p className="text-xl text-2xl text-white">
                lLasso Regression adds L1 penalty which can shrink
                some coefficients to zero,performing feature selection.
            </p>

            <HyperParameterTable  rows={rows}/>

            <div className="flex  justify-between bg-[#1D1308] border-[#EA580C]">
                <InfoIcon className=" text-[#F59E0B] w-5 h-5 sm:w-10 h-10 text-wrap " />
                <h1 className="text-xl self-center text-white">This model serves as a baseline for comparison</h1>
            </div>

        </div>

    )
}
