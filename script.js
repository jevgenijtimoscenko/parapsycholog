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
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

<script>
document.addEventListener("DOMContentLoaded", () => {

  const banner = document.getElementById("cookie-banner");

  if (!banner) return;

  const consent = localStorage.getItem("cookieConsent");

  if (consent) {
    banner.style.display = "none";
  }

  const acceptBtn = banner.querySelector(".accept-btn");
  const rejectBtn = banner.querySelector(".reject-btn");

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");
    banner.style.display = "none";
  });

  rejectBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "rejected");
    banner.style.display = "none";
  });

});
</script>
