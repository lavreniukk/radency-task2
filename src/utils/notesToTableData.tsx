import categories from "../constants/noteCategories";
import NotesState from "../types/notesStateInterface";
import { IMainTableData, ISummaryTableData } from "../types/tableData";
import convertISOtoDate from "./convertISOtoDate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import iconNameToIcon from "../constants/iconNames";

function getIconByCategory(category: string): JSX.Element {
    switch (category) {
        case categories.TaskCategory:
            return <div className="table_body_icon"><FontAwesomeIcon icon={iconNameToIcon['task']} color="white"/></div>;
        case categories.IdeaCategory:
            return <div className="table_body_icon"><FontAwesomeIcon icon={iconNameToIcon['idea']} color="white"/></div>;
        case categories.ThoughtCategory:
            return <div className="table_body_icon"><FontAwesomeIcon icon={iconNameToIcon['thought']} color="white"/></div>;
    }
    return <></>;
}

function countByCategories(notesState: NotesState): Map<string, {archived: number, active: number}> {
    const notes = notesState.notes;
    const categoriesMap = new Map<string, {archived: number, active: number}>();

    notes.forEach((note) => {
        if (!categoriesMap.has(note.category)) {
            categoriesMap.set(note.category, {active: 0, archived: 0});
        }

        const count = categoriesMap.get(note.category);
        if (!count) {
            return;
        }
        note.isArchived ? count.archived++ : count.active++;
        categoriesMap.set(note.category, count);
    });

    return categoriesMap;
}

export function notesToSummaryTableData(notesState: NotesState): ISummaryTableData[] {
    let tableData: ISummaryTableData[] = [];
    const categoriesMap = countByCategories(notesState);

    categoriesMap.forEach((value, key) => {
        let icon: JSX.Element = getIconByCategory(key);

        tableData.push({
            icon: icon,
            categoryName: key,
            active: value.active,
            archived: value.archived,
        });
    });

    return tableData;
}

export function notesToMainTableData(notesState: NotesState, showArchived: boolean): IMainTableData[] {
    let tableData: IMainTableData[] = [];
    const notes = notesState.notes;

    notes.forEach((note) => {
        if (showArchived === !note.isArchived) {
            return;
        }

        let icon: JSX.Element = getIconByCategory(note.category);

        tableData.push({
            icon: icon,
            id: note.id,
            name: note.name,
            created: convertISOtoDate(note.created),
            category: note.category,
            content: note.content,
            dates: note.dates
        });
    });

    return tableData;
};