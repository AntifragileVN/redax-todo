import { createSlice } from '@reduxjs/toolkit';
import { filtersStatus } from './constants';
import { FilterStatusType } from 'src/types/shared';

type InitialStateType = {
	status: FilterStatusType;
};

const initialState: InitialStateType = {
	status: filtersStatus.all,
};

export const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setFilterStatus(state, action) {
			state.status = action.payload;
		},
	},
});

export const { setFilterStatus } = filterSlice.actions;
export default filterSlice.reducer;
