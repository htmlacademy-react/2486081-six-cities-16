import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import ListOffers from '../../components/list-offers/list-offers';
import Map from '../../components/map/map';
// import ReviewsComments from '../../components/reviews-comments/reviews-comments';
import ReviewsOffers from '../../components/reviews-offers/reviews-offers';
import {ClassTypeHeader, ClassTypeOffers, ClassTypeOffersList} from '../../conts';
import {OffersTypes} from '../../types/offers-types';
import { commentsType } from '../../types/comments-types';

type OfferPageProps = {
  offers: OffersTypes[];
  comments: commentsType[];
}

export default function OfferPage({offers, comments}: OfferPageProps): JSX.Element {
  const {id: currentId} = useParams();
  const otherPlaces = offers.filter((offer) => offer.id !== currentId);


  return (
    <div className="page">

      <Header className={ClassTypeHeader.OTHERS} authorizationStatus />

      <main className="page__main page__main--offer">
        <section className="offer">
          <ReviewsOffers offers={offers} comments={comments} />
          <Map className='offer' offers={offers} selectedPoint={String(currentId)}/>
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
