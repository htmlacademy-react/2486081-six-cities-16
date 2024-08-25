import {Offers} from '../../types/data';

export type ListOffersProps = {
  offers: Offers;
  classNamePlaceList: string;
  classNamePlace: string;
  onCardMouseEnter?: (itemIdCard: string | undefined) => void;
}
