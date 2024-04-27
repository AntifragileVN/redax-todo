import { useDispatch, useSelector } from 'react-redux';

import { MdClose } from 'react-icons/md';
import { TodoType } from 'src/types/shared';
import { archiveTodo, deleteTodo, toggleCompletion } from 'src/redux/todoSlice';
import './TodoItem.scss';
import { selectFilterStatus } from 'src/redux/selectors';
type TodoProps = {
	todo: TodoType;
};
export const TodoItem = ({ todo }: TodoProps) => {
	const dispatch = useDispatch();
	const filter = useSelector(selectFilterStatus);

	const handleArchive = () => dispatch(archiveTodo(todo.id));
	const handleDelete = () => dispatch(deleteTodo(todo.id));
	const handleToggle = () => dispatch(toggleCompletion(todo.id));

	return (
		<div className="todo__wrapper">
			<input
				type="checkbox"
				className="checkbox"
				checked={todo.completed}
				onChange={handleToggle}
			/>
			<p className="todo__text">{todo.text}</p>
			<button
				className="todo__btn"
				onClick={filter !== 'deleted' ? handleArchive : handleDelete}
			>
				<MdClose size="24" />
			</button>
		</div>
	);
};
