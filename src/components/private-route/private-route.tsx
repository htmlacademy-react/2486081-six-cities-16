import {AppRoute, AuthorizationStatus} from '../../conts';
import {PrivateRouteProps} from './type';
import {useAppSelector} from '../../hooks';
import {userProcess} from '../../store/user-process/user-process';
import {Navigate} from 'react-router-dom';

export default function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(userProcess.selectors.authorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />
  );
}
