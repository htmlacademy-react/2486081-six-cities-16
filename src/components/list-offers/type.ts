import {Offers} from '../../types/offers-types';

export type ListOffersProps = {
  offers: Offers;
  classNamePlaceList: string;
  classNamePlace: string;
  onCardMouseEnter?: (itemIdCard: string | undefined) => void;
}
