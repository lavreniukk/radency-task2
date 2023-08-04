import { IColumnType } from "../../types/tableData"

interface Props<T> {
    columns: IColumnType<T>[];
}

export function TableHeader<T>({ columns } : Props<T>): JSX.Element {
    return (
        <tr className="table_row">
            {
                columns.map((column) => (
                    <th key={column.key} className="table_header_cell">
                        { column.renderHeaderCell ? column.renderHeaderCell({} as T) : column.title }
                    </th>
                ))
            }
        </tr>
    )
};