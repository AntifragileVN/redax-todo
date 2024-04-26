import { AppBar } from 'src/components/AppBar/AppBar';
import { TodoList } from 'src/components/TodoList/TodoList';

const Todo = () => {
	return (
		<>
			<div>Todo</div>
			<AppBar />
			<TodoList />
		</>
	);
};

export default Todo;
