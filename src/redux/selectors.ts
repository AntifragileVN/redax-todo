import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/store';

export const selectTodos = (state: RootState) => state.todos;

export const selectDeletedTodos = createSelector([selectTodos], (todos) => {
	return todos.filter((todo) => todo.isDeleted);
});
