import { NavLink } from 'react-router-dom';

export const Header = () => {
	return (
		<header>
			<div className="container">
				<nav>
					<NavLink to="/">All</NavLink>
				</nav>
			</div>
		</header>
	);
};
