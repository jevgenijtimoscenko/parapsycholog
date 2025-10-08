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


// ====== Фаза Луны ======
function getMoonPhase(date = new Date()) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  let r = (year % 100) % 19;
  r = (r * 11) % 30 + month + day;
  r = r % 30;

  if (r < 1) return "Новолуние";
  if (r < 7) return "Растущая Луна";
  if (r < 15) return "Первая четверть";
  if (r < 22) return "Полнолуние";
  return "Убывающая Луна";
}

// Инициализация
document.getElementById("phase-name").textContent = getMoonPhase();

