export interface JobRequestCard {
  value: number;
  time: string;
  title: string;
  budget: string;
  address: string;
  image: string;
  name: string;
  rating: number;
  reviews: number;
}

export interface OrderCard {
  id: number;
  image: string;
  title: string;
  requester: string;
  orderRequesterName: string;
  price: string;
  orderPrice: number;
  duration: string;
  orderDuration: number;
  orderStarted: string;
  orderStartedDate: string;
  status: "Ongoing" | "Completed" | "Cancelled";
  view: string;
}
