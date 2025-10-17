document.addEventListener("DOMContentLoaded", () => {
  const blogPosts = [
    {
      title: "Сознание и энергия",
      content: `<section class="blog-article">
        <p>Сознание человека — это не просто результат биохимических процессов...</p>
        <p>Энергетическое поле человека, традиционно изучаемое в биоэнергетике...</p>
        <p>Практики, такие как Таро, хирология и работа с Дизайном Человека...</p>
        <p>Постижение этой связи между сознанием, энергией и подсознательными силами...</p>
        <p>Парапсихология исследует скрытые возможности человеческого сознания...</p>
        <p>Изучая эти явления, человек открывает более глубокое понимание своей природы...</p>
      </section>`
    },
    {
      title: "ЭНЕРГЕТИЧЕСКОЕ ТЕЛО",
      content: `<section class="blog-article">
        <p>Энергетическое тело человека возникает из концентрированной космической энергии...</p>
        <p>Внутри энергетического тела информационные импульсы передаются через систему нади или меридианов...</p>
      </section>`
    }
  ];

  const blogList = document.getElementById("blog-list");
  if (!blogList) return;

  blogList.innerHTML = "";

  blogPosts.forEach(post => {
    const article = document.createElement("article");
    article.classList.add("fade-in");

    const title = document.createElement("h2");
    title.textContent = post.title;
    title.classList.add("blog-title");

    const content = document.createElement("div");
    content.innerHTML = post.content;

    article.appendChild(title);
    article.appendChild(content);
    blogList.appendChild(article);
  });

  const elements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
});
