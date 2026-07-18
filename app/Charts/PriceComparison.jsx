"use client";

import {
    ResponsiveContainer,
    ScatterChart,
    Scatter,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ReferenceLine,
} from "recharts";

export default function PredictionScatterChart({data}) {


    // Step 1: Find the larger value from each object
    const largestValues = data.map((item) =>
        Math.max(item.actual, item.predicted)
    );

    console.log(largestValues);
    // [500000, 820000, 610000, 1000000, 1500000]

    // Step 2: Find the maximum among them
    const maxValue = Math.max(...largestValues);
    const referenceData = [
        { actual: 0, predicted: 0 },
        { actual: maxValue, predicted: maxValue },
    ];
    console.log(maxValue);
    // 1500000

    return (
        <ResponsiveContainer width="100%" height="100%">
            <ScatterChart>
                <CartesianGrid stroke="#31313A" />

                <XAxis
                    type="number"
                    dataKey="actual"
                    name="Actual Price"
                />

                <YAxis
                    type="number"
                    dataKey="predicted"
                    name="Predicted Price"
                />

                <Tooltip />

                {/* Perfect Prediction Line */}
                <Scatter
                    data={referenceData}
                    line
                    lineType="joint"
                    shape={() => null}
                    line={{ stroke: "#3B82F6", strokeWidth: 3 }}
                />

                {/* Prediction Points */}
                <Scatter
                    data={data}
                    fill="#7C3AED"
                    fillOpacity={0.5}
                />
            </ScatterChart>
        </ResponsiveContainer>
    );
}