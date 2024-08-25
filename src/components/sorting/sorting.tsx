import {useAppDispatch, useAppSelector} from '../../hooks';
import {offersProcess, setFilter} from '../../store/offers-process/offers-process';
import {MouseEvent, useState} from 'react';
import {TYPES_SORT} from '../../conts';
import {getIndex} from '../../utils';

export default function Sorting(): JSX.Element {
  const [openList, setOpenList] = useState(false);
  const filter = useAppSelector(offersProcess.selectors.filter);
  const dispatch = useAppDispatch();

  const onListSortHandler = () => {
    setOpenList(!openList);
  };

  function onSordHandler(evt : MouseEvent<HTMLElement>) {
    evt.preventDefault();
    dispatch(setFilter((evt.target as HTMLElement).innerText));
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={onListSortHandler}>
        {filter}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${openList ? 'places__options--opened' : ''}`}
        onClick={onSordHandler}
      >
        {TYPES_SORT.map((item) =>
          <li className={`places__option ${item === 'Popular' ? 'places__option--active' : ''}`} tabIndex={getIndex([...TYPES_SORT].reverse(),item)} key={item}>{item} </li>
        )}
      </ul>
    </form>
  );
}
