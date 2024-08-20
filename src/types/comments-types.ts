type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type Comment = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: User;
};

export type Comments = Comment[];
