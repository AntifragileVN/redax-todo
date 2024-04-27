import { useSelector } from 'react-redux';
import { selectVisibleTodos } from 'src/redux/selectors';
import { TableHead } from './TableHead/TableHead';
import { TodoItem } from 'src/components/TodoItem/TodoItem';
import { TodoType } from 'src/types/shared';

import './TodoList.scss';
export const TodoList = () => {
	const todos = useSelector(selectVisibleTodos);

	return (
		<table className="list">
			<TableHead />
			<tbody>
				{todos.length > 0 ? (
					<>
						{todos.map((todo: TodoType) => (
							<tr key={todo.id}>
								<TodoItem todo={todo} />
							</tr>
						))}
					</>
				) : null}
			</tbody>
		</table>
	);
};
