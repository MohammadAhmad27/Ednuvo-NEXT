import {
  PendingUsers,
  ServiceProviders,
  ServiceRequesters,
  TestQuestions,
  UserRequestCard,
} from "@/interfaces/Admin";
import {
  AnalyticsCard,
  MenuSection,
} from "@/interfaces/ServiceRequesterDashboard";

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

export const requestesDataFilters = [
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
];

export const userRequestCardData: UserRequestCard[] = [
  {
    image: "/service-requester-dashboard/profile.svg",
    name: "Ahmad Khan",
    icon: "/service-provider-onboarding/location.svg",
    location: "Riyadh, Saudi Arabia",
    category: "Plumbing",
    testScore: 8.5,
    desc: "Ahmed Al-Faisal has successfully passed the qualification test and is applying as a Plumbing Service Provider.",
  },
  {
    image: "/service-requester-dashboard/profile.svg",
    name: "Ahmad Khan",
    icon: "/service-provider-onboarding/location.svg",
    location: "Riyadh, Saudi Arabia",
    category: "Plumbing",
    testScore: 8.5,
    desc: "Ahmed Al-Faisal has successfully passed the qualification test and is applying as a Plumbing Service Provider.",
  },
  {
    image: "/service-requester-dashboard/profile.svg",
    name: "Ahmad Khan",
    icon: "/service-provider-onboarding/location.svg",
    location: "Riyadh, Saudi Arabia",
    category: "Plumbing",
    testScore: 8.5,
    desc: "Ahmed Al-Faisal has successfully passed the qualification test and is applying as a Plumbing Service Provider.",
  },
];

export const searchOptions = ["Name", "Category", "Location"];

export const serviceProvidersData: ServiceProviders[] = [
  {
    id: 1,
    name: "Khalid Saeed",
    image: "/service-requester-dashboard/profile.svg",
    location: "Riyadh",
    serviceCategory: "Plumber",
    earnings: 113,
    totalJobsCompleted: 2,
    status: "Active",
  },
  {
    id: 2,
    name: "Faris Al-Tamimi",
    image: "/service-requester-dashboard/profile.svg",
    location: "Jeddah",
    serviceCategory: "Electrician",
    earnings: 324,
    totalJobsCompleted: 3,
    status: "Suspended",
  },
  {
    id: 3,
    name: "Nadir Al-Shehri",
    image: "/service-requester-dashboard/profile.svg",
    location: "Dammam",
    serviceCategory: "Cleaner",
    earnings: 214,
    totalJobsCompleted: 9,
    status: "Suspended",
  },
  {
    id: 4,
    name: "Samir Mansour",
    image: "/service-requester-dashboard/profile.svg",
    location: "Riyadh",
    serviceCategory: "Painter",
    earnings: 121,
    totalJobsCompleted: 11,
    status: "Active",
  },
  {
    id: 5,
    name: "Yasir Al-Bakri",
    image: "/service-requester-dashboard/profile.svg",
    location: "Jeddah",
    serviceCategory: "Cleaner",
    earnings: 140,
    totalJobsCompleted: 7,
    status: "Active",
  },
];

export const serviceRequestersData: ServiceRequesters[] = [
  {
    id: 1,
    name: "Khalid Saeed",
    image: "/service-requester-dashboard/profile.svg",
    location: "Riyadh",
    totalJobsPosted: 7,
    completedJobs: 5,
    pendingRequests: 3,
    spending: 113,
    status: "Active",
  },
  {
    id: 2,
    name: "Faris Al-Tamimi",
    image: "/service-requester-dashboard/profile.svg",
    location: "Jeddah",
    totalJobsPosted: 11,
    completedJobs: 8,
    pendingRequests: 3,
    spending: 324,
    status: "Suspended",
  },
  {
    id: 3,
    name: "Nadir Al-Shehri",
    image: "/service-requester-dashboard/profile.svg",
    location: "Dammam",
    totalJobsPosted: 21,
    completedJobs: 20,
    pendingRequests: 1,
    spending: 214,
    status: "Suspended",
  },
  {
    id: 4,
    name: "Samir Mansour",
    image: "/service-requester-dashboard/profile.svg",
    location: "Riyadh",
    totalJobsPosted: 6,
    completedJobs: 4,
    pendingRequests: 2,
    spending: 121,
    status: "Active",
  },
  {
    id: 5,
    name: "Yasir Al-Bakri",
    image: "/service-requester-dashboard/profile.svg",
    location: "Jeddah",
    totalJobsPosted: 14,
    completedJobs: 8,
    pendingRequests: 6,
    spending: 140,
    status: "Active",
  },
];

export const pendingUsersData: PendingUsers[] = [
  {
    id: 1,
    name: "Khalid Saeed",
    image: "/service-requester-dashboard/profile.svg",
    serviceCategory: "Plumber",
    testScore: 60,
    testReviewStatus: "Reviewed",
    profileCompletion: 60,
    dateOfSignup: "10 Feb, 2025",
  },
  {
    id: 2,
    name: "Faris Al-Tamimi",
    image: "/service-requester-dashboard/profile.svg",
    serviceCategory: "Electrician",
    testScore: 78,
    testReviewStatus: "Reviewed",
    profileCompletion: 80,
    dateOfSignup: "20 March, 2025",
  },
  {
    id: 3,
    name: "Nadir Al-Shehri",
    image: "/service-requester-dashboard/profile.svg",
    serviceCategory: "Cleaner",
    testScore: 89,
    testReviewStatus: "Reviewed",
    profileCompletion: 100,
    dateOfSignup: "03 Jan, 2025",
  },
  {
    id: 4,
    name: "Samir Mansour",
    image: "/service-requester-dashboard/profile.svg",
    serviceCategory: "Painter",
    testScore: 98,
    testReviewStatus: "Not Reviewed",
    profileCompletion: 50,
    dateOfSignup: "17 Feb, 2025",
  },
  {
    id: 5,
    name: "Yasir Al-Bakri",
    image: "/service-requester-dashboard/profile.svg",
    serviceCategory: "Cleaner",
    testScore: 75,
    testReviewStatus: "Not Reviewed",
    profileCompletion: 70,
    dateOfSignup: "12 March, 2025",
  },
];

export const testQuestionsOptions = ["Category"];

export const testQuestionsData: TestQuestions[] = [
  {
    id: 1,
    question: "What does a P-trap do in plumbing?",
    serviceCategory: "Plumber",
    options: [
      {
        label: "A)",
        value: "Increases pressure",
      },
      {
        label: "B)",
        value: "Stops bad smells",
      },
      {
        label: "C)",
        value: "Speeds up drainage",
      },
      {
        label: "D)",
        value: "Stores water",
      },
    ],
    correctAnswer: "B) Stops bad smells",
  },
  {
    id: 2,
    question: "Which tool is commonly used to tighten or loosen pipes?",
    serviceCategory: "Plumber",
    options: [
      {
        label: "A)",
        value: "Hammer",
      },
      {
        label: "B)",
        value: "Wrench",
      },
      {
        label: "C)",
        value: "Saw",
      },
      {
        label: "D)",
        value: "Pliers",
      },
    ],
    correctAnswer: "B) Wrench",
  },
  {
    id: 3,
    question: "What is the purpose of using a primer before painting?",
    serviceCategory: "Painter",
    options: [
      {
        label: "A)",
        value: "To add color to the paint",
      },
      {
        label: "B)",
        value: "To make the paint dry faster",
      },
      {
        label: "C)",
        value: "To help the paint adhere better and last longer",
      },
      {
        label: "D)",
        value: "To make the surface rough",
      },
    ],
    correctAnswer: "C) To help the paint adhere better and last longer",
  },
  {
    id: 4,
    question:
      "Which type of paint is best for painting outdoor surfaces because of its durability?",
    serviceCategory: "Painter",
    options: [
      {
        label: "A)",
        value: "Watercolor",
      },
      {
        label: "B)",
        value: "Acrylic",
      },
      {
        label: "C)",
        value: "Oil-based",
      },
      {
        label: "D)",
        value: "Latex",
      },
    ],
    correctAnswer: "C) Oil-based",
  },
  {
    id: 5,
    question: "What is the primary tool used to drive nails into wood?",
    serviceCategory: "Carpenter",
    options: [
      {
        label: "A)",
        value: "Saw",
      },
      {
        label: "B)",
        value: "Hammer",
      },
      {
        label: "C)",
        value: "Chisel",
      },
      {
        label: "D)",
        value: "Plane",
      },
    ],
    correctAnswer: "B) Hammer",
  },
  {
    id: 6,
    question: "Which type of saw is best for making curved cuts in wood?",
    serviceCategory: "Carpenter",
    options: [
      {
        label: "A)",
        value: "Handsaw",
      },
      {
        label: "B)",
        value: "Jigsaw",
      },
      {
        label: "C)",
        value: "Hacksaw",
      },
      {
        label: "D)",
        value: "Miter saw",
      },
    ],
    correctAnswer: "B) Jigsaw",
  },
  {
    id: 7,
    question: "What is the purpose of sandpaper in woodworking?",
    serviceCategory: "Carpenter",
    options: [
      {
        label: "A)",
        value: "To cut wood",
      },
      {
        label: "B)",
        value: "To smooth the surface",
      },
      {
        label: "C)",
        value: "To join two pieces of wood",
      },
      {
        label: "D)",
        value: "To measure wood",
      },
    ],
    correctAnswer: "B) To smooth the surface",
  },
];
