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

export interface UserCard {
  id: number;
  bgImg: string;
  heartImg: string;
  profileImg: string;
  status: "online" | "offline";
  name: string;
  desc: string;
  starImg: string;
  rating: number;
  reviews: number;
  startingFrom: string;
  value: number;
}

export interface JobDetailsCard {
  id: number;
  title: string;
  price: string;
  value: number;
  duration: string;
  days: number;
  orderStarted: string;
  date: string;
  provider: string;
  name: string;
  status: "Pending" | "Ongoing" | "Completed" | "Cancelled";
  view: string;
}

export interface ProfileData {
  id: number;
  img: string;
  label: string;
  value: number;
}

export interface FeaturedFreelancer {
  id: number;
  icon: string;
  label: string;
}
