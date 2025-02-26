import { useAuthStore } from '../../store/auth.store';

export const Dashboard = () => {
	const account = useAuthStore((state) => state.account);

	return (
		<div className="min-h-screen bg-gray-100">
			<main className="py-10">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

					<div className="mt-4">
						<div className="bg-white shadow rounded-lg p-6">
							<h2 className="text-lg font-medium text-gray-900">
								Welcome{account?.username ? `, ${account.username}` : ''}!
							</h2>
							<p className="mt-1 text-sm text-gray-500">
								This is your dashboard. You can view and manage your account here.
							</p>
						</div>
					</div>

					<div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{/* Example dashboard cards */}
						<div className="bg-white overflow-hidden shadow rounded-lg">
							<div className="p-5">
								<div className="flex items-center">
									<div className="flex-shrink-0">{/* Add an icon here */}</div>
									<div className="ml-5 w-0 flex-1">
										<dl>
											<dt className="text-sm font-medium text-gray-500 truncate">Total Projects</dt>
											<dd className="text-lg font-medium text-gray-900">12</dd>
										</dl>
									</div>
								</div>
							</div>
						</div>

						<div className="bg-white overflow-hidden shadow rounded-lg">
							<div className="p-5">
								<div className="flex items-center">
									<div className="flex-shrink-0">{/* Add an icon here */}</div>
									<div className="ml-5 w-0 flex-1">
										<dl>
											<dt className="text-sm font-medium text-gray-500 truncate">Active Tasks</dt>
											<dd className="text-lg font-medium text-gray-900">5</dd>
										</dl>
									</div>
								</div>
							</div>
						</div>

						<div className="bg-white overflow-hidden shadow rounded-lg">
							<div className="p-5">
								<div className="flex items-center">
									<div className="flex-shrink-0">{/* Add an icon here */}</div>
									<div className="ml-5 w-0 flex-1">
										<dl>
											<dt className="text-sm font-medium text-gray-500 truncate">Team Members</dt>
											<dd className="text-lg font-medium text-gray-900">8</dd>
										</dl>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};
