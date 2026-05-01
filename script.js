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

function acceptCookies() {
  localStorage.setItem("cookieConsent", "accepted");
  document.getElementById("cookie-banner").style.display = "none";
}

function rejectCookies() {
  localStorage.setItem("cookieConsent", "rejected");
  document.getElementById("cookie-banner").style.display = "none";
}

window.onload = function() {
  const consent = localStorage.getItem("cookieConsent");

  if (consent) {
    document.getElementById("cookie-banner").style.display = "none";
  }
};
