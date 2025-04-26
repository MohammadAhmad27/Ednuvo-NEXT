import { AnalyticsCard, MenuSection } from "@/interfaces/Service-Requester-Dashboard";

export const adminMenuLinks: MenuSection[] = [
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
        label: "Users",
        url: "?view=users",
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
        label: "Jobs",
        url: "?view=jobs",
      },
      {
        id: 5,
        icon: "/service-requester-dashboard/messages.svg",
        icon2: "/service-requester-dashboard/messages2.svg",
        label: "Category",
        url: "?view=category",
      },
      {
        id: 6,
        icon: "/admin/testquestions.svg",
        icon2: "/admin/testquestions2.svg",
        label: "Test Questions",
        url: "?view=testquestions",
      },
    ],
  },
  {
    id: 2,
    title: "Tools",
    links: [
      {
        id: 1,
        icon: "/service-requester-dashboard/setting.svg",
        icon2: "/service-requester-dashboard/setting2.svg",
        label: "Settings",
        url: "?view=settings",
      },
      {
        id: 2,
        icon: "/service-requester-dashboard/logout.svg",
        icon2: "/service-requester-dashboard/logout2.svg",
        label: "Logout",
        url: "#",
      },
    ],
  },
];

export const adminAnalyticsData: AnalyticsCard[] = [
  {
    id: 1,
    label: "Total Registered Users",
    count: 50,
    subCards: [
      { label: "Providers", value: 30 },
      { label: "Requesters", value: 20 },
    ],
  },
  {
    id: 2,
    label: "Pending Provider Approvals",
    value: 3,
  },
  {
    id: 3,
    label: "Total Completed Jobs",
    value: 30,
  },
  {
    id: 4,
    label: "Total Ongoing Jobs",
    value: 20,
  },
];

