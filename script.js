document.addEventListener("DOMContentLoaded", () => {
  const blogList = document.getElementById("blog-list");
  if (!blogList) return;

  const posts = blogList.querySelectorAll(".blog-post");

  posts.forEach(post => {
    post.classList.add("fade-in"); // для эффекта
  });

  const elements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
});
