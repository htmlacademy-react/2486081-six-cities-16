import {AppRoute, AuthorizationStatus} from '../../conts';
import {PrivateRouteProps} from './type';
import {useAppSelector} from '../../hooks';
import {Navigate} from 'react-router-dom';

export default function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />
  );
}
