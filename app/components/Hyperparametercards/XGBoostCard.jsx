"use client"
import TrendUp from "../Svgfolder/TrendUp";
import HyperParameterTable from "../../Charts/HyperParameterTable";
import InfoIcon from "../Svgfolder/InfoIcon";
import XGB  from "../Svgfolder/XGB";
export default  function XGBoostCard()
{
    const rows = [
        {
            model:"XGBoost",
            parameter: "n_estimators",
            value: 1000,
            description: "No of boosting rounds",
        },
        {

            parameter: "max_depth",
            value: "6",
            description: "Maximum depth of a tree",
        },
        {

            parameter: "learning_rate",
            value: "0.07",
            description: "step size shrinkage",
        },
        {

            parameter: "subsample",
            value: "0.9",
            description: "Fraction of samples used",
        }, {

            parameter: "colsample_bytree",
            value: "0.4",
            description: "Fraction of measure used",
        },
        {

            parameter: "gamma",
            value: "0",
            description: "Minimum loss reduction",
        },
        {

            parameter: "reg_alpha",
            value: "0.01",
            description: "L1 regulerization term",
        },

        {

            parameter: "reg_lambda",
            value: "20",
            description: "L2 regulerization term",
        },

    ];
    return(
        <div className="w-full h-full bg-[#0F1220] border-[#5B3FCB] p-4 flex flex-col justify-between">
            <div className="flex gap-4">
                <div className="p-4 bg-[#5B3FCB] flex justify-center items-center rounded-xl shrink-0">
                    <XGB className="w-5 h-5 sm:w-10 h-10  text-white"/>
                </div>
                <div  className="flex flex-col gap-2">
                    <h1  className=" sm:text-xl md:text-2xl   lg:text-3xl text-white" >Linear Regression</h1>
                    <div className="bg-[#2A1D54] text-[#A78BFA] w-fit pl-2 pr-2 rounded-xl ">
                        Best Performing Model
                    </div>
                </div>
            </div>


            <p className="text-xl text-2xl text-white">
             XGBoost is an optimized gradient boosting framework that
             delivers high performance and generalization.
            </p>

            <HyperParameterTable  rows={rows}/>

            <div className="flex  justify-between bg-[#1A1232] border-[#2A1D54]">
                <InfoIcon className=" text-[#5B3FCB] w-5 h-5 sm:w-10 h-10  " />
                <h1 className="text-xl self-center text-white text-wrap">This model achieved the highest Test R² score with the lowest errors</h1>
            </div>

        </div>

    )
}
