import {OffersTypes} from '../../types/offers-types';
import PlaceCard from '../place-card/place-card';

type ListOffersProps = {
offers: OffersTypes[];
classNamePlaceList: string;
classNamePlace: string;
}

export default function ListOffers({offers, classNamePlaceList, classNamePlace}: ListOffersProps): JSX.Element {
  return (
    <div className={classNamePlaceList}>
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offers={offer} className={classNamePlace} />
      ))}
    </div>
  );
}
