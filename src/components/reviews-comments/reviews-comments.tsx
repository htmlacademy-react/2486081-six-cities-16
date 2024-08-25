import {Fragment, MouseEvent, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {ReviewsCommentsProps} from './type';
import {CommentStatus, RATINGS_TITLES} from '../../conts';
import {sendComments} from '../../store/api-actions/api-actions-comments';
import {getIndex} from '../../utils';
import { commentsProcess } from '../../store/comments-process/comments-process';

export default function ReviewsComments({offerId}: ReviewsCommentsProps): JSX.Element {
  const commentStatus = useAppSelector(commentsProcess.selectors.status);
  const [rating, setRating] = useState<number>(0);
  const [text, setText] = useState<string>('');
  const dispatch = useAppDispatch();


  const handlerReviewsClick = (evt: MouseEvent) => {
    evt.preventDefault();
    dispatch(sendComments({
      id: offerId,
      comment: text,
      rating: rating
    }));

    if (commentStatus !== CommentStatus.FailToLoad) {
      setText('');
      setRating(0);
    }

  };

  const onRatingsChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));

  };

  const onTextChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(evt.target.value);
  };

  const validateDescription = (value: string, countStar: number) => {
    if (value.length < 50 || value.length > 300 || countStar === 0) {
      return true;
    }
    return false;
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating"
        onChange={onRatingsChange}
      >
        {RATINGS_TITLES.map((title) => (
          <Fragment key={title}>
            <input className="form__rating-input visually-hidden" name="rating" value={getIndex(RATINGS_TITLES, title)} id={`${getIndex(RATINGS_TITLES, title)}-stars`} type="radio"/>
            <label htmlFor={`${getIndex(RATINGS_TITLES, title)}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
        value={text}
        onChange={onTextChange}
      >
        {text}
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={validateDescription(text, rating)}
          onClick={handlerReviewsClick}
        >Submit
        </button>
      </div>
    </form>
  );
}
