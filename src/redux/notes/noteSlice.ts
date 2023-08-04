import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type NotesState from '../../types/notesStateInterface';
import mockNotes from './mockData';
import INote from '../../types/noteInterface';

const initialState: NotesState = {
    notes: mockNotes,
};

const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state, action: PayloadAction<INote>) => {
            state.notes.push(action.payload);
        },
        editNote: (state, action: PayloadAction<INote>) => {
            const payloadNote = action.payload;
            const note = state.notes.find((note) => note.id === payloadNote.id);
            if (note) {
                note.name = payloadNote.name;
                note.category = payloadNote.category;
                note.content = payloadNote.content;
                note.dates = payloadNote.dates;
            }
        },
        archiveNote: (state, action: PayloadAction<number>) => {
            const noteId = action.payload;
            const index = state.notes.findIndex((note) => note.id === noteId);
            state.notes[index].isArchived = !state.notes[index].isArchived;
        },
        deleteNote: (state, action: PayloadAction<number>) => {
            const noteId = action.payload;
            const index = state.notes.findIndex((note) => note.id === noteId);
            state.notes.splice(index, 1);
        },
        archiveAllNotes: (state) => {
            state.notes.forEach((note) => {
                note.isArchived = true;
            });
        },
        deleteAllNotes: (state) => {
            state.notes = [];
        }
    },
});

export const { addNote, editNote, deleteNote, archiveNote, deleteAllNotes, archiveAllNotes} = noteSlice.actions;
export const noteSelector = (state: RootState) => state.noteReducer;
export default noteSlice.reducer;
