export type TodoType = {
	id: string;
	text: string;
	completed: boolean;
	isDeleted: boolean;
};

export type FilterStatusType = 'all' | 'active' | 'completed' | 'deleted';
