export interface Song {
  id: number;
  name: string;
  duration: number;
  url: string;
  createdAt: Date;
  artist?: string;
}
