import {Offer} from '../../types/offers-types';

export const sortLowToHigh = (cardA: Offer, cardB: Offer):number => cardA.price - cardB.price;
export const sortTopRated = (cardA: Offer, cardB: Offer):number => cardB.rating - cardA.rating;
