// Dark Mode Switch
const darkToggle = document.getElementById("darkToggle");
const icon = darkToggle.querySelector("i");

// Dark Mode Default
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  icon.className = isLight ? "fas fa-sun" : "fas fa-moon";
});

// Hamburger Menu
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});

// Close nav bar when choosing link mobile
document.querySelectorAll(".nav-item").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("open");
  });
});

// Nav link sync to scroll location
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-item");

const observerNav = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(item => {
        item.classList.toggle(
          "active",
          item.getAttribute("href") === `#${entry.target.id}`
        );
      });
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });

sections.forEach(s => observerNav.observe(s));

// Fade when scrolling
const fadeEls = document.querySelectorAll(
  ".timeline-item, .project-card, .skill-group, .contact-card, .about-grid, .feedback-wrap"
);
fadeEls.forEach(el => el.classList.add("fade-in"));

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add("visible"), i * 80);
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => fadeObserver.observe(el));

// ── Skill Bar Animation ──────────────────────────────────
const bars = document.querySelectorAll(".bar-fill");
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add("animated"), i * 100);
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

bars.forEach(bar => barObserver.observe(bar));

// ── Smooth Scroll ────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// ── Feedback Form ────────────────────────────────────────
const form = document.getElementById("feedbackForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const btn = this.querySelector("button");
    btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
    btn.style.background = "#2d8a4e";
    setTimeout(() => {
      btn.innerHTML = 'Send <i class="fas fa-arrow-right"></i>';
      btn.style.background = "";
    }, 3000);
    this.reset();
  });
}