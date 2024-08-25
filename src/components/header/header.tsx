import {AppRoute, AuthorizationStatus, ClassTypeHeader} from '../../conts';
import {logoutAuthData} from '../../store/api-actions/api-actions-user';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {favoriteProcess} from '../../store/favorite-process/favorite-process';
import {userProcess} from '../../store/user-process/user-process';
import {HeaderProps} from './type';
import {Link} from 'react-router-dom';

export default function Header({className}: HeaderProps): JSX.Element {
  const favoriteCount = useAppSelector(favoriteProcess.selectors.favorite).length;
  const authorizationStatus = useAppSelector(userProcess.selectors.authorizationStatus);
  const user = useAppSelector(userProcess.selectors.user);
  const dispatch = useAppDispatch();

  const onDeleteToken = () => {
    dispatch(logoutAuthData());
  };

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
              {authorizationStatus === AuthorizationStatus.Auth ?
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">{user?.email}</span>
                      <span className="header__favorite-count">{favoriteCount}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to={AppRoute.Login} onClick={onDeleteToken}>
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
