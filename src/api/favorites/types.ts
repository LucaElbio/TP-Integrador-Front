export interface Favorite {
  id?: number;
  userId?: number;
  movieId?: number;
  movie?: {
    title: string;
    duration: number;
    category: {
      name: string;
    };
  };
}
