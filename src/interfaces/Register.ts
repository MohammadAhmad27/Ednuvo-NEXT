export interface Bullet {
  id: number;
  desc: string;
}

export interface RegisterCard {
  id: number;
  coverImg: string;
  title: string;
  bullets: Bullet[];
}