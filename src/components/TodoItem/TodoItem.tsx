import { useDispatch, useSelector } from 'react-redux';
import { archiveTodo, deleteTodo, editTodo, toggleCompletion } from 'src/redux/todoSlice';
import { selectFilterStatus } from 'src/redux/selectors';
import clsx from 'clsx';

import { MdEdit } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
import { TodoType } from 'src/types/shared';
import './TodoItem.scss';
import { notifySuccess } from 'src/services/notify';
import { useEffect, useRef, useState } from 'react';

type TodoProps = {
	todo: TodoType;
};

export const TodoItem = ({ todo }: TodoProps) => {
	const dispatch = useDispatch();
	const filter = useSelector(selectFilterStatus);
	const [isEditMode, setIsEditMode] = useState<boolean>(false);
	const [text, setText] = useState<string>(todo.text);
	const todoInputRef = useRef<HTMLInputElement>(null);

	const onEditBtnClick = () => {
		setIsEditMode((prev) => !prev);
	};

	useEffect(() => {
		if (isEditMode) {
			todoInputRef.current?.focus();
		}
	}, [isEditMode]);

	const handleEdit = () => {
		dispatch(
			editTodo({
				id: todo.id,
				text: text,
			})
		);
		notifySuccess('Deleted todo succesful');
		setIsEditMode(false);
	};

	const handleDelete = () => {
		notifySuccess('Deleted todo succesful');
		dispatch(deleteTodo(todo.id));
	};

	const handleArchive = () => {
		notifySuccess('Deleted todo succesful');
		dispatch(archiveTodo(todo.id));
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
				{isEditMode ? (
					<input
						type="text"
						value={text}
						ref={todoInputRef}
						className="todo__edit-input"
						onChange={(e) => setText(e.target.value)}
					/>
				) : (
					<p
						className={clsx('todo__text', {
							['completed']: todo.completed,
						})}
					>
						{todo.text}
					</p>
				)}
			</td>
			<td>
				<div className="todo__wrapper">
					<button
						className="todo__btn delete"
						onClick={filter !== 'deleted' ? handleArchive : handleDelete}
						aria-label="Delete todo"
					>
						<MdClose size="24" />
					</button>
					{isEditMode ? (
						<button
							className="todo__btn confirm"
							onClick={handleEdit}
							aria-label="Confirm edit todo"
						>
							<FaCheck size="18" />
						</button>
					) : (
						<button
							className="todo__btn edit"
							onClick={onEditBtnClick}
							aria-label="Edit todo"
						>
							<MdEdit size="24" />
						</button>
					)}
				</div>
			</td>
		</>
	);
};
