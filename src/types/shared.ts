export type TodoType = {
	id: string;
	text: string;
	completed: boolean;
	archived: boolean;
};

export type FilterStatusType = 'all' | 'active' | 'completed' | 'deleted';
