import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/store';
import { filtersStatus } from './constants';

export const selectTodos = (state: RootState) => state.todos;

export const selectFilterStatus = (state: RootState) => state.filter.status;

export const selectVisibleTodos = createSelector(
	[selectTodos, selectFilterStatus],
	(todos, status) => {
		console.log(todos);
		switch (status) {
			case filtersStatus.active:
				return todos.filter((todo) => !todo.completed && !todo.archived);
			case filtersStatus.completed:
				return todos.filter((todo) => todo.completed && !todo.archived);
			case filtersStatus.deleted:
				return todos.filter((todo) => todo.archived);
			default:
				return todos.filter((todo) => !todo.archived);
		}
	}
);

export const selectTaskCount = createSelector([selectTodos], (todos) => {
	return todos.reduce(
		(count, todo) => {
			if (todo.completed && !todo.archived) {
				count.completed += 1;
			} else if (todo.archived) {
				count.archived += 1;
			} else {
				count.active += 1;
			}
			return count;
		},
		{ active: 0, completed: 0, archived: 0 }
	);
});
