import {AppRoute, AuthorizationStatus, CITIES, ClassTypeHeader, messageForPassword} from '../../conts';
import {loginAuthData} from '../../store/api-actions/api-actions-user';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import {FormEvent, useEffect, useRef} from 'react';
import Header from '../../components/header/header';
import {setCity } from '../../store/offers-process/offers-process';
import { userProcess } from '../../store/user-process/user-process';
import { fetchFavorite } from '../../store/api-actions/api-actions-favorite';
import { fetchOffers } from '../../store/api-actions/api-actions-offers';


export default function LoginPage(): JSX.Element {
  const authorization = useAppSelector(userProcess.selectors.authorizationStatus);
  const randomCity = CITIES[Math.floor(Math.random() * CITIES.length)];
  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authorization === AuthorizationStatus.Auth) {
      dispatch(fetchOffers());
      dispatch(fetchFavorite());
      navigate(AppRoute.Root);
    }
  }, [authorization, dispatch, navigate]);

  const onLoginSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (email.current !== null && password.current !== null) {
      dispatch(loginAuthData(
        {
          email: email.current.value,
          password: password.current.value,
        }));
    }
    if (authorization === AuthorizationStatus.Auth) {
      <Navigate to={AppRoute.Root} />;
    }
  };


  const onCityClick = () => {
    dispatch(setCity(randomCity));
  };

  return (
    <div className="page page--gray page--login">
      <Header className={ClassTypeHeader.LOGIN}/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={onLoginSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required ref={email} />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required ref={password} pattern="^(?=.*[a-zA-Z])(?=.*\d).*$" title={messageForPassword}/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Root} onClick={onCityClick}>
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
