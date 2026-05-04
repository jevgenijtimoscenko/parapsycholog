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
  }

  const acceptBtn = banner.querySelector(".accept-btn");
  const rejectBtn = banner.querySelector(".reject-btn");

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");
    banner.style.display = "none";
    loadAnalytics();
  });

  rejectBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "rejected");
    banner.style.display = "none";
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

<script>
function updateClocks() {
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };

  document.getElementById('london').textContent =
    new Date().toLocaleTimeString('en-GB', { ...options, timeZone: 'Europe/London' });

  document.getElementById('riga').textContent =
    new Date().toLocaleTimeString('lv-LV', { ...options, timeZone: 'Europe/Riga' });

  document.getElementById('moscow').textContent =
    new Date().toLocaleTimeString('ru-RU', { ...options, timeZone: 'Europe/Moscow' });

  document.getElementById('newyork').textContent =
    new Date().toLocaleTimeString('en-US', { ...options, timeZone: 'America/New_York' });
}

// обновление каждую секунду
setInterval(updateClocks, 1000);
updateClocks();
</script>
