export interface VerificationTestQuestion {
  id: number;
  text: string;
  options: {
    id: string;
    text: string;
  }[];
  answer: string;
}
