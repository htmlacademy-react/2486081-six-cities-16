import {Offer} from '../../types/offers-types';
import {MouseEvent} from 'react';

export type PlaceCardProps = {
  offers: Offer;
  className: string;
  handlerEnter?: (evt: MouseEvent<HTMLLIElement>) => void;
  handlerLeave?: (evt: MouseEvent<HTMLLIElement>) => void;
  handlerClick?: (evt: MouseEvent<HTMLLIElement>) => void;
}
