import { DateFormat, MAX_LENGTH_COMMENT, MIN_LENGTH_COMMENT } from './conts';
import {Comment, Offers} from './types/data';

type OffersByCityType = {
  [key: string]: Offers;
}
export const getOffersByCity = (offers: Offers) => {
  const offersByCity: OffersByCityType = {};
  for (const offer of offers) {
    if (!offersByCity[offer.city.name]) {
      offersByCity[offer.city.name] = [];
    }
    offersByCity[offer.city.name].push(offer);
  }
  return offersByCity;
};

export const getIndex = (items: string[], element: string): number => [...items].reverse().lastIndexOf(element) + 1;

export const getCountStars = (rating: number): number => Math.round(rating) * 100 / 5;

export const getDateForman = (data:string) => {
  const date = data.slice(DateFormat.Start, DateFormat.End);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const now = new Date(date);

  return `${months[now.getMonth()]} ${now.getFullYear()}`;
};

export const sordCommentsByDate = (dateA: Comment, dateB: Comment): number => {
  const date = Number(dateA.date < dateB.date) - Number(dateA.date > dateB.date);
  return date;
};

export const getFirstLetterUpperCase = (string: string): string => string.charAt(0).toUpperCase() + string.slice(1);

export const validateText = (text: string): boolean => text.length < MIN_LENGTH_COMMENT || text.length > MAX_LENGTH_COMMENT;

export const validateRating = (rating: number): boolean => rating === 0;
