import {Link} from 'react-router-dom';
import {AppRoute, ClassTypeHeader} from '../../conts';
import { useAppSelector } from '../../hooks';

type HeaderProps = {
  className: string;
  authorizationStatus: boolean;
}

export default function Header({className, authorizationStatus}: HeaderProps): JSX.Element {
  const favoriteCount = useAppSelector((state) => state.quantityFavoritesOffers);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            {className === ClassTypeHeader.MAIN ?
              <a className={`header__logo-link ${className}`}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
              :
              <Link className="header__logo-link" to={AppRoute.Root} >
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>}
          </div>
          {className === ClassTypeHeader.LOGIN ? '' :
            <nav className="header__nav">
              {authorizationStatus ?
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">{favoriteCount}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to={AppRoute.Login}>
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </ul>
                :
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__signout">Sign in</span>
                    </Link>
                  </li>
                </ul>}
            </nav>}
        </div>
      </div>
    </header>
  );
}
