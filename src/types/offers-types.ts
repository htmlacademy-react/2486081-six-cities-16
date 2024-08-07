type OffersCityLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type OffersCity = {
  name: string;
  location: OffersCityLocation;
}

type OffersLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type OffersHost = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type OffersTypes = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: OffersCity;
  location: OffersLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  description: string;
  bedrooms: number;
  goods: string[];
  host: OffersHost;
  images: string[];
  maxAdults: number;
}
