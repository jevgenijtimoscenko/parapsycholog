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


// Фаза Луны
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


}

// Стиль луны по фазе
function setMoonStyle(phase) {
  const moon = document.getElementById("moon-img");
  switch(phase) {
    case "Новолуние":
      moon.style.background = "#1b1b2f";
      moon.style.boxShadow = "0 0 20px 5px rgba(0,0,0,0.7)";
      break;
    case "Растущая Луна":
      moon.style.background = "#f0e6d2";
      moon.style.boxShadow = "0 0 25px 8px rgba(240,230,210,0.7)";
      break;
    case "Первая четверть":
      moon.style.background = "#f0e6d2";
      moon.style.boxShadow = "0 0 30px 10px rgba(240,230,210,0.8)";
      break;
    case "Полнолуние":
      moon.style.background = "#fffacd";
      moon.style.boxShadow = "0 0 40px 15px rgba(255,250,205,0.9)";
      break;
    case "Убывающая Луна":
      moon.style.background = "#e0d8b0";
      moon.style.boxShadow = "0 0 25px 8px rgba(224,216,176,0.7)";
      break;
  }
}

// Пример приближённого знака Луны по дню месяца
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

// Вставка данных в футер
const phase = getMoonPhase();
document.getElementById("phase-name").innerText = phase;
document.getElementById("moon-description").innerText = getMoonDescription(phase);
document.getElementById("moon-sign").innerText = `Луна в знаке: ${getMoonSign(new Date().getDate())}`;
document.getElementById("phase-date").innerText = new Date().toLocaleDateString("ru-RU");
setMoonStyle(phase);
