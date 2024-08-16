import {ClassTypeHeader, ClassTypeOffers, ClassTypeOffersList} from '../../conts';
import {commentsType} from '../../types/comments-types';
import {useAppSelector} from '../../hooks';
import {useParams} from 'react-router-dom';
import Header from '../../components/header/header';
import ListOffers from '../../components/list-offers/list-offers';
import Map from '../../components/map/map';
import ReviewsOffers from '../../components/reviews-offers/reviews-offers';

type OfferPageProps = {
  comments: commentsType[];
}

export default function OfferPage({comments}: OfferPageProps): JSX.Element {
  const {id: currentId} = useParams();
  const offers = useAppSelector((state) => state.offers);

  const currentOffer = offers.filter((off) => off.id === currentId);
  const cityName = currentOffer[0].city.name;
  const offer = offers.filter((off) => off.city.name === cityName);
  const otherPlaces = offer.filter((off) => off.id !== currentId);

  return (
    <div className="page">
      <Header className={ClassTypeHeader.OTHERS} authorizationStatus />
      <main className="page__main page__main--offer">
        <section className="offer">
          <ReviewsOffers offers={currentOffer} comments={comments} />
          <Map className='offer' offers={offer} selectedPoint={currentId}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <ListOffers offers={otherPlaces} classNamePlaceList={ClassTypeOffersList.OFFER} classNamePlace={ClassTypeOffers.OFFER} />
          </section>
        </div>
      </main>
    </div>
  );
}
