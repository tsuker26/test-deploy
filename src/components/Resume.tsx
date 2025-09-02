import "./Resume.css";

export default function Resume() {
  return (
    <div className="resume">
      <header className="resume-header">
        <h1>Цукер Игорь</h1>
        <h2>Frontend-разработчик</h2>
        <div className="contact">
          <p>
            Email: <a>tsuker26@bk.ru</a>
          </p>
          <p>
            Telegram: <a>@tsuker</a>
          </p>
        </div>
      </header>

      <section>
        <h3>Опыт работы — 3 года 10 месяцев</h3>
        <div className="job">
          <div className="job-title">
            <strong>ЛИИС Инженерные Решения</strong> — Старший
            frontend-разработчик
          </div>
          <div className="job-period">
            Ноябрь 2021 — Август 2025 · Санкт-Петербург
          </div>
          <ul>
            <li>Писал клиент в стеке React + TypeScript.</li>
            <li>
              Лидировал модуль просмотра 3D-моделей: перевёл загрузку моделей на
              потоковую (streaming), что позволило работать с моделями до 3 ГБ и
              увеличило FPS с 30 до 120.
            </li>
            <li>
              Внедрил модульную архитектуру, повысив гибкость и
              масштабируемость.
            </li>
            <li>
              Написал техническую документацию, сократив срок онбординга с 3 до
              2 месяцев.
            </li>
            <li>Разработал модуль для просмотра PDF-документов.</li>
            <li>
              Реализовал функционал для работы с документами (масштабирование,
              перемещение, аннотации).
            </li>
            <li>Покрыл модуль unit-тестами на 93% (Vitest).</li>
            <li>
              Написал микросервис на NestJS для разбиения 3D-моделей на плитки.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h3>Навыки</h3>
        <p className="skills">
          TypeScript, React, JavaScript, HTML, CSS, SCSS, Redux, MobX, NestJS,
          ElectronJS
        </p>
      </section>

      <section>
        <h3>Обо мне</h3>
        <p className="text">
          Фронтенд-разработчик с опытом в разработке продуктовых веб-приложений.
          Прошел путь от junior до middle внутри одной компании, глубоко
          погрузился в процессы, архитектуру и развитие продукта.
          Специализируюсь на React + TypeScript, умею проектировать и
          реализовывать масштабируемую и гибкую архитектуру.
        </p>
      </section>
    </div>
  );
}
