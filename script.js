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
