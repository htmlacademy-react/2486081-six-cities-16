import { Link } from 'react-router-dom';
import { CITIES } from '../../conts';
import { useAppDispatch } from '../../hooks';
import { currentCity } from '../../store/action';

type LocationsProps = {
  cityCurrent: string ;
}

export default function Locations({cityCurrent}:LocationsProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li className="locations__item" key={city} onClick={() => dispatch(currentCity({nameCity: city}))}>
              <Link className={`locations__item-link tabs__item${city === cityCurrent ? ' tabs__item--active' : ''}`} to='/'>
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
