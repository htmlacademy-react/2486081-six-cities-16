import {AuthorizationStatus, ClassTypeHeader, ClassTypeOffers, ClassTypeOffersList} from '../../conts';
import {offersProcess, setCity, sortedOffers} from '../../store/offers-process/offers-process';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {MouseEvent, useEffect, useState} from 'react';
import Header from '../../components/header/header';
import Locations from '../../components/locations/locations';
import Sorting from '../../components/sorting/sorting';
import ListOffers from '../../components/list-offers/list-offers';
import Map from '../../components/map/map';
import { userProcess } from '../../store/user-process/user-process';
import { fetchOffers } from '../../store/api-actions/api-actions-offers';


export default function MainPage(): JSX.Element {
  const offers = useAppSelector(sortedOffers);
  const city = useAppSelector(offersProcess.selectors.city);
  const [selectedPoint, setSelectedPoint] = useState<string| undefined>(undefined);
  const authorizationStatus = useAppSelector(userProcess.selectors.authorizationStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Unknown) {
      dispatch(fetchOffers());
    }
  }, [authorizationStatus, dispatch]);

  const handleCityClick = (evt : MouseEvent<HTMLElement>) => {
    const changeCity = (evt.target as HTMLElement).innerText;
    dispatch(setCity(changeCity));
  };

  const handleCardMouseEnter = (itemIdCard: string | undefined) => {
    const allId = offers.map((offer) => offer.id);
    const currentPoint = allId.find((id) => id === itemIdCard);
    setSelectedPoint(currentPoint);
  };

  return (
    <div className="page page--gray page--main">
      <Header className={ClassTypeHeader.Main}/>
      {offers.length === 0 ?
        <main className="page__main page__main--index page__main--index-empty">
          <h1 className="visually-hidden">Cities</h1>
          <Locations cityCurrent={city} onCityClick={handleCityClick}/>
          <div className="cities">
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in {city}</p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          </div>
        </main>
        :
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <Locations cityCurrent={city} onCityClick={handleCityClick}/>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} {offers.length === 1 ? 'place' : 'places'} to stay in {city}</b>
                <Sorting />
                <ListOffers offers={offers} classNamePlaceList={ClassTypeOffersList.Main} classNamePlace={ClassTypeOffers.Main} onCardMouseEnter={handleCardMouseEnter}/>
              </section>
              <div className="cities__right-section">
                <Map className='cities' offers={offers} selectedPoint={selectedPoint} />
              </div>
            </div>
          </div>
        </main>}
    </div>
  );
}
