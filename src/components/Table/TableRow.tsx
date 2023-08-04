import { IColumnType } from "../../types/tableData";
import getValue from "../../utils/getValue"

interface Props<T> {
    data: T;
    columns: IColumnType<T>[];
}

export function TableRow<T>({ data, columns }: Props<T>): JSX.Element {
    return (
        <tr>
           {
                columns.map((column) => (
                    <td key={column.key}>
                        { column.renderBodyCell ? column.renderBodyCell(data) : getValue(data, column) }
                    </td>
                ))
            } 
        </tr>
    )
}