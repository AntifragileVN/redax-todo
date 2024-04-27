import { createSlice, nanoid } from '@reduxjs/toolkit';
import { TodoType } from 'src/types/shared';

const initialState: Array<TodoType> = [];

export const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const newTodo: TodoType = {
				id: nanoid(),
				text: action.payload,
				completed: false,
				archived: false,
			};
			state.push(newTodo);
		},
		archiveTodo: (state, action) => {
			const todo = state.find((todo) => todo.id === action.payload);
			if (todo) {
				todo.archived = !todo.archived;
			}
		},
		deleteTodo: (state, action) => {
			const index = state.findIndex((todo) => todo.id === action.payload);
			if (index !== -1) {
				state.splice(index, 1);
			}
		},
		toggleCompletion: (state, action) => {
			const todo = state.find((todo) => todo.id === action.payload);
			if (todo) {
				todo.completed = !todo.completed;
			}
		},
	},
});

export const { addTodo, deleteTodo, archiveTodo, toggleCompletion } = todoSlice.actions;
export default todoSlice.reducer;
