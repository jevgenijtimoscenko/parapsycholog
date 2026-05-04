document.addEventListener("DOMContentLoaded", () => {

  // ===== BLOG ANIMATION =====
  const posts = document.querySelectorAll(".blog-post");

  if (posts.length > 0) {
    posts.forEach(post => post.classList.add("fade-in"));

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });

    posts.forEach(el => observer.observe(el));
  }


  // ===== CLOCKS =====
  startClocks();


  // ===== COOKIE =====
  const banner = document.getElementById("cookie-banner");

  if (banner) {
    const consent = localStorage.getItem("cookieConsent");

    if (consent) {
      banner.style.display = "none";

      if (consent === "accepted") {
        loadAnalytics();
      }
    }

    const acceptBtn = banner.querySelector(".accept-btn");
    const rejectBtn = banner.querySelector(".reject-btn");

    acceptBtn?.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "accepted");
      banner.style.display = "none";
      loadAnalytics();
    });

    rejectBtn?.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "rejected");
      banner.style.display = "none";
    });
  }

});


// ===== CLOCK SYSTEM =====
function startClocks() {
  updateClocks();
  setInterval(updateClocks, 1000);
}

function updateClocks() {
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };

  const london = document.getElementById('london');
  const riga = document.getElementById('riga');
  const moscow = document.getElementById('moscow');
  const newyork = document.getElementById('newyork');

  // если блока нет — просто ничего не делаем (НЕ ломаем сайт)
  if (!london || !riga || !moscow || !newyork) return;

  london.textContent =
    new Date().toLocaleTimeString('en-GB', { ...options, timeZone: 'Europe/London' });

  riga.textContent =
    new Date().toLocaleTimeString('lv-LV', { ...options, timeZone: 'Europe/Riga' });

  moscow.textContent =
    new Date().toLocaleTimeString('ru-RU', { ...options, timeZone: 'Europe/Moscow' });

  newyork.textContent =
    new Date().toLocaleTimeString('en-US', { ...options, timeZone: 'America/New_York' });
}


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

  function gtag() {
    dataLayer.push(arguments);
  }

  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', 'G-VZY7NYD5E7');
}
