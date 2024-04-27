import { useDispatch, useSelector } from 'react-redux';
import { archiveTodo, deleteTodo, toggleCompletion } from 'src/redux/todoSlice';
import { selectFilterStatus } from 'src/redux/selectors';
import clsx from 'clsx';

import { MdClose } from 'react-icons/md';
import { TodoType } from 'src/types/shared';
import './TodoItem.scss';
import { notifySuccess } from 'src/services/notify';

type TodoProps = {
	todo: TodoType;
};

export const TodoItem = ({ todo }: TodoProps) => {
	const dispatch = useDispatch();
	const filter = useSelector(selectFilterStatus);

	const handleArchive = () => {
		notifySuccess('Deleted todo succesful');
		dispatch(archiveTodo(todo.id));
	};
	const handleDelete = () => {
		notifySuccess('Deleted todo succesful');
		dispatch(deleteTodo(todo.id));
	};
	const handleToggle = () => dispatch(toggleCompletion(todo.id));

	return (
		<>
			<td>
				<div className="todo__wrapper">
					<input
						type="checkbox"
						className="checkbox"
						checked={todo.completed}
						onChange={handleToggle}
					/>
				</div>
			</td>
			<td>
				<p
					className={clsx('todo__text', {
						['completed']: todo.completed,
					})}
				>
					{todo.text}
				</p>
			</td>
			<td>
				<div className="todo__wrapper">
					<button
						className="todo__btn"
						onClick={filter !== 'deleted' ? handleArchive : handleDelete}
					>
						<MdClose size="24" />
					</button>
				</div>
			</td>
		</>
	);
};
