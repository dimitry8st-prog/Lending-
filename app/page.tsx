const issues = [
  ["Тревога и напряжение", "Когда сложно расслабиться, мысли не останавливаются, а привычные способы уже не помогают."],
  ["Отношения и границы", "Помогу услышать себя, говорить о важном и выстраивать близость без потери собственных границ."],
  ["Самооценка и опора", "Работаем с внутренним критиком, неуверенностью и привычкой обесценивать свои достижения."],
  ["Перемены и кризисы", "Бережно пройдём период расставания, переезда, смены работы или потери привычных ориентиров."],
];

const steps = [
  ["01", "Знакомимся", "Вы рассказываете, что происходит и чего хотели бы изменить. Я отвечаю на вопросы о работе."],
  ["02", "Определяем цель", "Вместе формулируем понятный запрос и выбираем комфортный темп встреч."],
  ["03", "Двигаемся к изменениям", "Замечаем устойчивые сценарии, пробуем новые способы и закрепляем внутреннюю опору."],
];

const faqs = [
  ["Сколько встреч обычно нужно?", "Это зависит от запроса. Иногда достаточно нескольких консультаций, для глубокой работы требуется больше времени. После первых встреч мы обсудим подходящий формат."],
  ["Можно ли проводить встречи онлайн?", "Да. Онлайн-консультации проходят по видеосвязи и подходят клиентам из любого города. Важно найти спокойное место, где вас не будут отвлекать."],
  ["Что, если я не знаю, с чего начать?", "Это нормально. Не нужно заранее готовить правильный рассказ. Мы начнём с того, что беспокоит вас сейчас, и постепенно проясним запрос."],
  ["Конфиденциальны ли консультации?", "Да. Содержание встреч остаётся между нами. Исключения и границы конфиденциальности я объясняю на первой консультации."],
];

export default function Home() {
  return (
    <>
      <header className="header">
        <a className="brand" href="#top" aria-label="На главную">
          <span>АМ</span><strong>Анна Миронова<small>психолог-консультант</small></strong>
        </a>
        <nav aria-label="Основная навигация">
          <a href="#about">Обо мне</a><a href="#work">С чем работаю</a><a href="#process">Как проходит</a>
        </nav>
        <a className="button button-small" href="#contact">Записаться</a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Психологическая консультация · Москва и онлайн</p>
            <h1>Место, где можно быть собой и найти внутреннюю опору</h1>
            <p className="lead">Помогаю взрослым справляться с тревогой, сложностями в отношениях и периодами перемен — бережно, конфиденциально и без оценок.</p>
            <div className="hero-actions">
              <a className="button" href="#contact">Записаться на консультацию</a>
              <a className="text-link" href="#process">Как проходит встреча <span>→</span></a>
            </div>
            <div className="trust-row"><span>✓ Конфиденциально</span><span>✓ Онлайн и очно</span><span>✓ 50 минут</span></div>
          </div>
          <div className="portrait" role="img" aria-label="Демонстрационный портрет психолога Анны Мироновой">
            <div className="sun" />
            <div className="portrait-card">
              <div className="face">А</div>
              <blockquote>«Вам не обязательно проходить через трудное в одиночку»</blockquote>
            </div>
          </div>
        </section>

        <section className="intro" id="about">
          <div><p className="eyebrow">Обо мне</p><h2>Рядом, чтобы вы могли лучше услышать себя</h2></div>
          <div className="about-copy">
            <p>Меня зовут Анна Миронова. Я психолог-консультант, работаю со взрослыми индивидуально. В основе моей практики — уважение к вашему опыту и уверенность, что устойчивые изменения рождаются в безопасном контакте.</p>
            <p>Не даю универсальных советов и не оцениваю. Мы вместе исследуем то, что происходит, находим ваши собственные ответы и способы действовать иначе.</p>
            <div className="credentials"><span><b>8 лет</b> практики</span><span><b>1200+</b> консультаций</span><span><b>Регулярная</b> супервизия</span></div>
          </div>
        </section>

        <section className="section soft" id="work">
          <div className="section-head"><p className="eyebrow">С чем я работаю</p><h2>Запросы, с которыми можно обратиться</h2><p>Необязательно точно называть проблему. Достаточно ощущения, что сейчас вам трудно и хочется поддержки.</p></div>
          <div className="cards">{issues.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>

        <section className="section" id="process">
          <div className="section-head narrow"><p className="eyebrow">Как всё устроено</p><h2>Понятный и бережный процесс</h2></div>
          <div className="steps">{steps.map(([n, title, text]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
          <div className="format"><div><small>Формат</small><b>Онлайн или очно в Москве</b></div><div><small>Продолжительность</small><b>50 минут</b></div><div><small>Стоимость</small><b>4 000 ₽</b></div><a className="button" href="#contact">Выбрать время</a></div>
        </section>

        <section className="quote-section">
          <p>«Главная цель терапии — не стать кем-то другим, а разрешить себе быть собой»</p>
          <span>— Карл Роджерс</span>
        </section>

        <section className="section testimonials">
          <div className="section-head narrow"><p className="eyebrow">Отзывы</p><h2>Что меняется после работы</h2></div>
          <div className="review-grid">
            <blockquote>«Я впервые смогла спокойно сказать “нет” и не чувствовать себя виноватой. Появилось ощущение, что на себя можно опереться».<cite>Мария, 34 года</cite></blockquote>
            <blockquote>«Пришёл с постоянной тревогой. Постепенно научился замечать её раньше и понимать, что именно мне сейчас нужно».<cite>Алексей, 39 лет</cite></blockquote>
          </div>
          <p className="privacy">Имена и отдельные детали изменены для сохранения конфиденциальности.</p>
        </section>

        <section className="section faq">
          <div className="section-head narrow"><p className="eyebrow">FAQ</p><h2>Частые вопросы</h2></div>
          <div>{faqs.map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
        </section>

        <section className="contact" id="contact">
          <div><p className="eyebrow">Первый шаг</p><h2>Запишитесь на консультацию</h2><p>Оставьте контакты — я напишу вам в течение рабочего дня, отвечу на вопросы и предложу свободное время.</p><div className="direct"><a href="tel:+79991234567">+7 (999) 123-45-67</a><a href="mailto:hello@annamironova.ru">hello@annamironova.ru</a></div></div>
          <form>
            <label>Ваше имя<input name="name" placeholder="Как к вам обращаться" required /></label>
            <label>Телефон или Telegram<input name="contact" placeholder="+7 999 000-00-00" required /></label>
            <label>Удобный формат<select name="format"><option>Онлайн</option><option>Очно в Москве</option><option>Пока не знаю</option></select></label>
            <label className="consent"><input type="checkbox" required /> <span>Согласен(а) с обработкой персональных данных</span></label>
            <button className="button" type="submit">Отправить заявку</button>
            <small>Демонстрационная форма. Подключение отправки выполняется при переносе на WordPress.</small>
          </form>
        </section>
      </main>
      <footer><div className="brand"><span>АМ</span><strong>Анна Миронова<small>психолог-консультант</small></strong></div><p>© 2026 · Демонстрационный сайт</p><a href="#top">Наверх ↑</a></footer>
    </>
  );
}
