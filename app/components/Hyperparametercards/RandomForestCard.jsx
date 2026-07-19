import TreesSvg from "../Svgfolder/TreesSvg";
import HyperParameterTable from "../../Charts/HyperParameterTable";
import InfoIcon from "../Svgfolder/InfoIcon";
const rows = [
    {
        model:"RandomForest",
        parameter: "n_estimators",
        value: 100,
        description: "Builds 100 decision trees.",
    },

    {

        parameter: "max_depth",
        value: "None",
        description: "Trees grow until leaves are pure or cannot split further",
    },

    {

        parameter: "max_features",
        value: 1.0,
        description: "Uses all features (for regression)",
    },

    {

        parameter: "bootstrap",
        value: "True",
        description: "Each tree is trained on a bootsrap sample",
    },
    ]

export default function RandomForestCard() {
    return (
        <div className="w-full h-full bg-[#0F1220] border-[#5B3FCB] p-4 flex flex-col justify-between">
            <div className="flex gap-4">
                <div className="p-4 bg-[#4FA93A] flex justify-center items-center rounded-xl shrink-0">
                    <TreesSvg className="w-5 h-5 sm:w-10 h-10  text-white"/>
                </div>
                <div  className="flex flex-col gap-2">
                    <h1  className=" sm:text-xl md:text-2xl   lg:text-3xl text-white" >Linear Regression</h1>
                    <div className="bg-[#294F23] text-[#7ED957] w-fit pl-2 pr-2 rounded-xl ">
                        Esemble Learning
                    </div>
                </div>
            </div>


            <p className="text-xl text-2xl text-white">
                Random Forest builds multiple descision trees and averages
                their predictions to reduce variance.
            </p>

            <HyperParameterTable  rows={rows}/>

            <div className="flex  justify-between bg-[#13261B] border-[#2D5B37]">
                <InfoIcon className=" text-[#67E05F] w-5 h-5 sm:w-10 h-10  " />
                <h1 className="text-xl self-center text-[#7ED957]">This model serves as a baseline for comparison</h1>
            </div>

        </div>
    )
}