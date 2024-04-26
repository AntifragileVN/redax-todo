import { useSelector, useDispatch } from 'react-redux';
import { filtersStatus } from 'src/redux/constants';
import { setFilterStatus } from 'src/redux/filterSlice';
import { selectFilterStatus } from 'src/redux/selectors';
import { FilterStatusType } from 'src/types/shared';
import css from './StatusFilter.module.css';
import { Button } from '../Button/Button';

export const StatusFilter = () => {
	const dispatch = useDispatch();

	const filter = useSelector(selectFilterStatus); //string

	const handleFilterChange = (filter: FilterStatusType) =>
		dispatch(setFilterStatus(filter));

	return (
		<div className={css.wrapper}>
			<Button
				selected={filter === filtersStatus.all}
				onClick={() => handleFilterChange(filtersStatus.all)}
			>
				All
			</Button>
			<Button
				selected={filter === filtersStatus.active}
				onClick={() => handleFilterChange(filtersStatus.active)}
			>
				Active
			</Button>
			<Button
				selected={filter === filtersStatus.completed}
				onClick={() => handleFilterChange(filtersStatus.completed)}
			>
				Completed
			</Button>
			<Button
				selected={filter === filtersStatus.completed}
				onClick={() => handleFilterChange(filtersStatus.deleted)}
			>
				Deleted
			</Button>
		</div>
	);
};
