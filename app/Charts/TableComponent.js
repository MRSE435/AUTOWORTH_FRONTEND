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


export function TableComponent({models}) {
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Model</TableHead>
                    <TableHead>Train R²</TableHead>
                    <TableHead>Test R²</TableHead>
                    <TableHead>MAE(₹)</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {models.map((model) => (
                    <TableRow key={model.name}>
                        <TableCell>
                            <div className="flex items-center gap-2">
                                <BulletDot
                                    className="w-3 h-3"
                                    style={{ color: model.Bulletcolor }}
                                />
                                <span>{model.name}</span>
                            </div>
                        </TableCell>

                        <TableCell>{model.train_r2}</TableCell>
                        <TableCell>{model.test_r2}</TableCell>
                        <TableCell>{model.mae}</TableCell>
                        <TableCell>{model.status}</TableCell>
                    </TableRow>
                ))}
            </TableBody>


        </Table>
    )
}
