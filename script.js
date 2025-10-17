// ====== МАССИВ СТАТЕЙ ======
const blogPosts = [
  {
    title: "Сознание и энергия",
    content: `
      <section class="blog-article">
        <p>Сознание человека — это не просто результат биохимических процессов, но сложная сеть энергии и вибраций, взаимодействующая с тонкими слоями реальности. За пределами обычного восприятия скрываются невидимые силы, которые формируют наши мысли, эмоции и судьбу.</p>
        <p>Энергетическое поле человека, традиционно изучаемое в биоэнергетике и эзотерических практиках, является мостом между физическим и нефизическим измерениями. С помощью осознанного взаимодействия с этим полем возможно обнаружить скрытые паттерны, влияющие на психику и духовное состояние.</p>
        <p>Практики, такие как Таро, хирология и работа с Дизайном Человека, позволяют установить контакт с этими невидимыми структурами и направлять энергию сознательно. Таким образом, человек получает возможность не только понимать себя глубже, но и влиять на свою жизненную траекторию.</p>
        <p>Постижение этой связи между сознанием, энергией и подсознательными силами требует внимательного наблюдения, медитативной практики и открытости к необъяснимому.</p>
        <p>Парапсихология исследует скрытые возможности человеческого сознания — телепатию, ясновидение, психокинез, предчувствие и взаимодействие с энергетическими структурами мира. Это наука о тонких связях между мыслью и материей.</p>
        <p>Изучая эти явления, человек открывает более глубокое понимание своей природы и силы духа, а также осознаёт, что границы реальности шире, чем принято считать.</p>
      </section>
    `
  },
  {
    title: "ЭНЕРГЕТИЧЕСКОЕ ТЕЛО",
    content: `
      <section class="blog-article">
        <p>Энергетическое тело человека возникает из концентрированной космической энергии в момент синтеза двух энергетических тел: яйца и зародышевой клетки. Его структура определяется в значительной степени преобладающей в этот момент космоэнергетической констеляцией (что объясняет влияние расположения планет и биоритмических пропорций на момент
зачатия).</p>
      </section>
    `
  }
];

// ====== ОТОБРАЖЕНИЕ СТАТЕЙ ======
function renderBlog() {
  const blogList = document.getElementById('blog-list');
  if (!blogList) return;

  blogList.innerHTML = ""; // очистка старого контента

  blogPosts.forEach(post => {
    const article = document.createElement('article');
    article.classList.add('fade-in');

    const title = document.createElement('h2');
    title.textContent = post.title;
    title.classList.add('blog-title');

    const content = document.createElement('div');
    content.innerHTML = post.content;

    article.appendChild(title);
    article.appendChild(content);
    blogList.appendChild(article);
  });

  // IntersectionObserver для плавного появления
  const elements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

// ====== ИНИЦИАЛИЗАЦИЯ ======
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("blog.html")) {
    renderBlog();
  }
});
