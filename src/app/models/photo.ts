export interface Photo {
  id: number;
  largeImageURL: string;
  user: string;
  tags: string;
}
export interface Tags<T> {
  tags: T[];
}
