document.addEventListener("DOMContentLoaded", () => {
  const posts = document.querySelectorAll(".blog-post");
  posts.forEach(post => post.classList.add("fade-in"));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.1 });

  posts.forEach(el => observer.observe(el));
});
