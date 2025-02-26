import { Navigate, Outlet } from 'react-router-dom';

import { useAuthStore } from '../../store/auth.store';

export const PrivateRoute = () => {
	const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

	return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};
