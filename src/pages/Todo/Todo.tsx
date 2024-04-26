import { AppBar } from 'src/components/AppBar/AppBar';
import { TodoList } from 'src/components/TodoList/TodoList';
import 'src/components/SharedLayout/SharedLayout.scss';
import { TodoForm } from 'src/components/TodoForm/TodoForm';

const Todo = () => {
	return (
		<div className="container">
			<AppBar />
			<TodoForm />
			<TodoList />
		</div>
	);
};

export default Todo;
