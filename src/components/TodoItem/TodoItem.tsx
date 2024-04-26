import { useDispatch } from 'react-redux';

import { MdClose } from 'react-icons/md';
import css from './TodoItem.module.css';
import { TodoType } from 'src/types/shared';
import { deleteTodo, toggleCompletion } from 'src/redux/todoSlice';

type TodoProps = {
	todo: TodoType;
};

export const TodoItem = ({ todo }: TodoProps) => {
	const dispatch = useDispatch();

	const handleDelete = () => dispatch(deleteTodo(todo.id));
	const handleToggle = () => dispatch(toggleCompletion(todo.id));

	return (
		<div className={css.wrapper}>
			<input
				type="checkbox"
				className={css.checkbox}
				checked={todo.completed}
				onChange={handleToggle}
			/>
			<p className={css.text}>{todo.text}</p>
			<button className={css.btn} onClick={handleDelete}>
				<MdClose size="24" />
			</button>
		</div>
	);
};
