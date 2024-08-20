import {Offers} from './types/offers-types';
export type offersByCityType = {
  [key: string]: Offers;
}

export const getIndex = (items: string[], element: string): number => [...items].reverse().lastIndexOf(element) + 1;

export const getCountStars = (rating: number): number => rating * 100 / 5;

export const getFavoriteOffers = (offers: Offers):Offers => {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  return favoriteOffers;
};

export const getOffersByCity = (offers: Offers) => {
  const offersByCity: offersByCityType = {};
  for (const offer of offers) {
    if (!offersByCity[offer.city.name]) {
      offersByCity[offer.city.name] = [];
    }
    offersByCity[offer.city.name].push(offer);
  }
  return offersByCity;
};
