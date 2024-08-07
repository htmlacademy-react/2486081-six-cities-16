import {ClassTypeOffers, ClassTypeOffersList} from '../../conts';
import {OffersTypes} from '../../types/offers-types';
import {getOffersByCity} from '../../utils';
import ListOffers from '../list-offers/list-offers';

type ListFavoritesProps = {
  offers: OffersTypes[];
}

export default function ListFavorites({offers}: ListFavoritesProps): JSX.Element {
  const offersByCity = getOffersByCity(offers);
  return (
    <ul className="favorites__list">
      {Object.entries(offersByCity).map(([city, offer]) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <ListOffers offers={offer} classNamePlaceList={ClassTypeOffersList.FAVORITE} classNamePlace={ClassTypeOffers.FAVORITE} />
        </li>
      ))}
    </ul>
  );
}
