import {AppRoute, ClassTypeOffers, ClassTypeOffersList} from '../../conts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {favoriteProcess} from '../../store/favorite-process/favorite-process';
import {getOffersByCity} from '../../utils';
import {setCity} from '../../store/offers-process/offers-process';
import {Link} from 'react-router-dom';
import ListOffers from '../list-offers/list-offers';


export default function ListFavorites(): JSX.Element {
  const offers = useAppSelector(favoriteProcess.selectors.favorite);
  const favoriteOffers = getOffersByCity(offers);
  const dispatch = useAppDispatch();

  return (
    <ul className="favorites__list">
      {Object.entries(favoriteOffers).map(([city, offer]) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Root} onClick={() => dispatch(setCity(city))}>
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <ListOffers offers={offer} classNamePlaceList={ClassTypeOffersList.Favorite} classNamePlace={ClassTypeOffers.Favorite} />
        </li>
      ))}
    </ul>
  );
}
