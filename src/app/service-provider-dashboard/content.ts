import { JobRequestCard } from "@/interfaces/Service-Provider-Dashboard";
import {
  AnalyticsCard,
  MenuSection,
} from "@/interfaces/Service-Requester-Dashboard";

export const providerMenuLinks: MenuSection[] = [
  {
    id: 1,
    title: "General",
    links: [
      {
        id: 1,
        icon: "/service-requester-dashboard/dashboard.svg",
        icon2: "/service-requester-dashboard/dashboard2.svg",
        label: "Dashboard",
        url: "?view=dashboard",
      },
      {
        id: 2,
        icon: "/service-requester-dashboard/jobs.svg",
        icon2: "/service-requester-dashboard/jobs2.svg",
        label: "Orders",
        url: "?view=orders",
      },
      {
        id: 3,
        icon: "/service-requester-dashboard/disputes.svg",
        icon2: "/service-requester-dashboard/disputes2.svg",
        label: "Disputes",
        url: "?view=disputes",
      },
      {
        id: 4,
        icon: "/service-requester-dashboard/messages.svg",
        icon2: "/service-requester-dashboard/messages2.svg",
        label: "Messages",
        url: "?view=messages",
      },
      {
        id: 5,
        icon: "/service-provider-dashboard/earnings.svg",
        icon2: "/service-provider-dashboard/earnings2.svg",
        label: "Earnings",
        url: "?view=earnings",
      },
    ],
  },
  {
    id: 2,
    title: "Tools",
    links: [
      {
        id: 1,
        icon: "/service-requester-dashboard/payment.svg",
        icon2: "/service-requester-dashboard/payment2.svg",
        label: "Billing",
        url: "#",
      },
      {
        id: 2,
        icon: "/service-requester-dashboard/setting.svg",
        icon2: "/service-requester-dashboard/setting2.svg",
        label: "Settings",
        url: "?view=settings",
      },
      {
        id: 3,
        icon: "/service-requester-dashboard/faq.svg",
        icon2: "/service-requester-dashboard/faq2.svg",
        label: "FAQs",
        url: "#",
      },
      {
        id: 4,
        icon: "/service-requester-dashboard/logout.svg",
        icon2: "/service-requester-dashboard/logout2.svg",
        label: "Logout",
        url: "#",
      },
    ],
  },
];

export const providerAnalyticsCardData: AnalyticsCard[] = [
  {
    id: 1,
    label: "Completed Orders",
    value: 20,
  },
  {
    id: 2,
    label: "Average Selling Price",
    value: 150,
    unit: "SAR",
  },
  {
    id: 3,
    label: "Order Completion Rate",
    value: 99,
    unit: "%",
  },
  {
    id: 4,
    label: "Earning to Date",
    value: 500,
    unit: "SAR",
  },
];

export const dataFilters = [
  {
    id: 1,
    label: "Last Year",
  },
  {
    id: 2,
    label: "This Year",
  },
  {
    id: 3,
    label: "Last 3 Months",
  },
  {
    id: 4,
    label: "Last 6 Months",
  },
];

export const jobRequestCardData: JobRequestCard[] = [
  {
    value: 20,
    time: "6.32",
    title: "Plumbing Repair for Home",
    budget: "150 SAR",
    address: "Villa 23, Street 12, Al Muruj District, Riyadh",
    image: "/service-requester-dashboard/profile.svg",
    name: "Ahmad Khan",
    rating: 4.9,
    reviews: 20,
  },
  {
    value: 20,
    time: "3.15",
    title: "Air Conditioner Maintenance",
    budget: "200 SAR",
    address: "Building 5, King Fahd Road, Jeddah",
    image: "/service-requester-dashboard/profile.svg",
    name: "Sami Ullah",
    rating: 4.7,
    reviews: 35,
  },
  {
    value: 40,
    time: "8.45",
    title: "Kitchen Sink Installation",
    budget: "180 SAR",
    address: "Flat 8B, Corniche Area, Dammam",
    image: "/service-requester-dashboard/profile.svg",
    name: "Fatima Noor",
    rating: 5.0,
    reviews: 42,
  },
];
