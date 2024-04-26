import { TaskCounter } from 'src/components/TaskCounter/TaskCounter';
import { StatusFilter } from 'src/components/StatusFilter/StatusFilter';
import './AppBar.scss';

export const AppBar = () => {
	return (
		<header className="wrapper">
			<section className="section">
				<h2 className="title">Tasks</h2>
				<TaskCounter />
			</section>
			<section className="section">
				<h2 className="title">Filter by status</h2>
				<StatusFilter />
			</section>
		</header>
	);
};
