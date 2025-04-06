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

export interface StaticContentCard {
  id: number;
  icon: string;
  title: string;
  desc: string;
}

export interface StaticImages {
  id: number;
  icon: string;
  name: string;
  desc: string;
}

export interface StaticTestimonials {
  id: number;
  icon: string;
  desc: string;
}

export interface ServiceProvidersCard {
  id: number;
  icon: string;
  name: string;
  profession: string;
}

export interface IndividualServicesItem {
  id: number;
  name: string;
}

export interface IndividualServicesData {
  id: number;
  key: string;
  value: string | number;
  suffix?: string;
}
