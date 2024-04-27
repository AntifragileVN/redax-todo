import { toast } from 'react-toastify';

export const notifyError = (text = 'Try again') => {
	return toast.error(text, {
		position: 'bottom-center',
	});
};

export const notifySuccess = (text = 'Success') => {
	return toast.success(text, {
		position: 'bottom-center',
	});
};
