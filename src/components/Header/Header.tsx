import { NavLink } from 'react-router-dom';

export const Header = () => {
	return (
		<header>
			<nav>
				<NavLink to="/">All</NavLink>
				<NavLink to="/deleted">Deleted</NavLink>
			</nav>
		</header>
	);
};
