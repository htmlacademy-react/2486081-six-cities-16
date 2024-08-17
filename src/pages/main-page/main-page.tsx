import {ClassTypeHeader, ClassTypeOffers, ClassTypeOffersList} from '../../conts';
import {getOffersByCity} from '../../utils';
import {useAppSelector } from '../../hooks';
import {useState} from 'react';
import Header from '../../components/header/header';
import Locations from '../../components/locations/locations';
import Sorting from '../../components/sorting/sorting';
import ListOffers from '../../components/list-offers/list-offers';
import Map from '../../components/map/map';

export default function MainPage(): JSX.Element {
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);

  const offersByCity = getOffersByCity(offers)[city];

  const [selectedPoint, setSelectedPoint] = useState<string| undefined>(undefined);
  const cardMouseEnterHandler = (itemIdCard: string | undefined) => {
    const allId = offersByCity.map((offer) => offer.id);
    const currentPoint = allId.find((id) => id === itemIdCard);
    setSelectedPoint(currentPoint);
  };

  return (
    <div className="page page--gray page--main">
      <Header className={ClassTypeHeader.MAIN} authorizationStatus/>
      {!offersByCity ?
        <main className="page__main page__main--index page__main--index-empty">
          <h1 className="visually-hidden">Cities</h1>
          <Locations cityCurrent={city}/>
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
          <Locations cityCurrent={city}/>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersByCity.length} places to stay in {city}</b>
                <Sorting />
                <ListOffers offers={offersByCity} classNamePlaceList={ClassTypeOffersList.MAIN} classNamePlace={ClassTypeOffers.MAIN} onCardMouseEnter={cardMouseEnterHandler}/>
              </section>
              <div className="cities__right-section">
                <Map className='cities' offers={offersByCity} selectedPoint={selectedPoint} />
              </div>
            </div>
          </div>
        </main>}
    </div>
  );
}
