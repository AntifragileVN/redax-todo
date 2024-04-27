import { useSelector } from 'react-redux';
import { selectTaskCount } from 'src/redux/selectors';
import './TaskCounter.scss';

export const TaskCounter = () => {
	const count = useSelector(selectTaskCount);

	return (
		<div>
			<p className="counter_text">Active: {count.active}</p>
			<p className="counter_text">Completed: {count.completed}</p>
			<p className="counter_text">Deleted: {count.archived}</p>
		</div>
	);
};
