import {AppRoute, AuthorizationStatus, ClassTypeHeader} from '../../conts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import {FormEvent, useRef} from 'react';
import {getAuthorizationStatus, loginAuthData} from '../../store/api-actions';
import Header from '../../components/header/header';


export default function LoginPage(): JSX.Element {
  const authorization = useAppSelector((state) => state.authorizationStatus);
  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onLoginSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (email.current !== null && password.current !== null) {
      dispatch(loginAuthData(
        {
          email: email.current.value,
          password: password.current.value,
        }));
      dispatch(getAuthorizationStatus());

      if (authorization === AuthorizationStatus.Auth) {
        navigate(AppRoute.Root);
      }
    }
  };

  if (authorization === AuthorizationStatus.Auth) {
    return (
      <Navigate to={AppRoute.Root} />
    );
  }

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
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required ref={password}/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Root}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
