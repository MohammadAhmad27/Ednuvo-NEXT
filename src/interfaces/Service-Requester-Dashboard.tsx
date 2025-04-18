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

export interface JobCard {
  id: number;
  title: string;
  price: string;
  jobPrice: number;
  duration: string;
  jobDuration: number;
  orderStarted: string;
  jobStartedDate: string;
  provider: string;
  jobProviderName: string;
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

export interface SkillsList {
  id: number;
  name: string;
}

export interface PackageCard {
  id: number;
  bgImg: string;
  heartImg: string;
  desc: string;
  starImg: string;
  rating: number;
  reviews: number;
  startingFrom: string;
  value: number;
  label: string;
}
export interface ReviewsCard {
  id: number;
  img: string;
  name: string;
  location: string;
  starImg: string[];
  rating: number;
  time: string;
  comment: string;
}

export interface JobServiceDescription {
  id: number;
  icon: string;
  desc: string;
}

export interface JobRequirements {
  id: number;
  icon: string;
  label: string;
  desc: string;
}

export interface JobSupport {
  id: number;
  icon: string;
  label: string;
  desc: string;
  href: string;
  separator?: string
}
