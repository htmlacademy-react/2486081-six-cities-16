import {ClassTypeOffers, ClassTypeOffersList} from '../../conts';
import {useAppSelector} from '../../hooks';
import {getOffersByCity} from '../../utils';
import ListOffers from '../list-offers/list-offers';

export default function ListFavorites(): JSX.Element {
  const offers = useAppSelector((state) => state.favoriteOffers);
  const favoriteOffers = getOffersByCity(offers);

  return (
    <ul className="favorites__list">
      {Object.entries(favoriteOffers).map(([city, offer]) => (
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
