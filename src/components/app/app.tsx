import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import {AppRoute, AuthorizationStatus} from '../../conts';
import LoginPage from '../../pages/login-page/login-page';
import FavoritePage from '../../pages/favorite-page/favorite-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import {OffersTypes} from '../../types/offers-types';
import { commentsType } from '../../types/comments-types';

type AppProps = {
  offers: OffersTypes[];
  comments: commentsType[];
}

export default function App({offers, comments}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainPage offers={offers} />
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritePage offers={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage offers={offers} comments={comments}/>}
        />
        <Route
          path={AppRoute.Error}
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
