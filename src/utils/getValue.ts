import { IColumnType } from "../types/tableData";

export default function getValue<T>(item: T, column: IColumnType<T>): string{
    return item[column.key as keyof T] as string;
}