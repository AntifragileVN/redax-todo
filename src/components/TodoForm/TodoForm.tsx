import { useDispatch } from 'react-redux';
import { addTodo } from 'src/redux/todoSlice';
import { Button } from 'src/components/Button/Button';
import { SyntheticEvent, useState } from 'react';
import './TodoForm.scss';

export const TodoForm = () => {
	const [text, setText] = useState<string>('');
	const dispatch = useDispatch();

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		if (text.trim().length > 0) {
			dispatch(addTodo(text));
			setText('');
		}
	};

	return (
		<form className="form" onSubmit={handleSubmit} autoComplete="off">
			<input
				onChange={(e) => setText(e.target.value)}
				value={text}
				className="field"
				placeholder="Enter your task..."
			/>
			<Button type="submit">Add task</Button>
		</form>
	);
};
