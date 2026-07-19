import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import BulletDot from "../components/Svgfolder/BulletDot";


export function TableComponent({models}) {const colorMap = {
    "Linear Regression": "text-[#6938D4]",
    Ridge: "text-[#3061E5]",
    Lasso: "text-[#F66519]",
    "Random Forest": "text-[#22C853]",
    XGBoost: "text-[#7D3AE2]",
};

const statuscolormap={
    "Linear Regression": "text-[#6938D4]",
    Ridge: "text-[#3061E5]",
    Lasso: "text-[#F66519]",
    "Random Forest": "text-[#22C853]",
    XGBoost: "text-[#7D3AE2]",
}


    return (
        <Table  className="border border-[#232B43] rounded-xl overflow-hidden">
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader className="bg-[#151A2D]">
                <TableRow className="border-[#232B43]">
                    <TableHead className="text-[#AEB5C7] font-semibold">Model</TableHead>
                    <TableHead className="text-[#AEB5C7] font-semibold">Train R²</TableHead>
                    <TableHead className="text-[#AEB5C7] font-semibold">Test R²</TableHead>
                    <TableHead className="text-[#AEB5C7] font-semibold">MAE(₹)</TableHead>
                    <TableHead className="text-[#AEB5C7] font-semibold">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {models.map((model) => (
                    <TableRow className="border-[#1F253A]" key={model.name}>
                        <TableCell className="text-[#E5E7EB] font-medium">
                            <div className="flex items-center gap-2">
                                <BulletDot

                                    className={`w-3 h-3 ${colorMap[model.name]}`}
                                />
                                <span>{model.name}</span>
                            </div>
                        </TableCell>

                        <TableCell className="text-[#E5E7EB] font-medium">{model.train_r2}</TableCell>
                        <TableCell className="text-[#E5E7EB] font-medium">{model.test_r2}</TableCell>
                        <TableCell className="text-[#E5E7EB] font-medium">{model.mae}</TableCell>
                        <TableCell className="text-[#E5E7EB] font-medium">{model.status}</TableCell>
                    </TableRow>
                ))}
            </TableBody>


        </Table>
    )
}
