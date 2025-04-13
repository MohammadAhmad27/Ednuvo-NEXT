import { MenuSection } from "@/interfaces/Service-Requester-Dashboard";

export const menuLinks: MenuSection[] = [
  {
    id: 1,
    title: "General",
    links: [
      {
        id: 1,
        icon: "/service-requester-dashboard/dashboard.svg",
        icon2: "/service-requester-dashboard/dashboard2.svg",
        label: "Dashboard",
        url: "#",
      },
      {
        id: 2,
        icon: "/service-requester-dashboard/jobs.svg",
        icon2: "/service-requester-dashboard/jobs2.svg",
        label: "Jobs",
        url: "#",
      },
      {
        id: 3,
        icon: "/service-requester-dashboard/disputes.svg",
        icon2: "/service-requester-dashboard/disputes2.svg",
        label: "Disputes",
        url: "#",
      },
      {
        id: 4,
        icon: "/service-requester-dashboard/messages.svg",
        icon2: "/service-requester-dashboard/messages2.svg",
        label: "Messages",
        url: "#",
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
        label: "Payment",
        url: "#",
      },
      {
        id: 2,
        icon: "/service-requester-dashboard/setting.svg",
        icon2: "/service-requester-dashboard/setting2.svg",
        label: "Setting",
        url: "#",
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
