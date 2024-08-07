type ButtonFavoriteProps = {
  className: string;
  isFavorite: boolean;
}
const typeButton = {
  Default: 'default',
};

export default function ButtonFavorite({className, isFavorite}: ButtonFavoriteProps): JSX.Element {

  const width = className === typeButton.Default ? 18 : 31;
  const height = className === typeButton.Default ? 19 : 33;
  const classButton = className === typeButton.Default ? 'place-card' : 'offer';

  return (
    <button className={`${classButton}__bookmark-button ${isFavorite ? `${classButton}__bookmark-button--active` : ''} button`} type="button">
      <svg className={`${classButton}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}
