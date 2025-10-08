// ====== Загрузка данных из data.json ======
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // ====== Услуги (только если есть контейнер) ======
    const servicesList = document.getElementById('services-list');
    if (servicesList && data.services) {
      data.services.forEach(service => {
        const li = document.createElement('li');
        li.textContent = service;
        servicesList.appendChild(li);
      });
    }

    // ====== Блог (только если есть контейнер) ======
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


// ====== Фаза Луны (упрощённая, но более точная) ======
function getMoonPhase(date = new Date()) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  let c = 0, e = 0, jd = 0, b = 0;
  if (month < 3) {
    c = year - 1;
    e = month + 12;
  } else {
    c = year;
    e = month;
  }
  jd = 365.25 * c + 30.6 * (e + 1) + day - 694039.09;
  jd /= 29.5305882;
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

// ====== Приближённый знак Луны ======
function getMoonSign(date = new Date()) {
  const day = date.getDate();
  if (day <= 2) return "Овен";
  if (day <= 5) return "Телец";
  if (day <= 8) return "Близнецы";
  if (day <= 11) return "Рак";
  if (day <= 14) return "Лев";
  if (day <= 17) return "Дева";
  if (day <= 20) return "Весы";
  if (day <= 23) return "Скорпион";
  if (day <= 26) return "Стрелец";
  if (day <= 29) return "Козерог";
  if (day <= 30) return "Водолей";
  return "Рыбы";
}

// ====== Инициализация Луны ======
(function initMoon() {
  const today = new Date();
  const phase = getMoonPhase(today);
  const sign = getMoonSign(today);

  const phaseEl = document.getElementById("phase-name");
  const signEl = document.getElementById("moon-sign");
  const dateEl = document.getElementById("phase-date");

  if (phaseEl) phaseEl.textContent = phase;
  if (signEl) signEl.textContent = `Луна в знаке: ${sign}`;
  if (dateEl) dateEl.textContent = today.toLocaleDateString("ru-RU");
})();
