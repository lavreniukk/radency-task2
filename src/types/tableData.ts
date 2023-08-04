export interface IMainTableData {
    icon: JSX.Element;
    id: number;
    name: string;
    created: string;
    category: string;
    content: string;
    dates: string;
}

export interface ISummaryTableData {
    icon: JSX.Element;
    categoryName: string;
    active: number;
    archived: number;
}

export interface IColumnType<T> {
    key: string;
    title: string;
    renderHeaderCell?: (data: T) => JSX.Element;
    renderBodyCell?: (data: T) => JSX.Element;
}