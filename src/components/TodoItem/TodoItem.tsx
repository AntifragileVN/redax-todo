import { useDispatch } from 'react-redux';

import { MdClose } from 'react-icons/md';
import { TodoType } from 'src/types/shared';
import { deleteTodo, toggleCompletion } from 'src/redux/todoSlice';
import './TodoItem.scss';

type TodoProps = {
	todo: TodoType;
};

export const TodoItem = ({ todo }: TodoProps) => {
	const dispatch = useDispatch();

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
			<button className="todo__btn" onClick={handleDelete}>
				<MdClose size="24" />
			</button>
		</div>
	);
};
