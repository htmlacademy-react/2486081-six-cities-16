import {MouseEvent} from 'react';
import {OffersTypes} from '../../types/offers-types';
import PlaceCard from '../place-card/place-card';

type ListOffersProps = {
  offers: OffersTypes[];
  classNamePlaceList: string;
  classNamePlace: string;
  onCardMouseEnter?: (itemIdCard: string | undefined) => void;
}

export default function ListOffers({offers, classNamePlaceList, classNamePlace, onCardMouseEnter}: ListOffersProps): JSX.Element {

  const cardMouseEnterHandler = (evt: MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    if (onCardMouseEnter) {
      onCardMouseEnter(evt.currentTarget.id);
    }
  };

  const cardMouseLeaveHandler = (evt: MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    if (onCardMouseEnter) {
      onCardMouseEnter(undefined);
    }
  };

  return (
    <div className={classNamePlaceList}>
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offers={offer} className={classNamePlace} handlerEnter={cardMouseEnterHandler} handlerLeave={cardMouseLeaveHandler}/>
      ))}
    </div>
  );
}
