import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
	selected: boolean;
	children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ selected = false, children, ...otherProps }: ButtonProps) => {
	return <button {...otherProps}>{children}</button>;
};
