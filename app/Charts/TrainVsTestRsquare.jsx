"use client"
import{ResponsiveContainer,BarChart,Bar,Cell,Tooltip,XAxis,YAxis,Legend}   from "recharts";
export default function TrainVsTestRsquare() {
    const data = [
        {
            model: "Linear Regression",
            trainR2: 0.9154,
            testR2: 0.9053,
            mae: 116218.35,
            prediction: 335549.96,
        },
        {
            model: "Ridge",
            trainR2: 0.93,
            testR2: 0.9062,
            mae: 118288,
            prediction: 302880.99,
        },
        {
            model: "Lasso",
            trainR2: 0.86,
            testR2: 0.89,
            mae: 123782,
            prediction: 313057.63,
        },
        {
            model: "Random Forest",
            trainR2: 0.95,
            testR2: 0.93,
            mae: 100200,
            prediction: 399111.72,
        },
        {
            model: "XGBoost",
            trainR2: 0.96,
            testR2: 0.94,
            mae: 91985,
            prediction: 379435.03,
        },
    ];
    return(
        <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data} >
            <XAxis dataKey="model" tick={{ fill: "white" }}/>
            <YAxis domain={[0,1]} tickCount={5}  tick={{ fill: "white" }} />
             <Tooltip />
             <Legend />
            <Bar dataKey="trainR2" name="Train R²"  fill="#5b548a"  radius={[4, 4, 0, 0]}>
                {data.map((entry, index) => (
                    <Cell
                        key={`cell-train-${index}`}
                        fill={entry.model === "XGBoost" ? "#552ec7" : "#5b548a"}
                    />
                ))}
            </Bar>

            <Bar dataKey="testR2" name="Test R²"  fill="#8a70d6" radius={[4, 4, 0, 0]}>
                {data.map((entry, index) => (
                    <Cell
                        key={`cell-test-${index}`}
                        fill={entry.model === "XGBoost" ? "#7e63df" : "#8a70d6"}
                    />
                ))}
            </Bar>




        </BarChart>
        </ResponsiveContainer>
    )
}