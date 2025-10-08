
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

// ====== Получаем услуги и блог ======
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const servicesList = document.getElementById('services-list');
    data.services.forEach(service => {
      const li = document.createElement('li');
      li.textContent = service;
      servicesList.appendChild(li);
    });

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

// ====== Получаем фазу и знак Луны через API ======
async function updateMoon() {
  try {
    const today = new Date();
    const dateStr = today.toISOString().split('T')[0]; // формат YYYY-MM-DD

    // Пример API, подставь свой реальный URL
    const response = await fetch(`https://api.example.com/moon?date=${dateStr}`);
    const data = await response.json();

    // Предположим, API возвращает { phase: "Полнолуние", sign: "Рыбы" }
    const phase = data.phase;
    const sign = data.sign;

    document.getElementById("phase-name").innerText = phase;
    document.getElementById("moon-sign").innerText = `Луна в знаке: ${sign}`;
    document.getElementById("phase-date").innerText = today.toLocaleDateString("ru-RU");

    // Маска фазы
    setMoonPhaseMask(phase);

  } catch (error) {
    console.error('Ошибка при получении данных о Луне:', error);
  }
}

// ====== Маска фазы Луны ======
function setMoonPhaseMask(phase) {
  const moon = document.getElementById('moon-img');
  let shift;
  switch(phase) {
    case "Новолуние": shift = "100%"; break;
    case "Растущая Луна": shift = "25%"; break;
    case "Первая четверть": shift = "0%"; break;
    case "Полнолуние": shift = "-50%"; break;
    case "Убывающая Луна": shift = "-25%"; break;
    default: shift = "0%";
  }
  moon.style.setProperty('--mask-shift', shift);
}

// ====== Запуск ======
updateMoon();



