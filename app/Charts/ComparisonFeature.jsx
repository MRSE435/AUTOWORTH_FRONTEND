"use client"
import{ResponsiveContainer,BarChart,Bar,Cell,Tooltip,XAxis,YAxis,Legend}   from "recharts";
export default function ComparisonFeature({data}) {

    return(
        <ResponsiveContainer width="100%" height="90%">
            <BarChart layout="vertical" data={data}
            >
                <XAxis type="number" />
                <YAxis
                    type="category"
                    dataKey="label"
                />
                <Bar dataKey="value"   fill="#7C3AED"   />
            </BarChart>
        </ResponsiveContainer>
    )
}