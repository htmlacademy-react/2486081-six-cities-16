import {AuthorizationStatus} from '../../conts';
import {ReviewsOffersProps} from './type';
import {useAppSelector} from '../../hooks';
import {getCountStars} from '../../utils';
import {Fragment} from 'react';
import ReviewsCommentsList from '../reviews-comments-list/reviews-comments-list';
import ReviewsComments from '../reviews-comments/reviews-comments';
import ButtonFavorite from '../button-favorite/button-favorite';

export default function ReviewsOffers({offer, comments}:ReviewsOffersProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <Fragment>
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {offer.images.map((img) =>(
            <div className="offer__image-wrapper" key={img}>
              <img className="offer__image" src={img} alt="Photo studio"/>
            </div>
          ))}
        </div>
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">
          {offer.isPremium ?
            <div className="offer__mark">
              <span>Premium</span>
            </div>
            : ''}
          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              {offer.title}
            </h1>
            <ButtonFavorite className='' isFavorite={offer.isFavorite} />
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={{width: `${getCountStars(Number(offer.rating))}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">{offer.rating}</span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              {offer.type}
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              {offer.bedrooms !== 1 ? `${offer.bedrooms} Bedrooms` : '1 Bedroom'}
            </li>
            <li className="offer__feature offer__feature--adults">
              {offer.maxAdults !== 1 ? `Max ${offer.maxAdults} adults` : 'Max 1 adult'}
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">&euro;{offer.price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {offer.goods.map((good) => (
                <li className="offer__inside-item" key={good}>
                  {good}
                </li>
              ))}
            </ul>
          </div>
          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <div className="offer__host-user user">
              <div className={`offer__avatar-wrapper ${offer.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
              </div>
              <span className="offer__user-name">
                {offer.host.name}
              </span>
              {offer.host.isPro ?
                <span className="offer__user-status">
             Pro
                </span>
                : ''}
            </div>
            <div className="offer__description">
              <p className="offer__text">
                {offer.description}
              </p>
            </div>
          </div>
          <section className="offer__reviews reviews">
            <ReviewsCommentsList comments={comments} />
            {authorizationStatus === AuthorizationStatus.Auth ?
              <ReviewsComments />
              : ''}
          </section>
        </div>
      </div>
    </Fragment>
  );

}
