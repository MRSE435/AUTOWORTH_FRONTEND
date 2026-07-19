"use client"
import LinearCard from "./LinearCard";
import RidgeCard from "./RidgeCard";
import LassoCard from "./LassoCard";
import RandomForestCard from "./RandomForestCard";
import XGBoostCard from "./XGBoostCard";
export default function  HyperParameter({selectedModel}) {
    switch (selectedModel) {
        case "Linear":
            return <LinearCard/>;

        case "Ridge":
            return <RidgeCard/>;

        case "Lasso":
            return <LassoCard/>;

        case "RandomForest":
            return <RandomForestCard/>;

        case "XGBoost":
            return <XGBoostCard/>;

        default:
            return <LinearCard/>;
    }
}
