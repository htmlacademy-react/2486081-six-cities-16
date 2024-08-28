import {FormEvent, Fragment, useEffect, useRef, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {ReviewsCommentsProps} from './type';
import {CommentStatus, RATINGS_TITLES} from '../../conts';
import {sendComments} from '../../store/api-actions/api-actions-comments';
import {commentsProcess} from '../../store/comments-process/comments-process';
import { toast } from 'react-toastify';
import {validateRating, validateText } from '../../utils';

export default function ReviewsComments({offerId}: ReviewsCommentsProps): JSX.Element {
  const commentStatus = useAppSelector(commentsProcess.selectors.status);
  const formElement = useRef<HTMLFormElement>(null);

  const [rating, setRating] = useState<number>(0);
  const [text, setText] = useState<string>('');
  const [isDisableForm, setDisableForm] = useState<boolean>(false);

  const isDisabled = validateText(text) || validateRating(rating);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (commentStatus === CommentStatus.FailToLoad) {
      setDisableForm(false);
      toast.error('Couldn`t send a comment');
    }

    if (commentStatus === CommentStatus.Loaded) {
      setDisableForm(false);
      formElement.current?.reset();
      setRating(0);
      setText('');
    }
  }, [commentStatus]);

  const handlerReviewsClick = (evt: FormEvent) => {
    evt.preventDefault();
    setDisableForm(true);
    dispatch(sendComments({
      id: offerId,
      comment: text,
      rating: rating
    }));
  };

  return (
    <form className="reviews__form form" action="#" method="post" ref={formElement} onSubmit={handlerReviewsClick}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATINGS_TITLES.map((item) => (
          <Fragment key={item.key}>
            <input className="form__rating-input visually-hidden" name="rating" value={item.value} id={item.id} type="radio"
              checked={Number(item.value) === rating}
              disabled={isDisableForm}
              onChange={(evt) => setRating(Number(evt.target.value))}
            />
            <label htmlFor={item.id} className="reviews__rating-label form__rating-label" title={item.title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={isDisableForm}
        value={text}
        onChange={(evt) => setText(evt.target.value)}
      >
        {text}
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled || isDisableForm}>Submit</button>
      </div>
    </form>
  );
}
