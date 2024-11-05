export interface User {
  id: string;
  name: string;
}

export interface UserContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
}
