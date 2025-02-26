import { RouteObject } from 'react-router-dom';

import { Dashboard } from '../pages/dashboard/Dashboard';
import { Profile } from '../pages/dashboard/Profile';

export const privateRoutes: RouteObject[] = [
	{
		path: '/',
		element: <Dashboard />,
	},
	{
		path: '/profile',
		element: <Profile />,
	},
];
