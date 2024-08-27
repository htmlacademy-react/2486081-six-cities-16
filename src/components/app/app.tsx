import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../conts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {offersProcess} from '../../store/offers-process/offers-process';
import {userProcess} from '../../store/user-process/user-process';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritePage from '../../pages/favorite-page/favorite-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import LoadingPage from '../../pages/loading-page/loading-page';
import { useEffect } from 'react';
import { fetchFavorite } from '../../store/api-actions/api-actions-favorite';


export default function App(): JSX.Element {
  const authorizationStatus = useAppSelector(userProcess.selectors.authorizationStatus);
  const isOffersLoading = useAppSelector(offersProcess.selectors.isOffersLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavorite());
    }
  }, [dispatch, authorizationStatus]);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersLoading) {
    return (
      <LoadingPage />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainPage />
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <FavoritePage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage />}
        />
        <Route
          path={AppRoute.Error}
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
