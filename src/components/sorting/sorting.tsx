import {sortLowToHigh, sortTopRated} from './utils';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {currentSort, uploadAnOffers} from '../../store/action';
import {MouseEvent, useState} from 'react';
import {getIndex} from '../../utils';
import {getOffers} from '../../store/api-actions';
import {TYPES_SORT} from './const';


export default function Sorting(): JSX.Element {
  const [openList, setOpenList] = useState(false);
  const offers = useAppSelector((state) => state.offers);
  const sortType = useAppSelector((state) => state.sort);
  const dispatch = useAppDispatch();

  const onListSortHandler = () => {
    setOpenList(!openList);
  };

  function onSordHandler(evt : MouseEvent<HTMLElement>) {
    evt.preventDefault();
    switch((evt.target as HTMLElement).innerText) {
      case 'Popular':
        dispatch(currentSort('Popular'));
        return dispatch(getOffers());
      case 'Price: low to high':
        dispatch(currentSort('Price: low to high'));
        return dispatch(uploadAnOffers(offers.toSorted(sortLowToHigh)));
      case 'Price: high to low':
        dispatch(currentSort('Price: high to low'));
        return dispatch(uploadAnOffers(offers.toSorted(sortLowToHigh).toReversed()));
      case 'Top rated first':
        dispatch(currentSort('Top rated first'));
        return dispatch(uploadAnOffers(offers.toSorted(sortTopRated)));
    }
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={onListSortHandler}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${openList ? 'places__options--opened' : ''}`}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={onSordHandler}
      >
        {TYPES_SORT.map((item) =>
          <li className={`places__option ${item === sortType ? 'places__option--active' : ''}`} tabIndex={getIndex([...TYPES_SORT].reverse(),item)} key={item}>{item} </li>
        )}
      </ul>
    </form>
  );
}
