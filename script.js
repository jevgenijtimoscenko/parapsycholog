// ====== Массив статей ======
const blogPosts = [
  {
    title: "Сознание и энергия",
    content: `
      <section style="background-color: #111; color: #f5f5f5; padding: 50px 20px; line-height: 1.8; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; border-radius: 10px; max-width: 900px; margin: 50px auto;">
        <h2 style="color: #e9e4d6ff; font-size: 2em; margin-bottom: 20px; text-align: center;">Связь сознания, энергии и невидимых сил подсознания</h2>
        <p>Сознание человека — это не просто результат биохимических процессов, но сложная сеть энергии и вибраций, взаимодействующая с тонкими слоями реальности. За пределами обычного восприятия скрываются невидимые силы, которые формируют наши мысли, эмоции и судьбу. Эти силы часто проявляются через интуицию, предчувствия, а также мистические и паранормальные явления.</p>
        <p>Энергетическое поле человека, которое традиционно изучается в биоэнергетике и эзотерических практиках, является мостом между физическим и нефизическим измерениями. С помощью осознанного взаимодействия с этим полем возможно обнаружить скрытые паттерны, влияющие на психику и духовное состояние. Подсознание хранит информацию, недоступную рациональному разуму, и часто посылает сигналы через символы, сны и синхроничности.</p>
        <p>Практики, такие как Таро, хирология и работа с Дизайном Человека, позволяют установить контакт с этими невидимыми структурами и направлять энергию сознательно. Таким образом, человек получает возможность не только понимать себя глубже, но и влиять на свою жизненную траекторию, интегрируя внутренние знания и внешние энергии в гармоничное целое.</p>
        <p>Постижение этой связи между сознанием, энергией и подсознательными силами требует внимательного наблюдения, медитативной практики и открытости к необъяснимому. Именно в этом взаимодействии рождается понимание себя как существа, способного ощущать, направлять и преобразовывать энергию жизни.</p>
      </section>
    `
  },
  {
    title: "Введение в парапсихологию",
    content: `
      <section style="background-color: #080000ff; color: #f5f5f5; padding: 40px 20px; line-height: 1.8; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; border-radius: 10px; max-width: 900px; margin: 50px auto;">
        <h2 style="color: #afa68aff; font-size: 2em; margin-bottom: 20px; text-align: center;">Введение в парапсихологию</h2>
        <p>Основные методы и техники для понимания невидимых сил: телепатия, ясновидение, работа с энергетическими полями, а также изучение феноменов подсознания и астрального опыта.</p>
      </section>
    `
  }
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
    title.style.marginBottom = "15px";
    
    const content = document.createElement('div');
    content.innerHTML = post.content; // <-- важно: используем innerHTML для HTML-контента
    
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
