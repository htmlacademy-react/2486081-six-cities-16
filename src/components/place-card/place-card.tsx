import {AppRoute, ClassTypeOffers} from '../../conts';
import {PlaceCardProps} from './type';
import {getCountStars} from '../../utils';
import {Link} from 'react-router-dom';
import ButtonFavorite from '../button-favorite/button-favorite';


export default function PlaceCard({offers, className, handlerEnter, handlerLeave, handlerClick}: PlaceCardProps): JSX.Element {
  const {id, title, type, price, previewImage, isPremium, isFavorite, rating} = offers;

  const width = className === ClassTypeOffers.FAVORITE ? 150 : 260;
  const height = className === ClassTypeOffers.FAVORITE ? 110 : 200;
  return (
    <article className={`${className}__card place-card` } id={id} onMouseEnter={handlerEnter} onMouseLeave={handlerLeave} onClick={handlerClick}>
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : ''}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={AppRoute.Offer.replace(':id', offers.id)}>
          <img className="place-card__image" src={previewImage} width={width} height={height} alt="Place image"/>
        </Link>
      </div>
      <div className={`${className === ClassTypeOffers.FAVORITE ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <ButtonFavorite className='default' isFavorite={isFavorite}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getCountStars(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer.replace(':id', offers.id)}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
