import {ClassTypeHeader, ClassTypeOffers, ClassTypeOffersList, QuantityNearPlaces, QuantityOffersOnMap} from '../../conts';
import {fetchChosenOffer, fetchOtherOffers} from '../../store/api-actions/api-actions-offers';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {offersProcess, setCity} from '../../store/offers-process/offers-process';
import {sordCommentsByDate} from '../../utils';
import {commentsProcess} from '../../store/comments-process/comments-process';
import {fetchComments} from '../../store/api-actions/api-actions-comments';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Header from '../../components/header/header';
import ListOffers from '../../components/list-offers/list-offers';
import Map from '../../components/map/map';
import ReviewsOffers from '../../components/reviews-offers/reviews-offers';
import LoadingPage from '../loading-page/loading-page';


export default function OfferPage(): JSX.Element {
  const {id: currentId} = useParams<string>();

  const dispatch = useAppDispatch();

  const currentOffer = useAppSelector(offersProcess.selectors.chosenOffer);
  const currentComments = useAppSelector(commentsProcess.selectors.comments);
  const otherPlaces = useAppSelector(offersProcess.selectors.otherOffers);
  const isOffersLoading = useAppSelector(offersProcess.selectors.isOffersLoading);

  const offers = currentOffer ? [currentOffer, ...otherPlaces].slice(QuantityOffersOnMap.Min, QuantityOffersOnMap.Max) : [];

  useEffect(() => {
    Promise.all([dispatch(fetchChosenOffer(currentId!)), dispatch(fetchComments(currentId!)), dispatch(fetchOtherOffers(currentId!))]);
  }, [dispatch, currentId]);

  useEffect(() => {
    if (currentOffer) {
      dispatch(setCity(currentOffer.city.name));
    }
  },[dispatch, currentOffer]);

  if (isOffersLoading || currentOffer === null) {
    return (
      <LoadingPage />
    );
  }

  return (
    <div className="page">
      <Header className={ClassTypeHeader.Others} />
      <main className="page__main page__main--offer">
        <section className="offer">
          <ReviewsOffers offer={currentOffer} comments={currentComments.toSorted(sordCommentsByDate)}/>
          <Map className='offer' offers={offers} selectedPoint={currentId}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <ListOffers offers={otherPlaces.slice(QuantityNearPlaces.Min,QuantityNearPlaces.Max)} classNamePlaceList={ClassTypeOffersList.Offer} classNamePlace={ClassTypeOffers.Offer} />
          </section>
        </div>
      </main>
    </div>
  );
}
