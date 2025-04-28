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
  id: number;
  name: string;
  image: string;
  location: string;
  serviceCategory: string;
  earnings: number;
  totalJobsCompleted: number;
  status: "Active" | "Suspended";
}

export interface ServiceRequesters {
  id: number;
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
  id: number;
  name: string;
  image: string;
  serviceCategory: string;
  testScore: number;
  testReviewStatus: "Reviewed" | "Not Reviewed";
  profileCompletion: number;
  dateOfSignup: string;
}

export interface TestQuestions {
  id: number;
  question: string;
  serviceCategory: string;
  options: {
    label: string;
    value: string;
  }[];
  correctAnswer: string;
}

export interface Category {
  id: number;
  category: string;
  subcategory: {
    id: number;
    name: string;
  }[];
}
