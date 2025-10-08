// ====== Массив статей ======
const blogPosts = [
  {
    title: "Сознание и энергия",
    content: "Исследуем, как сознание влияет на энергетические поля и нашу жизнь."
  },
  {
    title: "Введение в парапсихологию",
    content: "Основные методы и техники для понимания невидимых сил."
  }
  // Чтобы добавить новую статью, просто добавь объект сюда:
  // { title: "Новая статья", content: "Текст статьи" }
];

// ====== Функция для отображения статей ======
function renderBlog() {
  const blogList = document.getElementById('blog-list');
  if (!blogList) return;

  blogList.innerHTML = ""; // очищаем, чтобы не дублировалось
  blogPosts.forEach(post => {
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

// ====== Инициализация ======
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  // === Главная страница ===
  if (path.includes("index.html") || path === "/" || path.endsWith("/")) {
    const phaseEl = document.getElementById("phase-name");
    if (phaseEl) {
      phaseEl.textContent = `Фаза Луны: ${getMoonPhase()}`;
    }
  }

  // === Блог ===
  if (path.includes("blog.html")) {
    renderBlog();
  }
});
