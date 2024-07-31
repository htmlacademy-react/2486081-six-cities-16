import {OffersTypes} from '../../types/offers-types';
import PlaceCard from '../place-card/place-card';

type ListOffersProps = {
offers: OffersTypes[];
}

export default function ListOffers({offers}: ListOffersProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offers={offer}/>
      ))}
    </div>
  );
}
