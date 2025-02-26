import { RouteObject } from 'react-router-dom';

import { Login } from '../pages/auth/Login';
import { Register } from '../pages/auth/Register';

export const publicRoutes: RouteObject[] = [
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/register',
		element: <Register />,
	},
];
