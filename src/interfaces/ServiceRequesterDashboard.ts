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
  value?: number;
  unit?: string;
  count?: number;
  subCards?: {
    label: string;
    value: number;
  }[];
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
  status: "Ongoing" | "Completed" | "Cancelled";
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
  bgImg: string[];
  heartImg: string;
  desc: string;
  starImg: string;
  rating: number;
  reviews: number;
  startingFrom: string;
  value: string;
  label: string;
  title?: string;
  category?: string;
  pricingMode?: string;
  requirements?: string;
}

export interface PortfolioCard {
  id: number;
  mainImg: string[];
  startTime: string;
  endTime: string;
  projectTitle: string;
  projectDesc: string;
  skills: string[];
  projectCost: number;
  projectDuration: number;
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
  separator?: string;
}

export interface RequesterDisputes {
  id: number;
  refNumber: string;
  employerName: string;
  date: string;
  amount: number;
  currency: string;
  status: string;
}

export interface FAQ {
  id: number;
  title: string;
  desc: string;
}

export interface ReviewCategory {
  id: string;
  title: string;
  question: string;
  rating: number;
}