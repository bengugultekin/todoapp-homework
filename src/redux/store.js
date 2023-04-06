import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./notes/notesSlice";
import filteredSlice from "./notes/filteredSlice";
import searchSlice from "./notes/searchSlice";

export const store = configureStore({
  reducer: {
    notes: notesSlice,
    filtered: filteredSlice,
    search: searchSlice,
  },
});
