import {ListOffersProps} from './type';
import {MouseEvent} from 'react';
import PlaceCard from '../place-card/place-card';

export default function ListOffers({offers, classNamePlaceList, classNamePlace, onCardMouseEnter}: ListOffersProps): JSX.Element {

  function cardMouseEnterHandler(evt: MouseEvent<HTMLLIElement>) {
    evt.preventDefault();
    onCardMouseEnter?.(evt.currentTarget.id);
  }

  function cardMouseLeaveHandler() {
    onCardMouseEnter?.(undefined);
  }

  const onOffers = (evt: MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
  };

  return (
    <div className={classNamePlaceList} >
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offers={offer} className={classNamePlace} handlerEnter={cardMouseEnterHandler} handlerLeave={cardMouseLeaveHandler} handlerClick={onOffers}/>
      ))}
    </div>
  );
}
