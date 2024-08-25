import {Comment, Offers} from './types/data';
type offersByCityType = {
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

export const getDateForman = (data:string) => {
  const date = data.slice(0,10);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const now = new Date(date);

  return `${months[now.getMonth()]} ${now.getFullYear()}`;
};

export const sordCommentsByDate = (dateA: Comment, dateB: Comment): number => {
  const date = Number(dateA.date < dateB.date) - Number(dateA.date > dateB.date);
  return date;
};
