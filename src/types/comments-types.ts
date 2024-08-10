type userType = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type commentsType = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: userType;
}
