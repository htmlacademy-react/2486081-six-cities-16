import MainPage from '../../pages/main-page/main-page';
type AppProps = {
  rentalOffers: number;
}
export default function App({rentalOffers}: AppProps): JSX.Element {
  return (
    <MainPage rentalOffers={rentalOffers} />
  );
}
