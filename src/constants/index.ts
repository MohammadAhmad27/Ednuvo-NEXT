import {
  AuthButton,
  BottomLinks,
  FooterSection,
  NavigationItem,
  SocialIcons,
} from "@/interfaces";

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

export const footerData: FooterSection[] = [
  {
    id: 1,
    title: "CATEGORIES",
    items: [
      "Plumbing",
      "Electrical Services",
      "Cleaning",
      "Home Repairs",
      "AC Maintenance",
      "Painting",
    ],
  },
  {
    id: 2,
    title: "SOLUTIONS",
    items: ["On-Demand Services", "Verified Professionals"],
  },
  {
    id: 3,
    title: "SUPPORT",
    items: [
      "Contact Us",
      "Developers",
      "Documentation",
      "Integrations",
      "Reports",
      "Webinar",
    ],
  },
  {
    id: 4,
    title: "COMPANY",
    items: ["About", "Press", "Events", "Careers"],
  },
];

export const bottomLinks: BottomLinks[] = [
  { id: 1, label: "Terms", href: "#" },
  { id: 2, label: "Privacy", href: "#" },
  { id: 3, label: "Contact", href: "#" },
];

export const socialIcons: SocialIcons[] = [
  { id: 1, icon: "/footer/youtube.svg", href: "#" },
  { id: 2, icon: "/footer/facebook.svg", href: "#" },
  { id: 3, icon: "/footer/twitter.svg", href: "#" },
  { id: 4, icon: "/footer/instagram.svg", href: "#" },
  { id: 5, icon: "/footer/linkedin.svg", href: "#" },
];
