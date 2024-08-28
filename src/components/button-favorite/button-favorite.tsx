import {ButtonFavoriteProps} from './type';
import {BUTTON_CLASS} from '../../conts';

export default function ButtonFavorite({className, isFavorite, onFavoriteClick}: ButtonFavoriteProps): JSX.Element {

  const width = className === BUTTON_CLASS ? 18 : 31;
  const height = className === BUTTON_CLASS ? 19 : 33;
  const classButton = className === BUTTON_CLASS ? 'place-card' : 'offer';

  return (
    <button className={`${classButton}__bookmark-button ${isFavorite ? `${classButton}__bookmark-button--active` : ''} button`} type="button"
      onClick={onFavoriteClick}
    >
      <svg className={`${classButton}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

