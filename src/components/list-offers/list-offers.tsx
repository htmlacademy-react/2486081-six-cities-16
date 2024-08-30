import {ListOffersProps} from './type';
import {MouseEvent} from 'react';
import PlaceCard from '../place-card/place-card';

export default function ListOffers({offers, classNamePlaceList, classNamePlace, onCardMouseEnter}: ListOffersProps): JSX.Element {

  function handleCardEnter(evt: MouseEvent<HTMLLIElement>) {
    evt.preventDefault();
    onCardMouseEnter?.(evt.currentTarget.id);
  }

  function handleCardLeave() {
    onCardMouseEnter?.(undefined);
  }

  return (
    <div className={classNamePlaceList} >
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offers={offer} className={classNamePlace} onCardEnter={handleCardEnter} onCardLeave={handleCardLeave}/>
      ))}
    </div>
  );
}
