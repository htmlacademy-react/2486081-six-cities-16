import {AppRoute, ClassTypeHeader} from '../../conts';
import {favoriteProcess} from '../../store/favorite-process/favorite-process';
import {useAppSelector} from '../../hooks';
import {Link} from 'react-router-dom';
import ListFavorites from '../../components/list-favorites/list-favorites';
import Header from '../../components/header/header';


export default function FavoritePage(): JSX.Element {
  const favoriteCount = useAppSelector(favoriteProcess.selectors.favorite);

  return (
    <div className={`page ${favoriteCount.length === 0 ? 'page--favorites-empty' : ''}`} >
      <Header className={ClassTypeHeader.Others} />
      {favoriteCount.length !== 0 ?
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ListFavorites />
            </section>
          </div>
        </main>
        :
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>
          </div>
        </main>}
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Root}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}
