import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import { IColumnType } from "../../types/tableData";
import './table.css';

interface TableProps<T> {
    data: T[],
    columns: IColumnType<T>[],
}

export function Table<T>({ data, columns }: TableProps<T>): JSX.Element {
    return (
        <div className="table__container">
            <table className="table">
                <thead className="table_header">
                    <TableHeader<T> columns={columns}/>
                </thead>
                <tbody className="table_body">
                    {
                        data.map((item, index) => (
                            <TableRow<T> key={index} data={item} columns={columns}/>
                        ))
                    }
                </tbody>
            </table>  
        </div>
    );
}