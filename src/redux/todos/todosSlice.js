import {createSlice} from '@reduxjs/toolkit';

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [
            {
                id: '1',
                classid:'1',
                title: 'Learn React',
            },
            {
                id: '2',
                classid:'2',
                title: 'Read a book'
            }
        ]
    },
    reducers: {
        addNew: (state, action) => {
            state.items.push(action.payload);
        },
    },
});

export const {addNew} = todosSlice.actions;
export default todosSlice.reducer;