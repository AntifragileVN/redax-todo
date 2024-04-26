import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/store';
import { filtersStatus } from './constants';

export const selectTodos = (state: RootState) => state.todos;

export const selectFilterStatus = (state: RootState) => state.filter.status;

export const selectVisibleTodos = createSelector(
	[selectTodos, selectFilterStatus],
	(todos, status) => {
		switch (status) {
			case filtersStatus.active:
				return todos.filter((todo) => !todo.completed && !todo.isDeleted);
			case filtersStatus.completed:
				return todos.filter((todo) => todo.completed && !todo.isDeleted);
			case filtersStatus.deleted:
				return todos.filter((todo) => todo.isDeleted);
			default:
				return todos.filter((todo) => !todo.isDeleted);
		}
	}
);

export const selectTaskCount = createSelector([selectTodos], (todos) => {
	return todos.reduce(
		(count, todo) => {
			if (todo.completed && !todo.isDeleted) {
				count.completed += 1;
			} else if (todo.isDeleted) {
				count.deleted += 1;
			} else {
				count.active += 1;
			}
			return count;
		},
		{ active: 0, completed: 0, deleted: 0 }
	);
});
