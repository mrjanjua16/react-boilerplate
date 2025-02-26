import { useState } from 'react';

import { ErrorResponse } from '../types';

interface UseApiOptions<T> {
	onSuccess?: (data: T) => void;
	onError?: (error: ErrorResponse) => void;
}

interface UseApiState<T> {
	data: T | null;
	error: ErrorResponse | null;
	isLoading: boolean;
}

export function useApi<T>(apiCall: () => Promise<T>, options: UseApiOptions<T> = {}) {
	const [state, setState] = useState<UseApiState<T>>({
		data: null,
		error: null,
		isLoading: false,
	});

	const execute = async () => {
		setState((prev) => ({ ...prev, isLoading: true }));
		try {
			const data = await apiCall();
			setState({ data, error: null, isLoading: false });
			options.onSuccess?.(data);
		} catch (error) {
			const errorResponse = error as ErrorResponse;
			setState({ data: null, error: errorResponse, isLoading: false });
			options.onError?.(errorResponse);
		}
	};

	return {
		...state,
		execute,
	};
}
