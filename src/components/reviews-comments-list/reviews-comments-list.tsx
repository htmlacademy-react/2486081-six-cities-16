import {DateFormat, QuantityComments} from '../../conts';
import {getCountStars,getDateForman} from '../../utils';
import {commentsProps} from './type';
import {Fragment} from 'react';


export default function ReviewsCommentsList({comments}: commentsProps): JSX.Element {

  return (
    <Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.slice(QuantityComments.Min, QuantityComments.Max).map((comment) => (
          <li className="reviews__item" key={comment.id}>
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
              </div>
              <span className="reviews__user-name">
                {comment.user.name}
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{width: `${getCountStars(comment.rating)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
                {comment.comment}
              </p>
              <time className="reviews__time" dateTime={comment.date.slice(DateFormat.Start, DateFormat.End)}>{getDateForman(comment.date)}</time>
            </div>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
