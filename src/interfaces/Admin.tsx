export interface UserRequestCard {
  image: string;
  name: string;
  icon: string;
  location: string;
  category: string;
  testScore: number;
  desc: string;
}

export interface ServiceProviders {
  name: string;
  image: string;
  location: string;
  serviceCategory: string;
  earnings: number;
  totalJobsCompleted: number;
  status: "Active" | "Suspended";
}

export interface ServiceRequesters {
  name: string;
  image: string;
  location: string;
  totalJobsPosted: number;
  completedJobs: number;
  pendingRequests: number;
  spending: number;
  status: "Active" | "Suspended";
}

export interface PendingUsers {
  name: string;
  image: string;
  serviceCategory: string;
  testScore: number;
  testReviewStatus: "Reviewed" | "Not Reviewed";
  profileCompletion: number;
  dateOfSignup: string;
}
