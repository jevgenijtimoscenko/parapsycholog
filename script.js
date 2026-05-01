document.addEventListener("DOMContentLoaded", () => {

  // ===== BLOG ANIMATION =====
  const posts = document.querySelectorAll(".blog-post");
  posts.forEach(post => post.classList.add("fade-in"));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.1 });

  posts.forEach(el => observer.observe(el));

  

  // ===== COOKIE =====
  const banner = document.getElementById("cookie-banner");
  if (!banner) return;

  const consent = localStorage.getItem("cookieConsent");

  if (consent) {
    banner.style.display = "none";

    if (consent === "accepted") {
      loadAnalytics();
    }

    // 🔥 ВАЖНО — чтобы кнопка не пропадала
    if (window.scrollY < 100) {
      btn.style.display = "block";
    }
  }

  const acceptBtn = banner.querySelector(".accept-btn");
  const rejectBtn = banner.querySelector(".reject-btn");

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");
    banner.style.display = "none";
    loadAnalytics();

    // 🔥 ФИКС — кнопка остаётся
    setTimeout(() => {
      btn.style.display = "block";
    }, 100);
  });

  rejectBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "rejected");
    banner.style.display = "none";

    // 🔥 ФИКС — кнопка остаётся
    setTimeout(() => {
      btn.style.display = "block";
    }, 100);
  });

});


// ===== ANALYTICS =====
let analyticsLoaded = false;

function loadAnalytics() {
  if (analyticsLoaded) return;
  analyticsLoaded = true;

  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-VZY7NYD5E7";
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', 'G-VZY7NYD5E7');
}