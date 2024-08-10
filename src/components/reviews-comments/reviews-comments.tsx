import {Fragment, useState} from 'react';
import {RATINGS_TITLES} from '../../conts';
import {getIndex} from '../../utils';

export default function ReviewsComments(): JSX.Element {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');

  const onRatingsChange = (evt: React.FormEvent) => {
    if (evt.target instanceof HTMLInputElement) {
      setRating(Number(evt.target.value));
    }
  };

  const onTextChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(evt.target.value);
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating"
        onChange={onRatingsChange}
      >
        {RATINGS_TITLES.map((title) => (
          <Fragment key={`${getIndex(RATINGS_TITLES, title)}-${rating}`}>
            <input className="form__rating-input visually-hidden" name="rating" value={getIndex(RATINGS_TITLES, title)} id={`${getIndex(RATINGS_TITLES, title)}-stars`} type="radio" />
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
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}
