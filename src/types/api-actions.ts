export type AuthData = {
  email: string;
  password: string;
};

export type UserData = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
};

export type CommentData = {
  id: string;
  comment: string;
  rating: number;
}

export type FavoriteData = {
  id: string;
  status: number;
}
