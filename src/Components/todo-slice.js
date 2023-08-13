import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        completeTodo: (state, action) => {
            const index = action.payload;
            state[index] = 'Task Completed:)';
        },
        deletemessage: (state, action) => {
            const index = action.payload;
            state[index] = 'Task Deleted:(';
        },
        editTodo: (state, action) => {
            const { index, newTodo } = action.payload;
            state[index] = newTodo;
        },
        deleteTodo: (state, action) => {
            const index = action.payload;
            state.splice(index, 1);
        },
    },
});

export const { addTodo, completeTodo, editTodo, deleteTodo, deletemessage } = todosSlice.actions;

export default todosSlice.reducer;
