import { useSelector } from 'react-redux';
import { selectVisibleTodos } from 'src/redux/selectors';
import { TodoItem } from 'src/components/TodoItem/TodoItem';
import { TodoType } from 'src/types/shared';

export const TodoList = () => {
	const todos = useSelector(selectVisibleTodos);

	return (
		<ul>
			{todos.length > 0 ? (
				<>
					{todos.map((todo: TodoType) => (
						<li key={todo.id}>
							<TodoItem todo={todo} />
						</li>
					))}
				</>
			) : null}
		</ul>
	);
};
