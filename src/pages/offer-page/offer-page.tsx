import Header from '../../components/header/header';
import ListOffers from '../../components/list-offers/list-offers';
// import ReviewsComments from '../../components/reviews-comments/reviews-comments';
import ReviewsOffers from '../../components/reviews-offers/reviews-offers';
import {ClassTypeHeader, ClassTypeOffers, ClassTypeOffersList} from '../../conts';
import {OffersTypes} from '../../types/offers-types';

type OfferPageProps = {
  offers: OffersTypes[];
}

export default function OfferPage({offers}: OfferPageProps): JSX.Element {
  return (
    <div className="page">

      <Header className={ClassTypeHeader.OTHERS} authorizationStatus />

      <main className="page__main page__main--offer">
        <section className="offer">
          <ReviewsOffers offers={offers} />
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <ListOffers offers={offers} classNamePlaceList={ClassTypeOffersList.OFFER} classNamePlace={ClassTypeOffers.OFFER}/>
          </section>
        </div>
      </main>
    </div>
  );
}
