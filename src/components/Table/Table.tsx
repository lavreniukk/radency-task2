import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import { IColumnType } from "../../types/tableData";

interface TableProps<T> {
    data: T[],
    columns: IColumnType<T>[],
}

export function Table<T>({ data, columns }: TableProps<T>): JSX.Element {
    return (
        <table>
            <thead>
                <TableHeader<T> columns={columns}/>
            </thead>
            <tbody>
                {
                    data.map((item, index) => (
                        <TableRow<T> key={index} data={item} columns={columns}/>
                    ))
                }
            </tbody>
        </table>
    );
}