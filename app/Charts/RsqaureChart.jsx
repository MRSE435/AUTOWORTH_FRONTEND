"use client";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Cell,
    LabelList,
} from "recharts";

const data = [
    { model: "RF", r2: 0.89 },
    { model: "Linear", r2: 0.81 },
    { model: "Ridge", r2: 0.81 },
    { model: "Lasso", r2: 0.79 },
];

const colors = [
    "#6C5CE7", // RF
    "#2ECC71", // Linear
    "#F39C12", // Ridge
    "#C0392B", // Lasso
];

export default function ScoreComparisonChart() {
    return (
        <ResponsiveContainer width="100%" height={220}>
            <BarChart data={data}>

                <XAxis
                    dataKey="model"
                    axisLine={false}
                    tickLine={false}
                />

                <YAxis
                    hide
                    domain={[0.75, 0.92]}
                />

                <Tooltip />

                <Bar
                    dataKey="r2"
                    radius={[4, 4, 0, 0]}
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={index}
                            fill={colors[index]}
                        />
                    ))}

                    <LabelList
                        dataKey="r2"
                        position="top"
                        formatter={(value) => value.toFixed(2)}
                    />
                </Bar>

            </BarChart>
        </ResponsiveContainer>
    );
}