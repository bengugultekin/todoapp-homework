import {createSlice} from '@reduxjs/toolkit';

export const filteredSlice = createSlice({
    name: 'filteredSlice',
    initialState: {
        color: 1
    },
    reducers: {
        setFilter: (state, action) => {
            state.color = action.payload;
        }
    },
});

export const { setFilter } = filteredSlice.actions;
export default filteredSlice.reducer;