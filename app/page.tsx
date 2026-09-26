export default function Page() {
  return (
    <div className="lb-shell">
      <nav className="lb-nav" aria-label="Основная навигация">
        <div className="lb-container lb-nav__inner">
          <a href="/" className="lb-nav__brand">
            Lucky Bear Casino
          </a>
          <ul className="lb-nav__list">
            <li>
              <a href="#about" className="lb-nav__link">
                О сайте
              </a>
            </li>
            <li>
              <a href="#mirror" className="lb-nav__link">
                Зеркало
              </a>
            </li>
            <li>
              <a href="#games" className="lb-nav__link">
                Игры
              </a>
            </li>
            <li>
              <a href="#bonus" className="lb-nav__link">
                Бонусы
              </a>
            </li>
            <li>
              <a href="#signup" className="lb-nav__link">
                Регистрация
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <header className="lb-hero">
        <div className="lb-container lb-hero__grid">
          <div>
            <h1 className="lb-hero__title">
              Lucky Bear Casino — <span className="lb-hero__accent">официальный сайт</span> лаки бир казино онлайн
            </h1>
            <p className="lb-hero__lead">
              Lucky Bear Casino — это современная игровая платформа, где каждый найдёт развлечение по душе. На официальном сайте лаки бир казино собраны лучшие слоты, настольные игры и live-казино с живыми дилерами. Площадка работает круглосуточно и предлагает быстрый вход через рабочее зеркало.
            </p>
            <div className="lb-hero__cta">
              <a href="#signup" className="lb-btn lb-btn--gold">
                Начать игру
              </a>
              <a href="#mirror" className="lb-btn lb-btn--ghost">
                Зеркало сайта
              </a>
            </div>
          </div>
          <div className="lb-hero__art">
            <img
              src="/images/lb-mascot.png"
              alt="Lucky Bear Casino — талисман медведя для азартных игр онлайн"
              width={600}
              height={450}
            />
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="lb-section">
          <div className="lb-container">
            <div className="lb-section__head">
              <span className="lb-section__eyebrow">О платформе</span>
              <h2 className="lb-section__title">
                Lucky Bear Casino официальный сайт — надёжность и лицензия
              </h2>
            </div>
            <div className="lb-twocol">
              <div>
                <p className="lb-section__text">
                  Lucky Bear Casino официальный сайт работает по международной лицензии и использует сертифицированный генератор случайных чисел. Все данные игроков защищены шифрованием, а финансовые операции проходят через проверенные платёжные системы. На лаки бир казино официальный сайт вы найдёте прозрачные правила и круглосуточную поддержку.
                </p>
                <p className="lb-section__text">
                  Lucky bear казино предлагает интерфейс на русском языке, адаптированный под мобильные устройства. Лаки бир казино официальный — это гарантия честной игры. Luckybear casino официальный сайт работает стабильно и обеспечивает быстрый доступ ко всем функциям платформы.
                </p>
              </div>
              <div className="lb-twocol__media">
                <img
                  src="/images/lb-shield.png"
                  alt="Защита данных и лицензия Lucky Bear Casino"
                  width={600}
                  height={450}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="mirror" className="lb-section lb-section--alt">
          <div className="lb-container">
            <div className="lb-section__head">
              <span className="lb-section__eyebrow">Доступ 24/7</span>
              <h2 className="lb-section__title">
                Лаки бир казино зеркало — вход без блокировок
              </h2>
            </div>
            <div className="lb-twocol lb-twocol--reverse">
              <div>
                <p className="lb-section__text">
                  Если основной адрес недоступен, используйте лаки бир казино зеркало. Это точная копия сайта с тем же функционалом, играми и балансом. Luckybear casino зеркало обновляется ежедневно, поэтому вход остаётся стабильным даже при блокировках провайдера.
                </p>
                <p className="lb-section__text">
                  Используйте luckybear casino зеркало для надёжного доступа к любимым играм. Сохраните актуальную ссылку и заходите на лаки бир казино сайт в один клик. Лакибир казино официальный сайт всегда доступен через рабочее лаки бир казино зеркало.
                </p>
              </div>
              <div className="lb-twocol__media">
                <img
                  src="/images/lb-mirror.png"
                  alt="Лаки бир казино зеркало — альтернативный вход на сайт"
                  width={600}
                  height={450}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="games" className="lb-section">
          <div className="lb-container">
            <div className="lb-section__head">
              <span className="lb-section__eyebrow">Коллекция игр</span>
              <h2 className="lb-section__title">
                Игры и слоты на лаки бир казино онлайн
              </h2>
            </div>
            <p className="lb-section__text lb-section__text--centered">
              В коллекции лаки бир казино онлайн более 3000 игр от ведущих провайдеров. Классические слоты, видеопокер, рулетка, блэкджек и баккара — всё доступно без скачивания. Lucky Bear казино предлагает демо-режим для знакомства с играми и ставки на реальные деньги. Lucky bear casino — это тысячи слотов с высоким RTP.
            </p>
            <div className="lb-grid lb-grid--4">
              <article className="lb-tile">
                <div className="lb-tile__icon">
                  <img
                    src="/images/lb-slots.png"
                    alt="Слоты"
                    width={56}
                    height={56}
                    loading="lazy"
                  />
                </div>
                <h3 className="lb-tile__title">Слоты</h3>
                <p className="lb-tile__text">
                  Более 2000 игровых автоматов с высоким RTP и бонусными раундами.
                </p>
              </article>
              <article className="lb-tile">
                <div className="lb-tile__icon">
                  <img
                    src="/images/lb-roulette.png"
                    alt="Рулетка"
                    width={56}
                    height={56}
                    loading="lazy"
                  />
                </div>
                <h3 className="lb-tile__title">Рулетка</h3>
                <p className="lb-tile__text">
                  Европейская, американская и французская рулетка с живыми дилерами.
                </p>
              </article>
              <article className="lb-tile">
                <div className="lb-tile__icon">
                  <img
                    src="/images/lb-cards.png"
                    alt="Карточные игры"
                    width={56}
                    height={56}
                    loading="lazy"
                  />
                </div>
                <h3 className="lb-tile__title">Карточные игры</h3>
                <p className="lb-tile__text">
                  Блэкджек, баккара, покер и видеопокер для любителей стратегии.
                </p>
              </article>
              <article className="lb-tile">
                <div className="lb-tile__icon">
                  <img
                    src="/images/lb-jackpot.png"
                    alt="Джекпот"
                    width={56}
                    height={56}
                    loading="lazy"
                  />
                </div>
                <h3 className="lb-tile__title">Джекпоты</h3>
                <p className="lb-tile__text">
                  Прогрессивные джекпоты с призами до нескольких миллионов.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="bonus" className="lb-section lb-section--alt">
          <div className="lb-container">
            <div className="lb-section__head">
              <span className="lb-section__eyebrow">Промоакции</span>
              <h2 className="lb-section__title">
                Бонусы и акции в luckybear casino
              </h2>
            </div>
            <div className="lb-twocol">
              <div>
                <p className="lb-section__text">
                  Luckybear casino официальный сайт радует новых и постоянных игроков щедрыми бонусами. Приветственный пакет включает бонус на первый депозит и фриспины в популярных слотах. На лакибир казино официальный сайт действует программа лояльности с кэшбэком, турнирами и розыгрышами призов.
                </p>
                <p className="lb-section__text">
                  Активируйте промокоды в личном кабинете и получайте дополнительные возможности. Luckybear casino официальный сайт регулярно проводит сезонные акции с увеличенными бонусами и эксклюзивными призами для активных игроков лакибир казино.
                </p>
              </div>
              <div className="lb-twocol__media">
                <img
                  src="/images/lb-bonus.png"
                  alt="Бонусы и акции Lucky Bear Casino"
                  width={600}
                  height={450}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="signup" className="lb-section">
          <div className="lb-container">
            <div className="lb-section__head">
              <span className="lb-section__eyebrow">Начать игру</span>
              <h2 className="lb-section__title">
                Регистрация и вход на лаки бир казино сайт
              </h2>
            </div>
            <div className="lb-twocol lb-twocol--reverse">
              <div>
                <p className="lb-section__text">
                  Создать аккаунт на лаки бир казино сайт можно за минуту. Заполните короткую форму, подтвердите email и пополните счёт удобным способом. Lucky Bear Casino поддерживает банковские карты, электронные кошельки и криптовалюту. После регистрации вам доступны все игры лакибир казино.
                </p>
                <p className="lb-section__text">
                  Вход на lucky bear casino осуществляется по логину и паролю. Luckybear casino официальный сайт гарантирует безопасность вашего аккаунта и защиту персональных данных. Мобильная версия лаки бир казино сайт работает на любом устройстве.
                </p>
                <div className="lb-cta-wrap">
                  <a href="#signup" className="lb-btn lb-btn--gold">
                    Зарегистрироваться
                  </a>
                </div>
              </div>
              <div className="lb-twocol__media">
                <img
                  src="/images/lb-mobile.png"
                  alt="Мобильная версия Lucky Bear Casino"
                  width={600}
                  height={450}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="lb-footer">
        <div className="lb-container">
          <div className="lb-footer__brand">Lucky Bear Casino</div>
          <p className="lb-footer__desc">
            Официальный сайт лаки бир казино онлайн. Играйте ответственно. Только для лиц старше 18 лет.
          </p>
          <div className="lb-footer__tags">
            <a href="#about" className="lb-tag">#luckybearcasino</a>
            <a href="#about" className="lb-tag">#лакибирказино</a>
            <a href="#about" className="lb-tag">#luckybearcasinoофициальный</a>
            <a href="#about" className="lb-tag">#лакибирказиноофициальныйсайт</a>
            <a href="#mirror" className="lb-tag">#luckybearcasinoзеркало</a>
            <a href="#mirror" className="lb-tag">#лакибирказиносайт</a>
            <a href="#games" className="lb-tag">#лакибирказиноонлайн</a>
            <a href="#about" className="lb-tag">#luckybearcasinoофициальныйсайт</a>
            <a href="#mirror" className="lb-tag">#лакибирказинозеркало</a>
            <a href="#about" className="lb-tag">#лакибирказиноофициальный</a>
            <a href="#games" className="lb-tag">#luckybearказино</a>
            <a href="#about" className="lb-tag">#лакибирказино</a>
            <a href="#about" className="lb-tag">#luckybearcasino</a>
            <a href="#signup" className="lb-tag">#лакибирказино</a>
          </div>
          <div className="lb-footer__copy">
            © 2024 Lucky Bear Casino. Все права защищены. Канонический адрес: luckybear23casino.vercel.app
          </div>
        </div>
      </footer>
    </div>
  )
}
