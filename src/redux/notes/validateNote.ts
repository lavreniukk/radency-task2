import { Middleware } from "@reduxjs/toolkit";
import INote from "../../types/noteInterface";
import NotesState from "../../types/notesStateInterface";

const validateNote: Middleware<NotesState> = (store) => (next) => (action) => {
    if (action.type !== 'notes/addNote' && action.type !== 'notes/editNote') {
        return next(action);
    }

    const note: INote = action.payload;
    if (!note.name || !note.category || !note.content) {
        return;
    }
    return next(action);
};

export default validateNote;