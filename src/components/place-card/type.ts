import {Offer} from '../../types/data';
import {MouseEvent} from 'react';

export type PlaceCardProps = {
  offers: Offer;
  className: string;
  onCardEnter?: (evt: MouseEvent<HTMLLIElement>) => void;
  onCardLeave?: (evt: MouseEvent<HTMLLIElement>) => void;
}
