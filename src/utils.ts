import { OffersTypes } from './types/offers-types';
export type offersByCityType = {
  [key: string]: OffersTypes[];
}

export const getIndex = (items: string[], element: string): number => [...items].reverse().lastIndexOf(element) + 1;

export const getCountStars = (rating: number): number => rating * 100 / 5;

export const getOffersByCity = (offers: OffersTypes[]) => {
  const favotiteOffers: OffersTypes[] = offers.filter((favotiteOff) => favotiteOff.isFavorite);
  const offersByCity: offersByCityType = {};
  for (const offer of favotiteOffers) {
    if (!offersByCity[offer.city.name]) {
      offersByCity[offer.city.name] = [];
    }
    offersByCity[offer.city.name].push(offer);
  }
  return offersByCity;
};
