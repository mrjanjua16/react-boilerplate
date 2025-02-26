import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { PrivateRoute } from './guards/PrivateRoute';
import { privateRoutes } from './private.routes';
import { publicRoutes } from './public.routes';

const router = createBrowserRouter([
	...publicRoutes,
	{
		element: <PrivateRoute />,
		children: privateRoutes,
	},
]);

export const AppRouter = () => {
	return (
		<div className="flex justify-center items-center">
			<RouterProvider router={router} />
		</div>
	);
};
