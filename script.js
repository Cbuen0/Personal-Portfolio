// Hamburger 
document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("navLinks").classList.toggle("open");
});     
  
// Dark Mode
const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("change", () => {
  if (darkToggle.checked) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});
  
// Collapsable Cert
function toggleCerts() {
    const content = document.getElementById("certContent");
    const arrow = document.getElementById("certArrow");
    const isOpen = content.style.display !== "none";
    content.style.display = isOpen ? "none" : "block";
    arrow.textContent = isOpen ? "►" : "▼";
}
  
// Smooth Scroll
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});
  
// Feedback alert
const form = document.getElementById("feedbackForm");
if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thanks for your feedback!");
      this.reset();
    });
}

