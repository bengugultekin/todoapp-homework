import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      {
        id: "1",
        color: 1,
        title: "Learn React",
      },
      {
        id: "2",
        color: 2,
        title: "Read a book",
      },
    ],
  },
  reducers: {
    addNew: (state, action) => {
      state.items.push(action.payload);
    },
    destroy: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
  },
});

export const { addNew, destroy } = notesSlice.actions;
export default notesSlice.reducer;
