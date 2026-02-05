export interface User {
  username: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export interface LoginCredentials {
  username: string;
  password: string;
}
