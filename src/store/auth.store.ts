import { create } from 'zustand';

interface AuthState {
	isAuthenticated: boolean;
	accessToken: string | null;
	account: {
		username: string;
		email: string;
		roles: string[];
	} | null;
	// Actions
	setAuthenticated: (status: boolean) => void;
	setAccessToken: (token: string | null) => void;
	setAccount: (account: AuthState['account']) => void;
	logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
	isAuthenticated: false,
	accessToken: null,
	account: null,

	setAuthenticated: (status) => set({ isAuthenticated: status }),
	setAccessToken: (token) => set({ accessToken: token }),
	setAccount: (account) => set({ account }),
	logout: () =>
		set({
			isAuthenticated: false,
			accessToken: null,
			account: null,
		}),
}));
