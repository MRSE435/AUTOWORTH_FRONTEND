import MetricBar from "./MetricBar";
export default function MetricBars({ data, color }) {
    return (
        <div className="flex flex-col gap-3 ">
            {data.map((item) => (
                <MetricBar
                    key={item.label}
                    label={item.label}
                    value={item.value}
                    color={color}
                />
            ))}
        </div>
    );
}