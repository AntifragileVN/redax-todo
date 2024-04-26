import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import './Button.scss';
type ButtonProps = {
	selected?: boolean;
	children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ selected = false, children, ...otherProps }: ButtonProps) => {
	return (
		<button
			className={clsx('btn', {
				['isSelected']: selected,
			})}
			{...otherProps}
		>
			{children}
		</button>
	);
};
