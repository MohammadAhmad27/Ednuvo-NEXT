export interface NavigationItem {
  id: number;
  label: string;
  href: string;
}

export interface AuthButton {
  id: number;
  label: string;
  href: string;
}

export interface StatsData {
  id: number;
  value: number;
  suffix: string;
  label: string;
}

export interface ServiceButton {
  id: number;
  label: string;
}

export interface ServiceCard {
  id: number;
  coverImg: string;
  title: string;
  description: string;
  starImg: string;
  rating: number;
  reviews: number;
  userImg: string;
  username: string;
  startingAt: string;
  price: number;
  currency: string;
}
