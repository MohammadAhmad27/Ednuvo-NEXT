import { AuthButton, NavigationItem, StatsData } from "@/interfaces";

export const navigation: NavigationItem[] = [
  {
    id: 1,
    label: "Home",
    href: "#",
  },
  {
    id: 2,
    label: "About Us",
    href: "#",
  },
  {
    id: 3,
    label: "Post A Job",
    href: "#",
  },
  {
    id: 4,
    label: "Find Service Providers",
    href: "#",
  },
  {
    id: 5,
    label: "Contact Us",
    href: "#",
  },
];

export const authButtons: AuthButton[] = [
  {
    id: 1,
    label: "Log In",
    href: "#",
  },
  {
    id: 2,
    label: "Sign Up",
    href: "#",
  },
];

export const statsData: StatsData[] = [
  {
    id: 1,
    value: 100,
    suffix: "+",
    label: "Total Providers",
  },
  {
    id: 2,
    value: 200,
    suffix: "+",
    label: "Job Posted",
  },
  {
    id: 3,
    value: 200,
    suffix: "+",
    label: "Project Completed",
  },
  {
    id: 4,
    value: 100,
    suffix: "+",
    label: "Positive Reviews",
  },
];

