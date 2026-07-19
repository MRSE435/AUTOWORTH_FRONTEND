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
export default function HyperParameterTable({rows}) {
    let middlerowcolor=""
    if(rows[0].model === "RandomForest")
    {
        middlerowcolor ="text-[#67E05F]"
    }
    else if(rows[0].model === "XGBoost" || rows[0].model === "Linear" ||rows[0].model === "Ridge" )
    {
        middlerowcolor ="text-[#5B3FCB]"
    }
    else if(rows[0].model === "Lasso")
    {
        middlerowcolor ="text-[#FBBF24]"
    }

    return (
        <Table
            className="border border-[#232B43] rounded-xl overflow-hidden"
        >
            <TableHeader className="bg-[#151A2D]">
                <TableRow className="border-[#232B43]">
                    <TableHead className="text-[#AEB5C7] font-semibold">
                        Parameter
                    </TableHead>

                    <TableHead className="text-[#AEB5C7] font-semibold">
                        Best Value
                    </TableHead>

                    <TableHead className="text-[#AEB5C7] font-semibold">
                        Description
                    </TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {rows.map((row) => (
                    <TableRow
                        key={row.parameter}
                        className="border-[#1F253A]"
                    >
                        <TableCell className="text-[#E5E7EB] font-medium">
                            {row.parameter}
                        </TableCell>

                        <TableCell className={`${middlerowcolor} font-bold`}>
                            {row.value}
                        </TableCell>

                        <TableCell className="text-[#C5CAD7]">
                            {row.description}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}