export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
}
