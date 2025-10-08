// ====== Fetch данных для сайта ======
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Услуги
    const servicesList = document.getElementById('services-list');
    data.services.forEach(service => {
      const li = document.createElement('li');
      li.textContent = service;
      servicesList.appendChild(li);
    });

    // Блог
    const blogList = document.getElementById('blog-list');
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
  })
  .catch(err => console.error('Ошибка загрузки данных:', err));

// ====== Загрузка данных из data.json ======
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Услуги
    const servicesList = document.getElementById('services-list');
    if (servicesList) {
      data.services.forEach(service => {
        const li = document.createElement('li');
        li.textContent = service;
        servicesList.appendChild(li);
      });
    }

    // Блог
    const blogList = document.getElementById('blog-list');
    if (blogList) {
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


// ====== Фаза Луны ======
function getMoonPhase() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  let r = (year % 100) % 19;
  r = (r * 11) % 30 + month + day;
  r = r % 30;

  if (r < 1) return "Новолуние";
  if (r < 7) return "Растущая Луна";
  if (r < 15) return "Первая четверть";
  if (r < 22) return "Полнолуние";
  return "Убывающая Луна";
}

// ====== Знак Луны ======
function getMoonSign(day) {
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

// ====== Инициализация ======
const phase = getMoonPhase();
const today = new Date().getDate();

const phaseEl = document.getElementById("phase-name");
const signEl = document.getElementById("moon-sign");
const dateEl = document.getElementById("phase-date");

if (phaseEl) phaseEl.textContent = phase;
if (signEl) signEl.textContent = `Луна в знаке: ${getMoonSign(today)}`;
if (dateEl) dateEl.textContent = new Date().toLocaleDateString("ru-RU");
