import { RiFontSize } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';
import { FaCheckDouble } from 'react-icons/fa6';
import './TableHead.scss';
export const TableHead = () => {
	return (
		<thead className="th">
			<tr>
				<th className="small">
					<div className="th__wrapper">
						<FaCheckDouble className="th__icon" />
						Done
					</div>
				</th>
				<th>
					<div className="th__wrapper">
						<RiFontSize />
						Task name
					</div>
				</th>
				<th className="small">
					<div className="th__wrapper">
						<MdDelete />
						Delete
					</div>
				</th>
			</tr>
		</thead>
	);
};
