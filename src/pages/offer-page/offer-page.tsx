import {ClassTypeHeader, ClassTypeOffers, ClassTypeOffersList} from '../../conts';
import {useAppSelector} from '../../hooks';
import {useParams} from 'react-router-dom';
import Header from '../../components/header/header';
import ListOffers from '../../components/list-offers/list-offers';
import Map from '../../components/map/map';
import ReviewsOffers from '../../components/reviews-offers/reviews-offers';
import LoadingPage from '../loading-page/loading-page';


export default function OfferPage(): JSX.Element {
  const {id: currentId} = useParams<string>();

  const currentCard = useAppSelector((state) => state.currentOffers);
  const currentComments = useAppSelector((state) => state.comments);
  const otherPlaces = useAppSelector((state) => state.otherPlaces);

  const offers = Array.from(otherPlaces);

  if (currentCard !== null) {
    offers.push(currentCard);
  }


  if (currentCard === null || currentCard.id !== currentId) {
    return (
      <LoadingPage />
    );
  }
  const otherPlacesNew = offers.filter((off) => off.id !== currentId);

  return (
    <div className="page">
      <Header className={ClassTypeHeader.OTHERS} />
      <main className="page__main page__main--offer">
        <section className="offer">
          <ReviewsOffers offer={currentCard} comments={currentComments}/>
          <Map className='offer' offers={offers} selectedPoint={currentId}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <ListOffers offers={otherPlacesNew} classNamePlaceList={ClassTypeOffersList.OFFER} classNamePlace={ClassTypeOffers.OFFER} />
          </section>
        </div>
      </main>
    </div>
  );
}
