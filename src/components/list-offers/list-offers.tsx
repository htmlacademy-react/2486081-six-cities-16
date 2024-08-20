import {getComment, getCurrentOffer, getOtherPlaces} from '../../store/api-actions';
import {ListOffersProps} from './type';
import {useAppDispatch} from '../../hooks';
import {MouseEvent} from 'react';
import PlaceCard from '../place-card/place-card';

export default function ListOffers({offers, classNamePlaceList, classNamePlace, onCardMouseEnter}: ListOffersProps): JSX.Element {
  const dispatch = useAppDispatch();

  function cardMouseEnterHandler(evt: MouseEvent<HTMLLIElement>) {
    evt.preventDefault();
    onCardMouseEnter?.(evt.currentTarget.id);
  }

  function cardMouseLeaveHandler() {
    onCardMouseEnter?.(undefined);
  }

  const onOffers = (evt: MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    dispatch(getCurrentOffer(String(evt.currentTarget.id)));
    dispatch(getComment(String(evt.currentTarget.id)));
    dispatch(getOtherPlaces(String(evt.currentTarget.id)));
  };

  return (
    <div className={classNamePlaceList} >
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offers={offer} className={classNamePlace} handlerEnter={cardMouseEnterHandler} handlerLeave={cardMouseLeaveHandler} handlerClick={onOffers}/>
      ))}
    </div>
  );
}
