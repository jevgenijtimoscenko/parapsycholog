// ====== Загрузка данных из data.json ======
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // ====== Услуги ======
    const servicesList = document.getElementById('services-list');
    if (servicesList && data.services) {
      data.services.forEach(service => {
        const li = document.createElement('li');
        li.textContent = service;
        servicesList.appendChild(li);
      });
    }

    // ====== Блог ======
    const blogList = document.getElementById('blog-list');
    if (blogList && data.blog) {
      data.blog.forEach(post => {
        const article = document.createElement('article');
        const title = document.createElement('h3');
        title.textContent = post.title;
        const content = document.createElement('p');
        content.textContent = post.content;
        article.appendChild(title);
        article.appendChild(content);
        blogList.appendChild(article);
      });
    }
  })
  .catch(err => console.error('Ошибка загрузки данных:', err));


// ====== Фаза Луны (реальная, через лунный цикл) ======
function getMoonPhase(date = new Date()) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // приближённый расчёт по Дж. Конвэйну
  let c = 0, e = 0, jd = 0, b = 0;
  if (month < 3) {
    c = year - 1;
    e = month + 12;
  } else {
    c = year;
    e = month;
  }
  jd = 365.25 * c + 30.6 * (e + 1) + day - 694039.09;
  jd /= 29.5305882; // средний лунный цикл
  b = jd - Math.floor(jd);
  if (b < 0) b += 1;

  if (b < 0.03) return "Новолуние";
  if (b < 0.22) return "Растущая Луна";
  if (b < 0.28) return "Первая четверть";
  if (b < 0.47) return "Растущая Луна";
  if (b < 0.53) return "Полнолуние";
  if (b < 0.72) return "Убывающая Луна";
  if (b < 0.78) return "Последняя четверть";
  return "Убывающая Луна";
}

// ====== Инициализация ======
(function initMoon() {
  const today = new Date();
  const phase = getMoonPhase(today);

  const phaseEl = document.getElementById("phase-name");
  const dateEl = document.getElementById("phase-date");

  if (phaseEl) phaseEl.textContent = `Фаза Луны: ${phase}`;
  if (dateEl) dateEl.textContent = today.toLocaleDateString("ru-RU");
})();
