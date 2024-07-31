import {Link} from 'react-router-dom';

export default function NotFoundPage(): JSX.Element {
  return (
    <section>
      <h1>404 Not found page :(</h1>
      <Link to="/">Вернуться на главную</Link>
    </section>
  );
}
