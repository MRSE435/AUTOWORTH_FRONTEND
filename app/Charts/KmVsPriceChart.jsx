// KmVsPriceChart.jsx
"use client"
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
const data=  [
    { km_driven: 5000, price: 1850000 },
    { km_driven: 8000, price: 1760000 },
    { km_driven: 12000, price: 1690000 },
    { km_driven: 15000, price: 1620000 },
    { km_driven: 18000, price: 1580000 },
    { km_driven: 22000, price: 1520000 },
    { km_driven: 26000, price: 1460000 },
    { km_driven: 30000, price: 1400000 },
    { km_driven: 34000, price: 1360000 },
    { km_driven: 38000, price: 1300000 },
    { km_driven: 42000, price: 1250000 },
    { km_driven: 46000, price: 1190000 },
    { km_driven: 50000, price: 1130000 },
    { km_driven: 55000, price: 1080000 },
    { km_driven: 60000, price: 1020000 },
    { km_driven: 65000, price: 970000 },
    { km_driven: 70000, price: 910000 },
    { km_driven: 76000, price: 860000 },
    { km_driven: 82000, price: 790000 },
    { km_driven: 90000, price: 720000 },
];
export default function KmVsPriceChart() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <ScatterChart>
                <CartesianGrid />
                <XAxis dataKey="km_driven" type="number" />
                <YAxis dataKey="price" type="number" />
                <Tooltip />
                <Scatter data={data} fill="#8b5cf6" />
            </ScatterChart>
        </ResponsiveContainer>
    );
}