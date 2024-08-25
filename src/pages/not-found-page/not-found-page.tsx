import './style.css';

export default function NotFoundPage(): JSX.Element {
  return (
    <section className="page_error">
      <h1 className="page_error_title">404</h1>
      <p className="page_error_text">Страница не найдена</p>
      <p className="page_error_text">К сожалению, мы не можем найти страницу, которую вы ищете.</p>
      <a className="page_error_link" href="/">Вернуться на главную</a>
    </section>
  );
}
