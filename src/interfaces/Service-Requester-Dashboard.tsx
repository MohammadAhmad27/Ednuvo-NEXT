interface MenuLinkItem {
  id: number;
  icon: string;
  icon2: string;
  label: string;
  url: string;
}
export interface MenuSection {
  id: number;
  title: string;
  links: MenuLinkItem[];
}

export interface Skill {
  id: number;
  label: string;
}

export interface ExpertsCard {
  id: number;
  profileImg: string;
  name: string;
  occpation: string;
  starImg: string;
  rating: number;
  reviews: number;
  desc: string;
  budgetImg: string;
  budget: string;
  budgetValue: number;
  locationImg: string;
  location: string;
  locationVenue: string;
  skills: Skill[];
  button: string;
}

export interface AnalyticsCard {
  id: number;
  label: string;
  value: number;
  unit?: string;
}
