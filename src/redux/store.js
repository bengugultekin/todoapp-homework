import {configureStore} from '@reduxjs/toolkit';
import notesSlice from './notes/notesSlice';
import filteredSlice from './notes/filteredSlice';

export const store = configureStore({
    reducer: {
        notes: notesSlice,
        filtered: filteredSlice,
    },

});