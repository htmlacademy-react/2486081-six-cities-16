import MainPages from '../../pages/main-pages/main-pages';
type AppProps = {
  rentalOffers: number;
}
export default function App({rentalOffers}: AppProps): JSX.Element {
  return (
    <MainPages rentalOffers={rentalOffers} />
  );
}
