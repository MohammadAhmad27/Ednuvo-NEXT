import { FeaturedFreelancer, ProfileData } from "@/interfaces/Service-Provider-Dashboard";

export const profileData: ProfileData[] = [
    {
      id: 1,
      img: "/service-provider-dashboard/response-rate.svg",
      label: "Response Rate",
      value: 95,
    },
    {
      id: 2,
      img: "/service-provider-dashboard/total-jobs.svg",
      label: "Total Jobs",
      value: 10,
    },
    {
      id: 3,
      img: "/service-provider-dashboard/completed-jobs.svg",
      label: "Completed Jobs",
      value: 8,
    },
    {
      id: 4,
      img: "/service-provider-dashboard/ongoing-jobs.svg",
      label: "On Going Jobs",
      value: 2,
    },
  ];
  
  export const featuredFreelancer: FeaturedFreelancer[] = [
    {
      id: 1,
      icon: "/service-provider-dashboard/thunder.svg",
      label: "Highly responsive",
    },
    {
      id: 2,
      icon: "/service-provider-dashboard/stopwatch.svg",
      label: "Offers hourly rates",
    },
  ];
  
  export const featuredFreelancerData: FeaturedFreelancer[] = [
    {
      id: 1,
      icon: "/service-provider-dashboard/heart.svg",
      label: "Save",
    },
    {
      id: 2,
      icon: "/service-provider-dashboard/share.svg",
      label: "Share",
    },
  ];